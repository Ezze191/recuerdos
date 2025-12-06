import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const QuoteSection = () => {
    return (
        <section className="py-24 bg-rose-900 text-white relative overflow-hidden flex items-center justify-center">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-rose-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-4xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Quote className="w-12 h-12 text-rose-300 mx-auto mb-6 opacity-80" fill="currentColor" />

                    <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8 italic">
                        "Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección."
                    </h2>

                    <div className="w-16 h-0.5 bg-rose-400 mx-auto mb-4"></div>

                    <p className="text-rose-200 uppercase tracking-widest text-sm font-semibold">
                        El Principito
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteSection;
