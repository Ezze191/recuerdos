import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Coffee, Film, Heart } from 'lucide-react';

const stats = [
    { label: "Días Juntos", value: "730", icon: Calendar },
    { label: "Citas Inolvidables", value: "52", icon: Heart },
    { label: "Películas Vistas", value: "148", icon: Film },
    { label: "Litros de Café", value: "200", icon: Coffee },
];

const Stats = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-rose-50 p-6 rounded-2xl text-center border border-rose-100 hover:shadow-lg transition-all"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-rose-500">
                                    <stat.icon size={24} />
                                </div>
                            </div>
                            <h3 className="text-4xl font-bold text-gray-800 mb-2 font-script">{stat.value}</h3>
                            <p className="text-rose-400 font-medium uppercase tracking-wider text-xs">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
