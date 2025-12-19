import React from 'react';
import { motion } from 'framer-motion';

const Dedication = () => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                style={{ backgroundImage: 'url("https://i.pinimg.com/736x/22/e6/30/22e630269fcc634f726297ee6079a7c5.jpg")' }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-script mb-8 text-rose-200">Para Siempre</h2>
                    <p className="text-lg md:text-xl leading-relaxed font-light italic">
                        "No sé qué nos depare el destino, pero mientras estemos juntos, sé que será maravilloso. Gracias por ser mi compañera, mi amiga y mi amor."
                    </p>
                    <div className="mt-8">
                        <span className="font-script text-3xl opacity-80">- Sergio</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Dedication;
