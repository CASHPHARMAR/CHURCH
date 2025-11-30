import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Contact <span className="text-secondary">Us</span></h1>
                    <p className="text-xl text-gray-400">We'd love to hear from you.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-slate-900 p-6 rounded-xl text-center">
                                <MapPin className="w-8 h-8 text-secondary mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Visit Us</h3>
                                <p className="text-gray-400 text-sm">Amasaman, Ashalaja,<br />Near K.Ofori Ltd</p>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl text-center">
                                <Phone className="w-8 h-8 text-secondary mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Call Us</h3>
                                <p className="text-gray-400 text-sm">(555) 123-4567</p>
                            </div>
                            <div className="bg-slate-900 p-6 rounded-xl text-center">
                                <Mail className="w-8 h-8 text-secondary mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Email Us</h3>
                                <p className="text-gray-400 text-sm">info@upperroom.church</p>
                            </div>
                        </div>

                        <form className="space-y-6 bg-slate-900 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="How can we help you?"></textarea>
                            </div>
                            <Button type="submit" className="w-full flex justify-center items-center">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>

                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="h-full min-h-[400px] bg-slate-800 rounded-2xl overflow-hidden relative"
                    >
                        {/* Placeholder for Map */}
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-500 text-lg">Map Integration Placeholder</p>
                                <p className="text-gray-600 text-sm mt-2">Amasaman, Ashalaja, Near K.Ofori Ltd</p>
                            </div>
                        </div>
                        {/* Overlay to simulate map look */}
                        <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
