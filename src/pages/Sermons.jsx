import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, User } from 'lucide-react';
import Button from '../components/Button';

const Sermons = () => {
    const sermons = [
        {
            id: 1,
            title: "The Power of Prayer",
            speaker: "Pastor John Doe",
            date: "Nov 19, 2023",
            thumbnail: "https://images.unsplash.com/photo-1445052523702-7b24d6d90568?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id: 2,
            title: "Walking in the Spirit",
            speaker: "Pastor Jane Doe",
            date: "Nov 12, 2023",
            thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id: 3,
            title: "Community and Unity",
            speaker: "Guest Speaker",
            date: "Nov 05, 2023",
            thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        },
        {
            id: 4,
            title: "Faith in Action",
            speaker: "Pastor John Doe",
            date: "Oct 29, 2023",
            thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
        },
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Sermon <span className="text-secondary">Archive</span></h1>
                    <p className="text-xl text-gray-400">Watch and listen to recent messages.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sermons.map((sermon, index) => (
                        <motion.div
                            key={sermon.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={sermon.thumbnail}
                                    alt={sermon.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-secondary p-4 rounded-full text-white">
                                        <Play fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {sermon.date}</span>
                                    <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {sermon.speaker}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-secondary transition-colors">{sermon.title}</h3>
                                <Button variant="outline" className="w-full text-sm py-2">Watch Now</Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sermons;
