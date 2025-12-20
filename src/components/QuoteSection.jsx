import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// Array de frases - Puedes agregar o modificar las frases aquí
const quotes = [
    {
        text: "Si, a través de mis ojos tú te vieras Y en mi cuerpo sintieras lo que me inspiras Te vieras con sed abrazarte quisieras Ya esa es la forma como estos ojos te miran.",
        author: "Canserbero"
    },
    {
        text: "Si no existes tendría que inventarte.",
        author: "Gera Mx"
    },
    {
        text: "Midnight 'til morning, call if you need somebody I will be there for you.",
        author: "Justin Bieber"
    },
    {
        text: "Ahora recuerdo la primera vez que te reíste Y las ganas que me dieron de que se me ocurra un chiste.",
        author: "Wos"
    },
    {
        text: "you were everything I ever wanted.",
        author: "Mac Miller"
    },
    {
        text: "Dame la mano y siente como enbona con la mia.",
        author: "Sabino"
    },
    {
        text: "Viajria de aqui a la luna solo para poder verte.",
        author: "Gera Mx"
    },
    {
        text: "Si vas a ser la reina yo quiero ser el King.",
        author: "Charles ans"
    },
    {
        text: "Eres necesidad para mi realidad.",
        author: "Neto Peña"
    },

    {
        text: "Eres lo mas hermosa que hay o solo te pareces.",
        author: "Neto Peña"
    },

];

// Función para obtener la frase del día basada en la fecha actual
const getDailyQuote = () => {
    const today = new Date();
    // Usar año, mes y día para generar un índice consistente durante todo el día
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % quotes.length;
    return quotes[index];
};

const QuoteSection = () => {
    const [currentQuote, setCurrentQuote] = useState(getDailyQuote());

    useEffect(() => {
        // Actualizar la frase a medianoche
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);

        const timeUntilMidnight = tomorrow - now;

        const timeout = setTimeout(() => {
            setCurrentQuote(getDailyQuote());

            // Configurar intervalo diario después de la primera medianoche
            const dailyInterval = setInterval(() => {
                setCurrentQuote(getDailyQuote());
            }, 24 * 60 * 60 * 1000); // 24 horas

            return () => clearInterval(dailyInterval);
        }, timeUntilMidnight);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="py-24 bg-rose-900 text-white relative overflow-hidden flex items-center justify-center min-h-[400px]">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-rose-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Quote className="w-12 h-12 text-rose-300 mx-auto mb-6 opacity-80" fill="currentColor" />

                    <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8 italic">
                        "{currentQuote.text}"
                    </h2>

                    <div className="w-16 h-0.5 bg-rose-400 mx-auto mb-4"></div>

                    <p className="text-rose-200 uppercase tracking-widest text-sm font-semibold">
                        {currentQuote.author}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteSection;
