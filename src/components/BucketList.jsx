import React from 'react';
import { motion } from 'framer-motion';
import { Check, Circle } from 'lucide-react';

const goals = [
    { text: "Viajar Juntos", completed: true },
    { text: "Aprender a cocinar juntos", completed: true },
    { text: "Ir a una cabaña", completed: false },
    { text: "Pasar año nuevo juntos", completed: true },
    { text: "Adoptar una mascota juntos", completed: false },
    { text: "Tener una cinta romantica bajo la lluvia", completed: false },
    { text: "Tener ingresos estables donde estemos involucrados los dos", completed: false },
    { text: "Hacer un picnic en el bosque", completed: true },
    { text: "Pasar navidad juntos", completed: false },
];

const BucketList = () => {
    return (
        <section className="py-24 bg-rose-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-script text-rose-600 mb-4">Nuestros Sueños</h2>
                    <p className="text-gray-600 max-w-lg mx-auto">La lista de aventuras que nos faltan por vivir y las que ya guardamos en el corazón.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {goals.map((goal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`flex items-center p-4 rounded-xl border transition-all ${goal.completed
                                ? 'bg-white border-rose-200 shadow-sm opacity-70'
                                : 'bg-white border-rose-400 shadow-md transform hover:-translate-y-1'
                                }`}
                        >
                            <div className={`mr-4 p-1 rounded-full ${goal.completed ? 'bg-rose-100 text-rose-400' : 'bg-rose-500 text-white'}`}>
                                {goal.completed ? <Check size={16} /> : <Circle size={16} fill="transparent" />}
                            </div>
                            <span className={`text-lg ${goal.completed ? 'text-gray-400 line-through' : 'text-gray-800 font-medium'}`}>
                                {goal.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BucketList;
