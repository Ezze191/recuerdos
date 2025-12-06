import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const WelcomeScreen = ({ onComplete }) => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        // Generate random hearts
        const newHearts = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100 + 100, // Start below screen
            size: Math.random() * 40 + 20,
            duration: Math.random() * 2 + 3,
            delay: Math.random() * 1,
        }));
        setHearts(newHearts);

        // Timer to dismiss screen
        const timer = setTimeout(() => {
            onComplete();
        }, 4500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-rose-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Floating Hearts Container */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        className="absolute text-rose-400 opacity-60"
                        initial={{ x: `${heart.x}vw`, y: "110vh" }}
                        animate={{ y: "-10vh" }}
                        transition={{
                            duration: heart.duration,
                            delay: heart.delay,
                            ease: "easeOut"
                        }}
                    >
                        <Heart size={heart.size} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            {/* Central Text */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="z-10 text-center"
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mb-8 inline-block"
                >
                    <Heart size={80} className="text-rose-600 drop-shadow-lg" fill="#e11d48" />
                </motion.div>
                <h1 className="font-script text-6xl text-rose-600 mb-2">Sergio y Karen</h1>
                <p className="text-rose-400 text-lg typewriter">Cargando nuestros recuerdos...</p>
            </motion.div>
        </motion.div>
    );
};

export default WelcomeScreen;
