import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Heart, X, User } from 'lucide-react';

const LoveMailbox = () => {
    const [messages, setMessages] = useState([]);
    const [showComposeForm, setShowComposeForm] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [newMessage, setNewMessage] = useState({
        from: '',
        to: '',
        message: '',
        color: 'rose'
    });

    const colorOptions = [
        { name: 'rose', bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-600' },
        { name: 'pink', bg: 'bg-pink-100', border: 'border-pink-300', text: 'text-pink-600' },
        { name: 'purple', bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-600' },
        { name: 'red', bg: 'bg-red-100', border: 'border-red-300', text: 'text-red-600' },
    ];

    // Cargar mensajes del localStorage
    useEffect(() => {
        const savedMessages = localStorage.getItem('loveMessages');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    // Guardar mensajes en localStorage
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('loveMessages', JSON.stringify(messages));
        }
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();

        if (newMessage.from && newMessage.to && newMessage.message) {
            const message = {
                id: Date.now(),
                ...newMessage,
                date: new Date().toISOString(),
                read: false
            };

            setMessages([message, ...messages]);
            setNewMessage({ from: '', to: '', message: '', color: 'rose' });
            setShowComposeForm(false);
        }
    };

    const markAsRead = (id) => {
        setMessages(messages.map(msg =>
            msg.id === id ? { ...msg, read: true } : msg
        ));
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getColorClasses = (colorName) => {
        return colorOptions.find(c => c.name === colorName) || colorOptions[0];
    };

    const unreadCount = messages.filter(m => !m.read).length;

    return (
        <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="relative inline-block">
                        <h2 className="text-4xl md:text-5xl font-script text-rose-600 mb-4">
                            Buzón de Amor 💌
                        </h2>
                        {unreadCount > 0 && (
                            <span className="absolute -top-2 -right-8 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                {unreadCount}
                            </span>
                        )}
                    </div>
                    <p className="text-gray-600 text-lg mb-6">
                        Déjense mensajes de amor el uno al otro
                    </p>

                    <button
                        onClick={() => setShowComposeForm(true)}
                        className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
                    >
                        <Send size={20} />
                        Escribir Mensaje
                    </button>
                </motion.div>

                {/* Formulario para escribir mensaje */}
                <AnimatePresence>
                    {showComposeForm && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setShowComposeForm(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-rose-600">Nueva Carta de Amor</h3>
                                    <button
                                        onClick={() => setShowComposeForm(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <form onSubmit={handleSendMessage} className="space-y-4">
                                    {/* De */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            De: *
                                        </label>
                                        <input
                                            type="text"
                                            value={newMessage.from}
                                            onChange={(e) => setNewMessage({ ...newMessage, from: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:outline-none"
                                            placeholder="Tu nombre"
                                            required
                                        />
                                    </div>

                                    {/* Para */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Para: *
                                        </label>
                                        <input
                                            type="text"
                                            value={newMessage.to}
                                            onChange={(e) => setNewMessage({ ...newMessage, to: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:outline-none"
                                            placeholder="Nombre de tu amor"
                                            required
                                        />
                                    </div>

                                    {/* Color de la carta */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Color de la carta
                                        </label>
                                        <div className="flex gap-2">
                                            {colorOptions.map(color => (
                                                <button
                                                    key={color.name}
                                                    type="button"
                                                    onClick={() => setNewMessage({ ...newMessage, color: color.name })}
                                                    className={`w-12 h-12 rounded-full ${color.bg} ${color.border} border-2 transition-all ${newMessage.color === color.name ? 'scale-110 shadow-lg' : ''
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Mensaje */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Tu mensaje *
                                        </label>
                                        <textarea
                                            value={newMessage.message}
                                            onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:outline-none resize-none"
                                            rows="6"
                                            placeholder="Escribe tu mensaje de amor aquí..."
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                    >
                                        <Send size={20} />
                                        Enviar Mensaje
                                    </button>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Modal para leer mensaje */}
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
                                initial={{ scale: 0.9, opacity: 0, rotateY: -90 }}
                                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                                exit={{ scale: 0.9, opacity: 0, rotateY: 90 }}
                                className={`${getColorClasses(selectedMessage.color).bg} rounded-3xl p-8 max-w-lg w-full shadow-2xl border-4 ${getColorClasses(selectedMessage.color).border}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="text-center mb-6">
                                    <Mail className={`w-16 h-16 mx-auto mb-4 ${getColorClasses(selectedMessage.color).text}`} />
                                    <p className="text-sm text-gray-600 mb-1">De: <span className="font-bold">{selectedMessage.from}</span></p>
                                    <p className="text-sm text-gray-600 mb-1">Para: <span className="font-bold">{selectedMessage.to}</span></p>
                                    <p className="text-xs text-gray-500">{formatDate(selectedMessage.date)}</p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 mb-6">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {selectedMessage.message}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setSelectedMessage(null)}
                                    className={`w-full ${getColorClasses(selectedMessage.color).text} font-semibold py-3 rounded-xl bg-white hover:shadow-lg transition-all`}
                                >
                                    Cerrar
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Lista de mensajes */}
                <div className="mt-12">
                    {messages.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="text-6xl mb-4">💌</div>
                            <p className="text-gray-500 text-lg">
                                El buzón está vacío.
                            </p>
                            <p className="text-gray-400">
                                ¡Envía tu primer mensaje de amor!
                            </p>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {messages.map((message, index) => {
                                const colors = getColorClasses(message.color);
                                return (
                                    <motion.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`${colors.bg} rounded-2xl p-6 border-2 ${colors.border} cursor-pointer hover:shadow-xl transition-all relative`}
                                        onClick={() => {
                                            setSelectedMessage(message);
                                            markAsRead(message.id);
                                        }}
                                    >
                                        {!message.read && (
                                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                                        )}

                                        <Mail className={`w-12 h-12 mb-4 ${colors.text}`} />
                                        <p className="text-sm text-gray-600 mb-1">
                                            <strong>De:</strong> {message.from}
                                        </p>
                                        <p className="text-sm text-gray-600 mb-3">
                                            <strong>Para:</strong> {message.to}
                                        </p>
                                        <p className="text-gray-700 line-clamp-3 mb-3">
                                            {message.message}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {formatDate(message.date)}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Contador de mensajes */}
                {messages.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-8 text-center"
                    >
                        <p className="text-gray-500">
                            <Heart className="inline text-rose-500" size={16} />
                            {' '}{messages.length} {messages.length === 1 ? 'mensaje' : 'mensajes'} de amor
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default LoveMailbox;
