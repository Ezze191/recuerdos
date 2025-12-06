import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-rose-100 to-white text-center px-4">
            {/* Background Floating Hearts */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-rose-300 opacity-20"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            y: [null, -100],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <Heart size={Math.random() * 40 + 20} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="z-10 relative"
            >
                <div className="mb-4 flex flex-col items-center">
                    <Heart className="text-rose-500 animate-pulse mb-4" size={64} fill="#f43f5e" />
                    <span className="text-rose-400 tracking-[0.2em] text-sm font-bold uppercase mb-2">Nuestra Historia</span>
                </div>
                <h1 className="font-script text-6xl md:text-9xl text-rose-600 mb-8 drop-shadow-sm">
                    Sergio y Karen
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
                    Cada día a tu lado es mi aventura favorita. <br />
                    Aquí guardamos los momentos que hacen brillar nuestra vida juntos.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 animate-bounce"
            >
                <p className="text-rose-400 text-sm mb-2">Desliza para ver más</p>
                <div className="flex justify-center">
                    <Heart className="text-rose-400" size={24} />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
