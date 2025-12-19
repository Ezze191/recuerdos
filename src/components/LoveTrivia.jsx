import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Trophy, Clock, ArrowRight, Shuffle, Users } from 'lucide-react';

// Preguntas para jugar en pareja - PERSONALIZA ESTAS
const triviaQuestions = [
    // Preguntas para Karen sobre Sergio
    { id: 1, for: "Karen", question: "¿Cuál es el color favorito de Sergio?", category: "Básico" },
    { id: 2, for: "Karen", question: "¿Cuál es la comida favorita de Sergio?", category: "Básico" },
    { id: 3, for: "Karen", question: "¿Cuál es el mayor miedo de Sergio?", category: "Profundo" },
    { id: 4, for: "Karen", question: "¿Qué es lo que más le gusta de ti a Sergio?", category: "Romántico" },
    { id: 5, for: "Karen", question: "¿Cuál es el sueño más grande de Sergio?", category: "Profundo" },
    { id: 6, for: "Karen", question: "¿Qué canción le recuerda a Sergio de ti?", category: "Romántico" },
    { id: 7, for: "Karen", question: "¿Cuál es el pasatiempo favorito de Sergio?", category: "Básico" },
    { id: 8, for: "Karen", question: "¿Qué es lo que más valora Sergio en una relación?", category: "Profundo" },
    { id: 9, for: "Karen", question: "¿Cuál es la película favorita de Sergio?", category: "Básico" },
    { id: 10, for: "Karen", question: "¿Qué le gustaría hacer a Sergio en 5 años?", category: "Futuro" },
    { id: 11, for: "Karen", question: "¿Cuál es el recuerdo favorito de Sergio contigo?", category: "Romántico" },
    { id: 12, for: "Karen", question: "¿Qué es lo que más le molesta a Sergio?", category: "Profundo" },
    { id: 13, for: "Karen", question: "¿Cuál es el lugar favorito de Sergio?", category: "Básico" },
    { id: 14, for: "Karen", question: "¿Qué superpoder elegiría Sergio?", category: "Divertido" },
    { id: 15, for: "Karen", question: "¿Cuál es la mayor cualidad de Sergio?", category: "Profundo" },

    // Preguntas para Sergio sobre Karen
    { id: 16, for: "Sergio", question: "¿Cuál es el color favorito de Karen?", category: "Básico" },
    { id: 17, for: "Sergio", question: "¿Cuál es la comida favorita de Karen?", category: "Básico" },
    { id: 18, for: "Sergio", question: "¿Cuál es el mayor miedo de Karen?", category: "Profundo" },
    { id: 19, for: "Sergio", question: "¿Qué es lo que más le gusta de ti a Karen?", category: "Romántico" },
    { id: 20, for: "Sergio", question: "¿Cuál es el sueño más grande de Karen?", category: "Profundo" },
    { id: 21, for: "Sergio", question: "¿Qué canción le recuerda a Karen de ti?", category: "Romántico" },
    { id: 22, for: "Sergio", question: "¿Cuál es el pasatiempo favorito de Karen?", category: "Básico" },
    { id: 23, for: "Sergio", question: "¿Qué es lo que más valora Karen en una relación?", category: "Profundo" },
    { id: 24, for: "Sergio", question: "¿Cuál es la película favorita de Karen?", category: "Básico" },
    { id: 25, for: "Sergio", question: "¿Qué le gustaría hacer a Karen en 5 años?", category: "Futuro" },
    { id: 26, for: "Sergio", question: "¿Cuál es el recuerdo favorito de Karen contigo?", category: "Romántico" },
    { id: 27, for: "Sergio", question: "¿Qué es lo que más le molesta a Karen?", category: "Profundo" },
    { id: 28, for: "Sergio", question: "¿Cuál es el lugar favorito de Karen?", category: "Básico" },
    { id: 29, for: "Sergio", question: "¿Qué superpoder elegiría Karen?", category: "Divertido" },
    { id: 30, for: "Sergio", question: "¿Cuál es la mayor cualidad de Karen?", category: "Profundo" },

    // Preguntas sobre la relación (para ambos)
    { id: 31, for: "Ambos", question: "¿Cuál fue el momento más romántico que han vivido juntos?", category: "Romántico" },
    { id: 32, for: "Ambos", question: "¿Cuál es su lugar favorito para ir juntos?", category: "Básico" },
    { id: 33, for: "Ambos", question: "¿Qué es lo que más les gusta hacer juntos?", category: "Básico" },
    { id: 34, for: "Ambos", question: "¿Cuál es su canción como pareja?", category: "Romántico" },
    { id: 35, for: "Ambos", question: "¿Dónde les gustaría viajar juntos?", category: "Futuro" },
    { id: 36, for: "Ambos", question: "¿Cuál es su tradición favorita como pareja?", category: "Romántico" },
    { id: 37, for: "Ambos", question: "¿Qué los hace reír juntos?", category: "Divertido" },
    { id: 38, for: "Ambos", question: "¿Cuál es su comida favorita para compartir?", category: "Básico" },
    { id: 39, for: "Ambos", question: "¿Qué meta tienen como pareja?", category: "Futuro" },
    { id: 40, for: "Ambos", question: "¿Cuál es su película favorita para ver juntos?", category: "Básico" },
];

