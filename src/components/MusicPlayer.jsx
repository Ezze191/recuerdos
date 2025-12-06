import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-20 bg-rose-50 flex justify-center px-4">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-xs w-full relative overflow-hidden border border-rose-100">

                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest">Nuestra Canción</h3>
                    <div className="bg-rose-100 p-2 rounded-full">
                        <Music className="text-rose-500" size={16} />
                    </div>
                </div>

                <div className="w-full aspect-square bg-gray-50 rounded-2xl mb-8 flex items-center justify-center relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] overflow-hidden">
                    <motion.div
                        animate={{ rotate: isPlaying ? 360 : 0 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-40 h-40 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 shadow-xl flex items-center justify-center z-10 relative"
                    >
                        <div className="absolute inset-0 rounded-full border-[1px] border-white/20"></div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-rose-300"></div>
                        </div>
                    </motion.div>

                    {/* Ambient glow */}
                    <div className={`absolute inset-0 bg-rose-400 blur-[60px] opacity-20 transition-opacity duration-1000 ${isPlaying ? 'opacity-40 scale-110' : 'scale-100'}`}></div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1 truncate">Perfect</h2>
                    <p className="text-rose-500 font-medium truncate">Ed Sheeran</p>
                </div>

                <div className="flex items-center justify-between gap-4 mb-6">
                    <button className="text-gray-400 hover:text-rose-500 transition-colors"><SkipBack size={24} /></button>
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-16 h-16 bg-rose-500 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-rose-600 hover:scale-105 active:scale-95 transition-all"
                    >
                        {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
                    </button>
                    <button className="text-gray-400 hover:text-rose-500 transition-colors"><SkipForward size={24} /></button>
                </div>

                {/* Progress Bar (fake) */}
                <div className="w-full bg-rose-100 h-1.5 rounded-full overflow-hidden mb-2">
                    <motion.div
                        className="h-full bg-rose-500 rounded-full"
                        initial={{ width: "30%" }}
                        animate={{ width: isPlaying ? "100%" : "30%" }}
                        transition={{ duration: isPlaying ? 100 : 0, ease: "linear" }}
                    ></motion.div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 font-medium">
                    <span>1:20</span>
                    <span>4:23</span>
                </div>
            </div>
        </section>
    );
};

export default MusicPlayer;
