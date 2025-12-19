import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Heart, Calendar, X, Image as ImageIcon, Trash2 } from 'lucide-react';

const MemoryDiary = () => {
    const [memories, setMemories] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newMemory, setNewMemory] = useState({
        title: '',
        date: '',
        description: '',
        emoji: '💕'
    });

    const emojiOptions = ['💕', '❤️', '🎉', '🌟', '🎂', '🌹', '✨', '🎁', '🌈', '🦋', '🌸', '💝', '🎊', '🌺', '💐'];

    // Cargar memorias del localStorage al montar
    useEffect(() => {
        const savedMemories = localStorage.getItem('loveMemories');
        if (savedMemories) {
            setMemories(JSON.parse(savedMemories));
        }
    }, []);

    // Guardar memorias en localStorage cuando cambien
    useEffect(() => {
        if (memories.length > 0) {
            localStorage.setItem('loveMemories', JSON.stringify(memories));
        }
    }, [memories]);

    const handleAddMemory = (e) => {
        e.preventDefault();

        if (newMemory.title && newMemory.date) {
            const memory = {
                id: Date.now(),
                ...newMemory,
                createdAt: new Date().toISOString()
            };

            setMemories([memory, ...memories]);
            setNewMemory({ title: '', date: '', description: '', emoji: '💕' });
            setShowAddForm(false);
        }
    };

    const handleDeleteMemory = (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este recuerdo?')) {
            setMemories(memories.filter(m => m.id !== id));
        }
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
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-script text-rose-600 mb-4">
                        Nuestro Diario de Momentos 📖
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Guarda cada momento especial que vivimos juntos
                    </p>

                    <button
                        onClick={() => setShowAddForm(true)}
                        className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
                    >
                        <Plus size={20} />
                        Agregar Nuevo Recuerdo
                    </button>
                </motion.div>

                {/* Formulario para agregar memoria */}
                <AnimatePresence>
                    {showAddForm && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setShowAddForm(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-rose-600">Nuevo Recuerdo</h3>
                                    <button
                                        onClick={() => setShowAddForm(false)}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <form onSubmit={handleAddMemory} className="space-y-4">
                                    {/* Selector de emoji */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Elige un emoji
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {emojiOptions.map(emoji => (
                                                <button
                                                    key={emoji}
                                                    type="button"
                                                    onClick={() => setNewMemory({ ...newMemory, emoji })}
                                                    className={`text-3xl p-2 rounded-lg transition-all ${newMemory.emoji === emoji
                                                            ? 'bg-rose-100 scale-110'
                                                            : 'hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {emoji}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Título */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Título del recuerdo *
                                        </label>
                                        <input
                                            type="text"
                                            value={newMemory.title}
                                            onChange={(e) => setNewMemory({ ...newMemory, title: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:outline-none"
                                            placeholder="Ej: Nuestra primera cita en el parque"
                                            required
                                        />
                                    </div>

                                    {/* Fecha */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Fecha *
                                        </label>
                                        <input
                                            type="date"
                                            value={newMemory.date}
                                            onChange={(e) => setNewMemory({ ...newMemory, date: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:outline-none"
                                            required
                                        />
                                    </div>

                                    {/* Descripción */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Descripción (opcional)
                                        </label>
                                        <textarea
                                            value={newMemory.description}
                                            onChange={(e) => setNewMemory({ ...newMemory, description: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:outline-none resize-none"
                                            rows="4"
                                            placeholder="Cuéntanos más sobre este momento especial..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                                    >
                                        Guardar Recuerdo
                                    </button>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Lista de memorias */}
                <div className="mt-12">
                    {memories.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="text-6xl mb-4">📝</div>
                            <p className="text-gray-500 text-lg">
                                Aún no hay recuerdos guardados.
                            </p>
                            <p className="text-gray-400">
                                ¡Comienza a crear tu diario de momentos especiales!
                            </p>
                        </motion.div>
                    ) : (
                        <div className="space-y-6">
                            {memories.map((memory, index) => (
                                <motion.div
                                    key={memory.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-100 hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="text-5xl flex-shrink-0">{memory.emoji}</div>

                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-2xl font-bold text-gray-800">
                                                    {memory.title}
                                                </h3>
                                                <button
                                                    onClick={() => handleDeleteMemory(memory.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>

                                            <p className="text-rose-500 text-sm mb-3 flex items-center gap-1">
                                                <Calendar size={14} />
                                                {formatDate(memory.date)}
                                            </p>

                                            {memory.description && (
                                                <p className="text-gray-600 leading-relaxed">
                                                    {memory.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Contador de recuerdos */}
                {memories.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-8 text-center"
                    >
                        <p className="text-gray-500">
                            <Heart className="inline text-rose-500" size={16} />
                            {' '}{memories.length} {memories.length === 1 ? 'recuerdo guardado' : 'recuerdos guardados'}
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default MemoryDiary;