const TIMER_SECONDS = 15; // Tiempo para responder cada pregunta

const LoveTrivia = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
    const [timerActive, setTimerActive] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);

    // Timer countdown
    useEffect(() => {
        let interval = null;
        if (timerActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(time => time - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setTimerActive(false);
            setShowAnswer(true);
        }
        return () => clearInterval(interval);
    }, [timerActive, timeLeft]);

    const startGame = () => {
        // Mezclar preguntas y tomar 10 aleatorias
        const shuffled = [...triviaQuestions].sort(() => Math.random() - 0.5);
        setQuestions(shuffled.slice(0, 10));
        setGameStarted(true);
        setCurrentQuestion(0);
        setGameFinished(false);
        startQuestionTimer();
    };

    const startQuestionTimer = () => {
        setTimeLeft(TIMER_SECONDS);
        setTimerActive(true);
        setShowAnswer(false);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            startQuestionTimer();
        } else {
            setGameFinished(true);
            setTimerActive(false);
        }
    };

    const handleRevealAnswer = () => {
        setTimerActive(false);
        setShowAnswer(true);
    };

    const getCategoryColor = (category) => {
        const colors = {
            'Básico': 'bg-blue-100 text-blue-700',
            'Profundo': 'bg-purple-100 text-purple-700',
            'Romántico': 'bg-rose-100 text-rose-700',
            'Futuro': 'bg-green-100 text-green-700',
            'Divertido': 'bg-yellow-100 text-yellow-700'
        };
        return colors[category] || 'bg-gray-100 text-gray-700';
    };

    const getPlayerColor = (player) => {
        if (player === 'Karen') return 'text-pink-600';
        if (player === 'Sergio') return 'text-blue-600';
        return 'text-purple-600';
    };

    if (!gameStarted) {
        return (
            <div className="text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border-2 border-rose-200"
                >
                    <div className="text-6xl mb-4">💑</div>
                    <h3 className="text-3xl font-bold text-rose-600 mb-4">
                        ¿Qué Tan Bien Se Conocen?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Juego para parejas: Respondan preguntas sobre el otro en {TIMER_SECONDS} segundos.
                    </p>

                    <div className="bg-rose-50 rounded-xl p-6 mb-6 text-left">
                        <h4 className="font-bold text-rose-700 mb-3 flex items-center gap-2">
                            <Users size={20} />
                            Cómo Jugar:
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Aparecerá una pregunta para Karen o Sergio</li>
                            <li>• Tienen {TIMER_SECONDS} segundos para responder</li>
                            <li>• Digan la respuesta en voz alta</li>
                            <li>• Revelen si acertaron o no</li>
                            <li>• ¡Diviértanse aprendiendo más el uno del otro!</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-pink-50 rounded-xl p-4">
                            <div className="text-3xl mb-2">👩</div>
                            <div className="text-sm font-semibold text-pink-600">Preguntas para Karen</div>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-4">
                            <div className="text-3xl mb-2">👨</div>
                            <div className="text-sm font-semibold text-blue-600">Preguntas para Sergio</div>
                        </div>
                    </div>

                    <button
                        onClick={startGame}
                        className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
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
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-rose-200 text-center"
            >
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-3xl font-bold text-rose-600 mb-4">
                    ¡Juego Terminado!
                </h3>
                <p className="text-xl text-gray-700 mb-6">
                    Esperamos que hayan aprendido más el uno del otro 💕
                </p>
                <div className="bg-rose-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-700">
                        <strong>Recuerden:</strong> Lo importante no es acertar todas, sino conocerse mejor cada día.
                    </p>
                </div>
                <button
                    onClick={startGame}
                    className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
                >
                    <Shuffle size={20} />
                    Jugar de Nuevo
                </button>
            </motion.div>
        );
    }

    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-rose-200"
        >
            {/* Progress */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-600">
                        Pregunta {currentQuestion + 1} de {questions.length}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getCategoryColor(question.category)}`}>
                        {question.category}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Player indicator */}
            <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl px-6 py-3">
                    <p className="text-sm text-gray-600 mb-1">Pregunta para:</p>
                    <p className={`text-2xl font-bold ${getPlayerColor(question.for)}`}>
                        {question.for === 'Ambos' ? '👫 Ambos' : question.for === 'Karen' ? '👩 Karen' : '👨 Sergio'}
                    </p>
                </div>
            </div>

            {/* Timer */}
            <div className="flex justify-center mb-8">
                <motion.div
                    animate={{
                        scale: timeLeft <= 5 && timerActive ? [1, 1.1, 1] : 1
                    }}
                    transition={{ duration: 0.5, repeat: timeLeft <= 5 && timerActive ? Infinity : 0 }}
                    className={`relative w-32 h-32 rounded-full flex items-center justify-center ${timeLeft <= 5 && timerActive
                            ? 'bg-gradient-to-br from-red-400 to-rose-400'
                            : 'bg-gradient-to-br from-rose-400 to-pink-400'
                        } shadow-lg`}
                >
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                        <div className="text-center">
                            <Clock className="mx-auto mb-1 text-rose-500" size={24} />
                            <div className={`text-4xl font-bold ${timeLeft <= 5 && timerActive ? 'text-red-600' : 'text-rose-600'
                                }`}>
                                {timeLeft}
                            </div>
                            <div className="text-xs text-gray-500">segundos</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Question */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 mb-6 border-2 border-rose-200">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center leading-relaxed">
                    {question.question}
                </h3>
            </div>

            {/* Instructions */}
            {!showAnswer && timerActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-6"
                >
                    <p className="text-gray-600 mb-4">
                        💬 Digan la respuesta en voz alta
                    </p>
                    <button
                        onClick={handleRevealAnswer}
                        className="text-rose-500 hover:text-rose-600 font-semibold text-sm underline"
                    >
                        Revelar tiempo
                    </button>
                </motion.div>
            )}

            {/* Answer phase */}
            <AnimatePresence>
                {showAnswer && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <p className="text-lg text-gray-700 mb-6">
                            ¿Acertaron? 🤔
                        </p>
                        <button
                            onClick={handleNext}
                            className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
                        >
                            {currentQuestion < questions.length - 1 ? (
                                <>
                                    Siguiente Pregunta
                                    <ArrowRight size={20} />
                                </>
                            ) : (
                                <>
                                    Ver Resultados
                                    <Trophy size={20} />
                                </>
                            )}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default LoveTrivia;
