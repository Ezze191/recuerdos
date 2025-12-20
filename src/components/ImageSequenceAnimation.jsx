import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageSequenceAnimation = () => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const totalFrames = 4;
    const frameDelay = 800; // milliseconds between frames - slower for better appreciation

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % totalFrames);
        }, frameDelay);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full py-20 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-72 h-72 bg-rose-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight px-4"
                        style={{ textShadow: '0 0 40px rgba(236, 72, 153, 0.3)' }}>
                        Cada momento contigo es mágico ✨
                    </h2>
                </motion.div>

                {/* Animation Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Glowing border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-3xl blur-xl opacity-75 animate-pulse"></div>

                    {/* Main animation container */}
                    <div className="relative bg-white rounded-3xl shadow-2xl p-4 md:p-8">
                        <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-inner">
                            {/* Image sequence */}
                            {[1, 2, 3, 4].map((frameNum, index) => (
                                <motion.img
                                    key={frameNum}
                                    src={`./animation/${frameNum}.png`}
                                    alt={`Frame ${frameNum}`}
                                    className="absolute inset-0 w-full h-full object-contain"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: currentFrame === index ? 1 : 0,
                                        scale: currentFrame === index ? 1 : 0.95
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}

                            {/* Frame indicator dots */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                                {[0, 1, 2, 3].map((index) => (
                                    <motion.div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentFrame === index
                                            ? 'bg-rose-500 w-8'
                                            : 'bg-white/50 backdrop-blur-sm'
                                            }`}
                                        animate={{
                                            scale: currentFrame === index ? 1.2 : 1
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Decorative hearts */}
                        <div className="absolute -top-6 -right-6 text-6xl animate-bounce">
                            💕
                        </div>
                        <div className="absolute -bottom-6 -left-6 text-5xl animate-bounce delay-500">
                            💖
                        </div>
                    </div>
                </motion.div>

                {/* Additional decorative text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-center mt-8"
                >

                </motion.div>
            </div>

            {/* Floating hearts animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-2xl opacity-30"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 50
                        }}
                        animate={{
                            y: -100,
                            x: Math.random() * window.innerWidth
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "linear"
                        }}
                    >
                        {['❤️', '💕', '💖', '💗', '💝', '💘'][i]}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ImageSequenceAnimation;
