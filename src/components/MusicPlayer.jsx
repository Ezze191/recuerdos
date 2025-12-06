import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const songs = [
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "A Thousand Years",
        artist: "Christina Perri",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "All of Me",
        artist: "John Legend",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Just the Way You Are",
        artist: "Bruno Mars",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        cover: "https://images.unsplash.com/photo-1520872024865-3658a179c3ac?auto=format&fit=crop&w=400&q=80"
    }
];

const MusicPlayer = ({ autoPlay }) => {
    // Inicializar con -1 para indicar que no hay canción seleccionada aún si no es autoplay
    // Si es autoplay, elegiremos una al azar en el useEffect
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Autoplay effect
    useEffect(() => {
        if (autoPlay && !hasInteracted) {
            // Seleccionar canción aleatoria
            const randomIndex = Math.floor(Math.random() * songs.length);
            setCurrentIndex(randomIndex);
            setIsPlaying(true);
        }
    }, [autoPlay]);

    // Handle song changes and play/pause
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                // Promesa para evitar errores de interrupción
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Playback prevented:", error);
                        setIsPlaying(false);
                    });
                }
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentIndex]);

    const nextSong = () => {
        setHasInteracted(true);
        setCurrentIndex((prev) => (prev + 1) % songs.length);
        setIsPlaying(true);
    };

    const prevSong = () => {
        setHasInteracted(true);
        setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
        setIsPlaying(true);
    };

    const togglePlay = () => {
        setHasInteracted(true);
        setIsPlaying(!isPlaying);
    };

    const currentSong = songs[currentIndex];

    return (
        <section className="py-20 bg-rose-50 flex flex-col items-center justify-center px-4 overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-script text-rose-600 mb-12">Nuestras Canciones</h2>

            <div className="relative w-full max-w-sm flex justify-center items-center">

                {/* Navigation Buttons */}
                <button
                    onClick={prevSong}
                    className="absolute left-0 md:-left-12 z-10 p-3 bg-white text-rose-500 rounded-full shadow-lg hover:bg-rose-50 transition-all border border-rose-100"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={nextSong}
                    className="absolute right-0 md:-right-12 z-10 p-3 bg-white text-rose-500 rounded-full shadow-lg hover:bg-rose-50 transition-all border border-rose-100"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Card */}
                <div className="bg-white p-8 rounded-3xl shadow-xl w-full relative border border-rose-100 min-h-[450px]">
                    {/* Audio Element */}
                    {/* Key is important to force reload on source change if needed, but managing via src prop is better for smooth transition */}
                    <audio
                        ref={audioRef}
                        src={currentSong.url}
                        onEnded={nextSong}
                    />

                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest">Playlist de Amor</h3>
                        <div className="bg-rose-100 p-2 rounded-full">
                            <Music className="text-rose-500" size={16} />
                        </div>
                    </div>

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <div className="w-full aspect-square rounded-2xl mb-8 relative shadow-lg overflow-hidden group">
                                <img
                                    src={currentSong.cover}
                                    alt={currentSong.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Vinyl spinning effect overlay if playing */}
                                {isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                            className="w-24 h-24 border-4 border-white/30 rounded-full"
                                        ></motion.div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-1 truncate">{currentSong.title}</h2>
                        <p className="text-rose-500 font-medium truncate">{currentSong.artist}</p>
                    </div>

                    <div className="flex items-center justify-center gap-6 mb-2">
                        <button
                            onClick={togglePlay}
                            className="w-16 h-16 bg-rose-500 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-rose-600 hover:scale-105 active:scale-95 transition-all transform"
                        >
                            {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MusicPlayer;
