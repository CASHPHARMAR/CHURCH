import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, BookOpen, Users, Star } from 'lucide-react';

const About = () => {
    const values = [
        { icon: <Heart className="w-8 h-8" />, title: 'Prayer', desc: 'We believe in the power of prayer to change lives and situations.' },
        { icon: <Globe className="w-8 h-8" />, title: 'Evangelism', desc: 'Sharing the good news of Jesus Christ with our community and the world.' },
        { icon: <BookOpen className="w-8 h-8" />, title: 'Worship', desc: 'Expressing our love and awe for God through spirit-filled worship.' },
        { icon: <Users className="w-8 h-8" />, title: 'Community', desc: 'Building strong, supportive relationships within the body of Christ.' },
        { icon: <Star className="w-8 h-8" />, title: 'Excellence', desc: 'Doing all things well for the glory of God.' },
    ];

    return (
        <div className="py-20 overflow-hidden">
            {/* Header */}
            <div className="container mx-auto px-4 mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-6"
                >
                    About <span className="text-secondary">Us</span>
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Discover who we are, where we come from, and where we are going.
                </p>
            </div>

            {/* History Section */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-accent">Our History</h2>
                        <div className="prose prose-invert prose-lg text-gray-300">
                            <p className="mb-4">
                                Assemblies Of God (UPPER ROOM) traces its roots to the global Pentecostal movement, a revival that emphasized the direct experience of God through the Holy Spirit.
                            </p>
                            <p className="mb-4">
                                The name "Upper Room" echoes the biblical event in Acts 2, where the disciples waited in prayer and were filled with the Holy Spirit. This historical echo defines our identity as a place where prayer meets power.
                            </p>
                            <p>
                                In 2013, we celebrated a major milestone with the dedication of our temple in New York. This building stands as a testament to God's faithfulness and a hub for our ministry to the city.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-secondary/20 transform rotate-3 rounded-2xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Church History"
                            className="relative rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-slate-900 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-primary p-6 rounded-xl border border-slate-800 hover:border-secondary/50 transition-colors group text-center"
                            >
                                <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-sm">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
