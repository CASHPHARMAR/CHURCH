import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
                        alt="Worship Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent font-semibold tracking-widest mb-4 uppercase">Welcome to Upper Room</h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Empowered by Spirit.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                                United in Purpose.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Where Prayer Meets Power. Join us for a life-changing experience in God's presence.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Button variant="primary" className="flex items-center">
                                Join Us This Sunday <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline">
                                Watch Sermons
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Elements (3D Effect) */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 hidden md:block z-10"
                >
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                        <div className="flex items-center space-x-4">
                            <div className="bg-secondary p-3 rounded-full">
                                <Calendar className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">Next Service</p>
                                <p className="font-bold">Sunday, 10:00 AM</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Welcome Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent rounded-2xl opacity-20 blur-lg"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1510590337019-5ef2d3977e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                    alt="Community"
                                    className="relative rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                                />
                                <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-2xl border border-white/10 shadow-xl hidden md:block">
                                    <p className="text-4xl font-bold text-secondary mb-2">2013</p>
                                    <p className="text-gray-400">Temple Dedicated</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold mb-6">A Vibrant, Spirit-Filled Community</h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                Assemblies Of God (UPPER ROOM) is a vibrant, Spirit-filled Christian community rooted in the Pentecostal tradition. We are dedicated to prayer, worship, evangelism, and community.
                            </p>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Our mission is to empower believers to live out their faith with purpose and passion. Whether you are new to faith or looking for a home, there is a place for you here.
                            </p>
                            <Button variant="outline">Learn More About Us</Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
