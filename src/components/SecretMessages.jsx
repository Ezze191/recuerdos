import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Gift, Calendar, Heart } from 'lucide-react';

// Mensajes secretos que se desbloquean en fechas específicas
const secretMessages = [
    {
        id: 1,
        unlockDate: '2025-12-22', // 3er aniversario
        title: '¡3 Años Juntos! 🎉',
        message: 'Han pasado 3 años increíbles desde que comenzamos esta aventura. Cada día contigo es un regalo. Te amo más de lo que las palabras pueden expresar. Aquí está a muchos más años de amor, risas y aventuras juntos. 💕',
        icon: '🎂'
    },
    {
        id: 2,
        unlockDate: '2026-01-01', // Año nuevo
        title: 'Nuevo Año, Mismo Amor ✨',
        message: 'Un nuevo año comienza, pero mi amor por ti solo crece. Gracias por ser mi compañera en esta vida. Que este año nos traiga más momentos inolvidables juntos. 🥂',
        icon: '🎆'
    },
    {
        id: 3,
        unlockDate: '2026-02-14', // San Valentín
        title: 'Día del Amor 💝',
        message: 'No necesito un día especial para decirte cuánto te amo, pero hoy quiero recordarte que eres el amor de mi vida. Cada latido de mi corazón es para ti. 💗',
        icon: '💝'
    },
    {
        id: 4,
        unlockDate: '2026-03-22', // 3 años y 3 meses
        title: 'Tres Meses Más 🌸',
        message: 'Cada mes que pasa contigo es mejor que el anterior. Gracias por llenar mi vida de color y alegría. Te amo infinitamente. 🌺',
        icon: '🌸'
    },
    {
        id: 5,
        unlockDate: '2026-06-22', // 3 años y 6 meses
        title: 'Medio Año Más de Amor 🌟',
        message: 'Seis meses más de risas, aventuras y amor incondicional. Eres mi persona favorita en todo el mundo. 💫',
        icon: '⭐'
    },
    {
        id: 6,
        unlockDate: '2026-12-22', // 4to aniversario
        title: '¡4 Años de Amor! 🎊',
        message: 'Cuatro años de construir nuestro mundo juntos. Cada momento a tu lado es perfecto. Gracias por ser mi todo. Te amo hoy y siempre. 💖',
        icon: '🎊'
    }
];

const SecretMessages = () => {
    const [unlockedMessages, setUnlockedMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const unlocked = secretMessages.filter(msg => {
            const unlockDate = new Date(msg.unlockDate);
            unlockDate.setHours(0, 0, 0, 0);
            return unlockDate <= today;
        });

        setUnlockedMessages(unlocked);
    }, []);

    const isUnlocked = (messageId) => {
        return unlockedMessages.some(msg => msg.id === messageId);
    };

    const getDaysUntilUnlock = (unlockDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const unlock = new Date(unlockDate);
        unlock.setHours(0, 0, 0, 0);
        const diffTime = unlock - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-script text-rose-600 mb-4">
                        Mensajes Secretos 💌
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Sorpresas especiales que se desbloquean en fechas importantes
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {secretMessages.map((message, index) => {
                        const unlocked = isUnlocked(message.id);
                        const daysUntil = getDaysUntilUnlock(message.unlockDate);

                        return (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-6 rounded-2xl border-2 transition-all ${unlocked
                                    ? 'bg-white border-rose-300 shadow-lg hover:shadow-xl cursor-pointer'
                                    : 'bg-gray-50 border-gray-200 opacity-60'
                                    }`}
                                onClick={() => unlocked && setSelectedMessage(message)}
                            >
                                {/* Icono de estado */}
                                <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${unlocked ? 'bg-gradient-to-br from-rose-500 to-pink-500' : 'bg-gray-400'
                                    }`}>
                                    {unlocked ? (
                                        <Unlock className="text-white" size={24} />
                                    ) : (
                                        <Lock className="text-white" size={24} />
                                    )}
                                </div>

                                {/* Contenido */}
                                <div className="text-center">
                                    <div className="text-5xl mb-4">{message.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {unlocked ? message.title : '???'}
                                    </h3>

                                    {unlocked ? (
                                        <div>
                                            <p className="text-sm text-rose-500 mb-2">
                                                <Calendar className="inline mr-1" size={14} />
                                                {formatDate(message.unlockDate)}
                                            </p>
                                            <p className="text-gray-600 text-sm line-clamp-2">
                                                {message.message}
                                            </p>
                                            <button className="mt-4 text-rose-500 font-semibold text-sm hover:text-rose-600">
                                                Leer mensaje completo →
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="text-gray-500 text-sm mb-2">
                                                Se desbloquea el:
                                            </p>
                                            <p className="text-gray-700 font-semibold">
                                                {formatDate(message.unlockDate)}
                                            </p>
                                            {daysUntil > 0 && (
                                                <p className="text-rose-400 text-sm mt-2">
                                                    Faltan {daysUntil} {daysUntil === 1 ? 'día' : 'días'}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Modal para mensaje completo */}
                <AnimatePresence>
                    {selectedMessage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedMessage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="text-center">
                                    <div className="text-6xl mb-4">{selectedMessage.icon}</div>
                                    <h3 className="text-3xl font-bold text-rose-600 mb-4">
                                        {selectedMessage.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-6">
                                        {formatDate(selectedMessage.unlockDate)}
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                        {selectedMessage.message}
                                    </p>
                                    <button
                                        onClick={() => setSelectedMessage(null)}
                                        className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SecretMessages;
