import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Brain, Heart, Trophy } from 'lucide-react';
import LoveTrivia from './LoveTrivia';
import MemoryGame from './MemoryGame';

const LoveGames = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    const games = [
        {
            id: 'trivia',
            name: 'Trivia del Amor',
            description: '¿Qué tan bien me conoces? Responde preguntas sobre nuestra relación',
            icon: Heart,
            color: 'rose',
            gradient: 'from-rose-500 to-pink-500',
            bgGradient: 'from-rose-50 to-pink-50'
        },
        {
            id: 'memory',
            name: 'Juego de Memoria',
            description: 'Encuentra los pares de nuestras fotos favoritas',
            icon: Brain,
            color: 'purple',
            gradient: 'from-purple-500 to-pink-500',
            bgGradient: 'from-purple-50 to-pink-50'
        }
    ];

    const selectedGameData = games.find(g => g.id === selectedGame);

    return (
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-script text-rose-600 mb-4">
                        Mini-Juegos Románticos 🎮
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Diviértanse juntos con estos juegos especiales
                    </p>
                </motion.div>

                {!selectedGame ? (
                    // Game Selection Menu
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {games.map((game, index) => {
                            const Icon = game.icon;
                            return (
                                <motion.div
                                    key={game.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    onClick={() => setSelectedGame(game.id)}
                                    className={`bg-gradient-to-br ${game.bgGradient} rounded-3xl p-8 cursor-pointer shadow-lg hover:shadow-2xl transition-all border-2 border-${game.color}-200`}
                                >
                                    <div className={`bg-gradient-to-br ${game.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                        <Icon className="text-white" size={40} />
                                    </div>

                                    <h3 className={`text-2xl font-bold text-${game.color}-600 mb-3`}>
                                        {game.name}
                                    </h3>

                                    <p className="text-gray-700 mb-6">
                                        {game.description}
                                    </p>

                                    <button className={`bg-gradient-to-r ${game.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2`}>
                                        <Gamepad2 size={20} />
                                        Jugar Ahora
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    // Selected Game View
                    <div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mb-6"
                        >
                            <button
                                onClick={() => setSelectedGame(null)}
                                className="text-gray-600 hover:text-gray-800 font-semibold flex items-center gap-2 mb-4"
                            >
                                ← Volver a los juegos
                            </button>

                            {selectedGameData && (
                                <div className={`bg-gradient-to-r ${selectedGameData.gradient} rounded-2xl p-6 text-white mb-6`}>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/20 p-3 rounded-xl">
                                            {React.createElement(selectedGameData.icon, { size: 32 })}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">{selectedGameData.name}</h3>
                                            <p className="text-white/90">{selectedGameData.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        {/* Render Selected Game */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {selectedGame === 'trivia' && <LoveTrivia />}
                            {selectedGame === 'memory' && <MemoryGame />}
                        </motion.div>
                    </div>
                )}

                {/* Fun Stats */}
                {!selectedGame && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 text-center"
                    >
                        <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                            <p className="text-gray-600 flex items-center gap-2">
                                <Trophy className="text-yellow-500" size={20} />
                                ¡Jueguen juntos y creen más recuerdos divertidos!
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default LoveGames;
