import React from 'react';
import { motion } from 'framer-motion';

const events = [
    { date: 'El Comienzo', title: 'Cuando nos conocimos', description: 'Un día cualquiera que se convirtió en el mejor de mi vida.' },
    { date: 'Primera Cita', title: 'Nuestra primera salida', description: 'Nervios, risas y la certeza de que quería verte de nuevo.' },
    { date: 'Momentos', title: 'Nuestras aventuras', description: 'Cada viaje, cada cena, cada paseo de la mano construyendo nuestra historia.' },
    { date: 'Futuro', title: 'Lo que viene', description: 'Soñando con todo lo que nos falta por vivir juntos.' },
];

const Timeline = () => {
    return (
        <section className="py-20 bg-rose-50 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-script text-center text-rose-600 mb-16">Nuestro Viaje</h2>

                <div className="relative pt-10">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-rose-200"></div>

                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex items-center justify-between mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                        >
                            {/* Empty half for desktop layout */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-2 border-white shadow-lg z-10"></div>

                            {/* Content Card */}
                            <div className="w-full md:w-5/12 pl-12 md:pl-0">
                                <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 border-rose-400 hover:shadow-xl transition-all cursor-default
                          ${index % 2 === 0 ? 'md:mr-8 text-left' : 'md:ml-8 text-left'}`}>
                                    <span className="text-sm text-rose-400 font-semibold uppercase tracking-wider">{event.date}</span>
                                    <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{event.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
