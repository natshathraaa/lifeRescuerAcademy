import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import data from "../data/gallery.json";

const spanClasses = [
  "col-span-2 row-span-2 aspect-square lg:aspect-auto lg:h-full",
  "aspect-square lg:aspect-auto lg:h-full",
  "aspect-square lg:aspect-auto lg:h-full",
  "aspect-square lg:aspect-auto lg:h-full",
  "aspect-square lg:aspect-auto lg:h-full",
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const tile = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function GalleryTile({ item, className, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${item.title}`}
      variants={tile}
      whileHover={{ scale: 1.015 }}
      className={`relative rounded-[20px] overflow-hidden group bg-navy-50 shadow-card hover:shadow-card-hover transition-all duration-300 border border-navy-900/10 text-left ${className}`}
    >
      <motion.img
        src={item.image}
        alt={item.caption}
        loading="lazy"
        className="w-full h-full object-contain bg-navy-50 scale-100 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent px-4 pb-4 pt-10 md:px-5 md:pb-5 md:pt-12">
        <p className="text-white text-xs font-semibold leading-snug drop-shadow-md md:text-sm">{item.title}</p>
      </div>
    </motion.button>
  );
}

export default function Gallery() {
  const featuredItems = data.items.slice(0, 5);
  const remainingItems = data.items.slice(5);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCollection, setActiveCollection] = useState(remainingItems);
  const touchStartX = useRef(null);

  const closeGallery = () => {
    setActiveIndex(null);
    setIsMoreOpen(false);
  };
  const showPrevious = useCallback(() => setActiveIndex((index) => (index - 1 + activeCollection.length) % activeCollection.length), [activeCollection.length]);
  const showNext = useCallback(() => setActiveIndex((index) => (index + 1) % activeCollection.length), [activeCollection.length]);

  const openFeaturedPhoto = (index) => {
    setActiveCollection(featuredItems);
    setActiveIndex(index);
  };

  const openMorePhotos = () => {
    setActiveCollection(remainingItems);
    setActiveIndex(null);
    setIsMoreOpen(true);
  };

  useEffect(() => {
    if (!isMoreOpen && activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, isMoreOpen, showNext, showPrevious]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 50) (distance > 0 ? showPrevious : showNext)();
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="bg-surface-soft py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-[28px] sm:text-[34px] font-bold text-navy-900 tracking-tight">
            {data.heading}
          </h2>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:auto-rows-[190px]"
        >
          {featuredItems.map((item, i) => (
            <GalleryTile
              key={item.title}
              item={item}
              onOpen={() => openFeaturedPhoto(i)}
              className={spanClasses[i] || "aspect-square"}
            />
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={openMorePhotos}
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white shadow-card transition-colors hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          >
            View More Photos
            <FiChevronRight aria-hidden="true" size={17} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMoreOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="More training photos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/90 p-4 backdrop-blur-md sm:p-8"
            onClick={(event) => { if (event.target === event.currentTarget) closeGallery(); }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close photo gallery"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <FiX aria-hidden="true" size={24} />
            </button>

            {activeIndex === null ? (
              <div className="mx-auto max-w-6xl pt-14" onClick={(event) => event.stopPropagation()}>
                <div className="mb-8 text-center text-white">
                  <h3 className="text-2xl font-bold sm:text-3xl">More Training Photos</h3>
                  <p className="mt-2 text-sm text-navy-100/75">Explore the rest of our hands-on learning moments.</p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {remainingItems.map((item, index) => (
                    <button
                      type="button"
                      key={item.title}
                      onClick={() => setActiveIndex(index)}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/15 bg-white/10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                    >
                      <img src={item.image} alt={item.caption} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="relative flex min-h-[80vh] w-full items-center justify-center"
                onClick={(event) => event.stopPropagation()}
              >
                <button type="button" onClick={showPrevious} aria-label="Previous photo" className="absolute left-0 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-4">
                  <FiChevronLeft aria-hidden="true" size={28} />
                </button>
                <div className="flex max-w-5xl flex-col items-center">
                  <img src={activeCollection[activeIndex].image} alt={activeCollection[activeIndex].caption} className="max-h-[76vh] w-auto max-w-full rounded-xl object-contain shadow-2xl" />
                </div>
                <button type="button" onClick={showNext} aria-label="Next photo" className="absolute right-0 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-4">
                  <FiChevronRight aria-hidden="true" size={28} />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isMoreOpen && activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Featured training photo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-md sm:p-8"
            onClick={closeGallery}
          >
            <button type="button" onClick={closeGallery} aria-label="Close photo gallery" className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
              <FiX aria-hidden="true" size={24} />
            </button>
            <img src={activeCollection[activeIndex].image} alt={activeCollection[activeIndex].caption} className="max-h-[82vh] max-w-full rounded-xl object-contain shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

