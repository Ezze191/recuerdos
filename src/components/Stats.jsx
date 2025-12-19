import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, Timer } from 'lucide-react';

const Stats = () => {
    // Fecha de inicio de la relación: 22 de diciembre de 2022 a las 10:25 PM
    const startDate = new Date('2022-12-22T22:25:00');

    const [timeElapsed, setTimeElapsed] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();

            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();
            let hours = now.getHours() - startDate.getHours();
            let minutes = now.getMinutes() - startDate.getMinutes();
            let seconds = now.getSeconds() - startDate.getSeconds();

            // Ajustar segundos
            if (seconds < 0) {
                seconds += 60;
                minutes--;
            }

            // Ajustar minutos
            if (minutes < 0) {
                minutes += 60;
                hours--;
            }

            // Ajustar horas
            if (hours < 0) {
                hours += 24;
                days--;
            }

            // Ajustar días
            if (days < 0) {
                const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += prevMonth.getDate();
                months--;
            }

            // Ajustar meses
            if (months < 0) {
                months += 12;
                years--;
            }

            setTimeElapsed({
                years,
                months,
                days,
                hours,
                minutes,
                seconds
            });
        };

        // Calcular inmediatamente
        calculateTime();

        // Actualizar cada segundo
        const interval = setInterval(calculateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const stats = [
        { label: "Años", value: timeElapsed.years, icon: Heart, color: "rose" },
        { label: "Meses", value: timeElapsed.months, icon: Calendar, color: "pink" },
        { label: "Días", value: timeElapsed.days, icon: Calendar, color: "red" },
        { label: "Horas", value: timeElapsed.hours, icon: Clock, color: "rose" },
        { label: "Minutos", value: timeElapsed.minutes, icon: Timer, color: "pink" },
        { label: "Segundos", value: timeElapsed.seconds, icon: Timer, color: "red" },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-rose-50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-script text-center text-rose-600 mb-4"
                >
                    Nuestro Tiempo Juntos
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-gray-600 mb-12 text-lg"
                >
                    Desde el 22 de diciembre de 2022
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white p-6 rounded-2xl text-center border-2 border-rose-100 hover:border-rose-300 hover:shadow-xl transition-all"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-3 rounded-full shadow-md text-rose-600">
                                    <stat.icon size={28} strokeWidth={2.5} />
                                </div>
                            </div>
                            <motion.h3
                                key={stat.value}
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-2 font-mono"
                            >
                                {stat.value}
                            </motion.h3>
                            <p className="text-rose-500 font-semibold uppercase tracking-wider text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
