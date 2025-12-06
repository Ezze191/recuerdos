import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Extended list of images for pagination demo
const allImages = [
    // Page 1
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=800&q=80",
    // Page 2
    "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516972084639-67dda430d63a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519671482538-581aca5c8763?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-1645062cd495?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542038784456-1ea0e93ca375?auto=format&fit=crop&w=800&q=80",
    // Page 3
    "https://images.unsplash.com/photo-1621609764095-6b2363a0bb72?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80",
];

const ITEMS_PER_PAGE = 6;

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(allImages.length / ITEMS_PER_PAGE);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const currentImages = allImages.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );

    return (
        <section className="py-20 bg-white relative" id="gallery">
            <h2 className="text-4xl md:text-5xl font-script text-center text-rose-600 mb-12">Nuestros Recuerdos</h2>

            <div className="max-w-6xl mx-auto px-4 relative">

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 -left-2 md:-left-12 transform -translate-y-1/2 z-10">
                    <button
                        onClick={prevPage}
                        className="p-3 rounded-full bg-white shadow-lg text-rose-500 hover:bg-rose-50 hover:text-rose-600 transition-all border border-rose-100"
                    >
                        <ChevronLeft size={32} />
                    </button>
                </div>

                <div className="absolute top-1/2 -right-2 md:-right-12 transform -translate-y-1/2 z-10">
                    <button
                        onClick={nextPage}
                        className="p-3 rounded-full bg-white shadow-lg text-rose-500 hover:bg-rose-50 hover:text-rose-600 transition-all border border-rose-100"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                {/* Grid with animation key based on page to trigger re-render animation */}
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                    {currentImages.map((src, index) => (
                        <motion.div
                            key={`${currentPage}-${index}`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img src={src} alt={`Memory`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Page Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i)}
                            className={`w-3 h-3 rounded-full transition-all ${currentPage === i ? 'bg-rose-500 w-6' : 'bg-rose-200'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[90vh] flex justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 transition-colors z-50"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={32} />
                            </button>
                            <img src={selectedImage} alt="Selected memory" className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
