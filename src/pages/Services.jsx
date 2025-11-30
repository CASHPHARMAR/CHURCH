import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Music, Book, Heart } from 'lucide-react';

const Services = () => {
    const ministries = [
        { title: 'Kids Ministry', icon: <Heart />, desc: 'Nurturing faith in the next generation.' },
        { title: 'Youth Group', icon: <Users />, desc: 'Empowering teens to live for Christ.' },
        { title: 'Worship Team', icon: <Music />, desc: 'Leading the congregation in praise.' },
        { title: 'Bible Study', icon: <Book />, desc: 'Deepening our understanding of Scripture.' },
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Our <span className="text-secondary">Services</span></h1>
                    <p className="text-xl text-gray-400">Join us for worship and fellowship.</p>
                </div>

                {/* Service Times */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-slate-900 p-8 rounded-2xl border-l-4 border-secondary shadow-lg"
                    >
                        <div className="flex items-center mb-6">
                            <Clock className="w-10 h-10 text-secondary mr-4" />
                            <h2 className="text-3xl font-bold">Sunday Service</h2>
                        </div>
                        <div className="space-y-4 text-lg text-gray-300">
                            <div className="flex justify-between border-b border-slate-800 pb-2">
                                <span>Morning Worship</span>
                                <span className="font-semibold text-white">10:00 AM</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-800 pb-2">
                                <span>Evening Service</span>
                                <span className="font-semibold text-white">6:00 PM</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-slate-900 p-8 rounded-2xl border-l-4 border-accent shadow-lg"
                    >
                        <div className="flex items-center mb-6">
                            <Clock className="w-10 h-10 text-accent mr-4" />
                            <h2 className="text-3xl font-bold">Midweek</h2>
                        </div>
                        <div className="space-y-4 text-lg text-gray-300">
                            <div className="flex justify-between border-b border-slate-800 pb-2">
                                <span>Wednesday Bible Study</span>
                                <span className="font-semibold text-white">7:00 PM</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-800 pb-2">
                                <span>Friday Prayer Night</span>
                                <span className="font-semibold text-white">8:00 PM</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Ministries */}
                <h2 className="text-3xl font-bold mb-10 text-center">Our Ministries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ministries.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors text-center group"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
