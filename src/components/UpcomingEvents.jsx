import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, Gift, Cake, Star } from 'lucide-react';

const UpcomingEvents = () => {
    const [countdowns, setCountdowns] = useState({});

    // Eventos importantes
    const events = [
        {
            id: 1,
            name: '3er Aniversario',
            date: '2025-12-22',
            icon: Heart,
            color: 'rose',
            description: '¡Celebramos 3 años juntos!'
        },
        {
            id: 2,
            name: 'Año Nuevo 2026',
            date: '2026-01-01',
            icon: Star,
            color: 'purple',
            description: 'Nuevo año, mismo amor'
        },
        {
            id: 3,
            name: 'San Valentín',
            date: '2026-02-14',
            icon: Gift,
            color: 'pink',
            description: 'Día del amor y la amistad'
        },
        {
            id: 4,
            name: '4to Aniversario',
            date: '2026-12-22',
            icon: Cake,
            color: 'red',
            description: '¡4 años de amor!'
        },
        {
            id: 5,
            name: 'Cumpleaños de Karenki',
            date: '2026-07-16',
            icon: Cake,
            color: 'red',
            description: 'El cumpleaños de mi persona favorita'
        },
        {
            id: 6,
            name: 'Cumpleaños de Chekin',
            date: '2026-06-19',
            icon: Cake,
            color: 'red',
            description: 'El cumpleaños de mi Chekin'
        }
    ];

    useEffect(() => {
        const calculateCountdowns = () => {
            const now = new Date();
            const newCountdowns = {};

            events.forEach(event => {
                const eventDate = new Date(event.date);
                eventDate.setHours(0, 0, 0, 0);

                const diff = eventDate - now;

                if (diff > 0) {
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                    newCountdowns[event.id] = {
                        days,
                        hours,
                        minutes,
                        seconds,
                        isPast: false
                    };
                } else {
                    newCountdowns[event.id] = {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0,
                        isPast: true
                    };
                }
            });

            setCountdowns(newCountdowns);
        };

        calculateCountdowns();
        const interval = setInterval(calculateCountdowns, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getColorClasses = (color) => {
        const colors = {
            rose: {
                bg: 'from-rose-500 to-pink-500',
                light: 'bg-rose-50',
                border: 'border-rose-200',
                text: 'text-rose-600'
            },
            pink: {
                bg: 'from-pink-500 to-rose-500',
                light: 'bg-pink-50',
                border: 'border-pink-200',
                text: 'text-pink-600'
            },
            purple: {
                bg: 'from-purple-500 to-pink-500',
                light: 'bg-purple-50',
                border: 'border-purple-200',
                text: 'text-purple-600'
            },
            red: {
                bg: 'from-red-500 to-rose-500',
                light: 'bg-red-50',
                border: 'border-red-200',
                text: 'text-red-600'
            }
        };
        return colors[color] || colors.rose;
    };

    // Filtrar solo eventos futuros
    const upcomingEvents = events.filter(event => {
        const countdown = countdowns[event.id];
        return countdown && !countdown.isPast;
    });

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-script text-rose-600 mb-4">
                        Próximos Eventos Especiales 🎉
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Fechas importantes que esperamos juntos
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {upcomingEvents.map((event, index) => {
                        const countdown = countdowns[event.id];
                        const colors = getColorClasses(event.color);
                        const Icon = event.icon;

                        if (!countdown) return null;

                        return (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={`${colors.light} rounded-3xl p-8 border-2 ${colors.border} shadow-lg hover:shadow-xl transition-all`}
                            >
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`bg-gradient-to-br ${colors.bg} p-4 rounded-2xl shadow-lg`}>
                                        <Icon className="text-white" size={32} />
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-bold ${colors.text}`}>
                                            {event.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm flex items-center gap-1">
                                            <Calendar size={14} />
                                            {formatDate(event.date)}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 mb-6 text-center italic">
                                    {event.description}
                                </p>

                                {/* Countdown */}
                                <div className="grid grid-cols-4 gap-3">
                                    <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                                        <motion.div
                                            key={countdown.days}
                                            initial={{ scale: 1.2, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className={`text-3xl font-bold ${colors.text}`}
                                        >
                                            {countdown.days}
                                        </motion.div>
                                        <div className="text-xs text-gray-500 uppercase mt-1">Días</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                                        <motion.div
                                            key={countdown.hours}
                                            initial={{ scale: 1.2, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className={`text-3xl font-bold ${colors.text}`}
                                        >
                                            {countdown.hours}
                                        </motion.div>
                                        <div className="text-xs text-gray-500 uppercase mt-1">Horas</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                                        <motion.div
                                            key={countdown.minutes}
                                            initial={{ scale: 1.2, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className={`text-3xl font-bold ${colors.text}`}
                                        >
                                            {countdown.minutes}
                                        </motion.div>
                                        <div className="text-xs text-gray-500 uppercase mt-1">Min</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                                        <motion.div
                                            key={countdown.seconds}
                                            initial={{ scale: 1.2, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className={`text-3xl font-bold ${colors.text}`}
                                        >
                                            {countdown.seconds}
                                        </motion.div>
                                        <div className="text-xs text-gray-500 uppercase mt-1">Seg</div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {upcomingEvents.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className="text-6xl mb-4">🎊</div>
                        <p className="text-gray-500 text-lg">
                            No hay eventos próximos programados.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default UpcomingEvents;
