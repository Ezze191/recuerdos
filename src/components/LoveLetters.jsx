import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const messages = [
    { title: "Tu Sonrisa", text: "Tiene el poder de cambiar mi día entero en un segundo." },
    { title: "Nuestra Complicidad", text: "Entendernos con solo una mirada es mi superpoder favorito." },
    { title: "Tu Bondad", text: "Tu corazón noble me inspira a ser mejor persona cada día." },
];

const LoveLetters = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <Heart className="inline-block text-rose-500 mb-4" size={40} />
                    <h2 className="text-4xl md:text-5xl font-script text-rose-600">Pequeñas Notas</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-rose-50 p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md shadow-sm border border-rose-100 relative group"
                        >
                            <div className="text-8xl text-rose-200/50 absolute -top-4 -left-2 font-serif leading-none select-none">"</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 relative z-10 mt-2">{msg.title}</h3>
                            <p className="text-gray-600 font-light leading-relaxed relative z-10 italic">{msg.text}</p>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Heart size={16} className="text-rose-400" fill="currentColor" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default LoveLetters;
