import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Imágenes locales desde la carpeta public/recuerdos
const allImages = [
    "./recuerdos/0C4B565E-26F1-4336-A5D6-C90E5323688C.JPG",
    "./recuerdos/23-12-14 20-35-40 2154.jpg",
    "./recuerdos/23-12-23 22-57-17 2229.jpg",
    "./recuerdos/23-12-23 23-14-52 2236.jpg",
    "./recuerdos/23-12-25 16-38-18 2249.jpg",
    "./recuerdos/25-11-16 20-54-49 6.jpg",
    "./recuerdos/25-11-22 14-42-01 420.jpg",
    "./recuerdos/576A04CD-BC9C-4842-9DEC-38CC3D8B19CE.JPG",
    "./recuerdos/74436A5C-16DF-4E95-BC81-84D470F70A97.JPG",
    "./recuerdos/APRN0146.JPG",
    "./recuerdos/AYGE6848.JPG",
    "./recuerdos/BEZZ6780.JPG",
    "./recuerdos/BGRL8172.JPG",
    "./recuerdos/CJEA8398.JPG",
    "./recuerdos/CRDZ5329.JPG",
    "./recuerdos/DTWM4650.JPG",
    "./recuerdos/EPNT6244.JPG",
    "./recuerdos/F24E299E-7E61-43BB-B711-75F398178EAC.JPG",
    "./recuerdos/FPPZ2954.JPG",
    "./recuerdos/GQFC5102.JPG",
    "./recuerdos/GUNL0122.JPG",
    "./recuerdos/HJWM5018.JPG",
    "./recuerdos/IFOL1367.JPG",
    "./recuerdos/IMG_1049.jpg",
    "./recuerdos/IMG_1653.jpg",
    "./recuerdos/IMG_1698.jpg",
    "./recuerdos/IMG_1749.jpg",
    "./recuerdos/IMG_1788.jpg",
    "./recuerdos/IMG_1908.jpg",
    "./recuerdos/IMG_1918.jpg",
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
