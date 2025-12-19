import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle, Trophy, Clock, Star } from 'lucide-react';

// Usa las fotos de la galería - Toma 8 fotos para hacer 16 cartas (8 pares)
const memoryImages = [
    "./recuerdos/0C4B565E-26F1-4336-A5D6-C90E5323688C.JPG",
    "./recuerdos/23-12-14 20-35-40 2154.jpg",
    "./recuerdos/23-12-23 22-57-17 2229.jpg",
    "./recuerdos/23-12-23 23-14-52 2236.jpg",
    "./recuerdos/25-11-16 20-54-49 6.jpg",
    "./recuerdos/576A04CD-BC9C-4842-9DEC-38CC3D8B19CE.JPG",
    "./recuerdos/APRN0146.JPG",
    "./recuerdos/AYGE6848.JPG",
];

const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [time, setTime] = useState(0);
    const [timerActive, setTimerActive] = useState(false);

    // Timer
    useEffect(() => {
        let interval = null;
        if (timerActive) {
            interval = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerActive]);

    const initializeGame = () => {
        // Crear pares de cartas
        const pairs = memoryImages.map((img, index) => [
            { id: index * 2, image: img, pairId: index },
            { id: index * 2 + 1, image: img, pairId: index }
        ]).flat();

        // Mezclar cartas
        const shuffled = pairs.sort(() => Math.random() - 0.5);
        setCards(shuffled);
        setFlipped([]);
        setMatched([]);
        setMoves(0);
        setTime(0);
        setGameStarted(true);
        setGameFinished(false);
        setTimerActive(true);
    };

    const handleCardClick = (cardId) => {
        // No hacer nada si ya está volteada, emparejada, o si ya hay 2 cartas volteadas
        if (flipped.includes(cardId) || matched.includes(cardId) || flipped.length === 2) {
            return;
        }

        const newFlipped = [...flipped, cardId];
        setFlipped(newFlipped);

        // Si se voltearon 2 cartas, verificar si son iguales
        if (newFlipped.length === 2) {
            setMoves(moves + 1);

            const [firstCard, secondCard] = newFlipped.map(id =>
                cards.find(card => card.id === id)
            );

            if (firstCard.pairId === secondCard.pairId) {
                // ¡Match!
                setTimeout(() => {
                    setMatched([...matched, ...newFlipped]);
                    setFlipped([]);

                    // Verificar si el juego terminó
                    if (matched.length + 2 === cards.length) {
                        setGameFinished(true);
                        setTimerActive(false);
                    }
                }, 500);
            } else {
                // No match, voltear de nuevo
                setTimeout(() => {
                    setFlipped([]);
                }, 1000);
            }
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const getPerformanceMessage = () => {
        if (moves <= 12) return "¡Increíble! Tienes una memoria excepcional 🧠✨";
        if (moves <= 18) return "¡Muy bien! Excelente memoria 🎯";
        if (moves <= 24) return "¡Bien hecho! Buena memoria 👍";
        return "¡Lo lograste! Sigue practicando 💪";
    };

    if (!gameStarted) {
        return (
            <div className="text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200"
                >
                    <div className="text-6xl mb-4">🧠</div>
                    <h3 className="text-3xl font-bold text-purple-600 mb-4">
                        Juego de Memoria
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Encuentra todos los pares de nuestras fotos. ¡Pon a prueba tu memoria!
                    </p>
                    <div className="bg-purple-50 rounded-xl p-4 mb-6">
                        <p className="text-sm text-purple-700">
                            <strong>Cómo jugar:</strong><br />
                            Voltea las cartas para encontrar los pares. Intenta hacerlo en el menor número de movimientos posible.
                        </p>
                    </div>
                    <button
                        onClick={initializeGame}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
                    >
                        Comenzar Juego
                    </button>
                </motion.div>
            </div>
        );
    }

    if (gameFinished) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200 text-center"
            >
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-3xl font-bold text-purple-600 mb-4">
                    ¡Felicidades!
                </h3>
                <p className="text-xl text-gray-700 mb-6">
                    {getPerformanceMessage()}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 rounded-xl p-4">
                        <div className="text-3xl font-bold text-purple-600">{moves}</div>
                        <div className="text-sm text-gray-600">Movimientos</div>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-4">
                        <div className="text-3xl font-bold text-pink-600">{formatTime(time)}</div>
                        <div className="text-sm text-gray-600">Tiempo</div>
                    </div>
                </div>

                <button
                    onClick={initializeGame}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
                >
                    <Shuffle size={20} />
                    Jugar de Nuevo
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-purple-200">
            {/* Stats */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <div className="bg-purple-50 px-4 py-2 rounded-xl">
                        <div className="text-xs text-gray-600">Movimientos</div>
                        <div className="text-2xl font-bold text-purple-600">{moves}</div>
                    </div>
                    <div className="bg-pink-50 px-4 py-2 rounded-xl flex items-center gap-2">
                        <Clock size={16} className="text-pink-600" />
                        <div className="text-2xl font-bold text-pink-600">{formatTime(time)}</div>
                    </div>
                </div>
                <div className="text-sm text-gray-600">
                    {matched.length / 2} / {cards.length / 2} pares
                </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(matched.length / cards.length) * 100}%` }}
                />
            </div>

            {/* Game Grid */}
            <div className="grid grid-cols-4 gap-3">
                {cards.map((card) => {
                    const isFlipped = flipped.includes(card.id) || matched.includes(card.id);

                    return (
                        <motion.div
                            key={card.id}
                            whileHover={{ scale: matched.includes(card.id) ? 1 : 1.05 }}
                            whileTap={{ scale: matched.includes(card.id) ? 1 : 0.95 }}
                            onClick={() => handleCardClick(card.id)}
                            className="aspect-square cursor-pointer relative"
                            style={{ perspective: '1000px' }}
                        >
                            <motion.div
                                className="w-full h-full relative"
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Back of card */}
                                <div
                                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-lg"
                                    style={{ backfaceVisibility: 'hidden' }}
                                >
                                    <div className="text-4xl">💕</div>
                                </div>

                                {/* Front of card */}
                                <div
                                    className={`absolute inset-0 rounded-xl overflow-hidden shadow-lg ${matched.includes(card.id) ? 'ring-4 ring-green-400' : ''
                                        }`}
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                >
                                    <img
                                        src={card.image}
                                        alt="Memory card"
                                        className="w-full h-full object-cover"
                                    />
                                    {matched.includes(card.id) && (
                                        <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                                            <div className="bg-white rounded-full p-2">
                                                <Star className="text-green-500" size={24} fill="currentColor" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default MemoryGame;
