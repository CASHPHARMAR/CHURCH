import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Button from '../components/Button';
import shidafestImg from '../assets/shidafest.jpg';

const Events = () => {
    const events = [
        {
            id: 0,
            title: "Launching Shidafest",
            date: "Nov 23, 2025",
            time: "8:00 AM",
            location: "Church Auditorium, Upper Room, Amasaman, Ashalaja",
            desc: "Join us for Thanksgiving, Worship, and Praise with the Upper Praise Choir.",
            image: shidafestImg
        },
        {
            id: 1,
            title: "Christmas Eve Service",
            date: "Dec 24, 2023",
            time: "6:00 PM",
            location: "Main Sanctuary",
            desc: "Join us for a special candlelight service celebrating the birth of Christ.",
            image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
        },
        {
            id: 2,
            title: "New Year's Prayer Night",
            date: "Dec 31, 2023",
            time: "10:00 PM",
            location: "Upper Room",
            desc: "Ring in the new year with prayer, worship, and prophetic declarations.",
            image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
        },
        {
            id: 3,
            title: "Community Outreach",
            date: "Jan 15, 2024",
            time: "9:00 AM",
            location: "City Park",
            desc: "Serving our community with food distribution and prayer stations.",
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        }
    ];

    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Upcoming <span className="text-secondary">Events</span></h1>
                    <p className="text-xl text-gray-400">Mark your calendars and join us.</p>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row group hover:border-l-4 hover:border-secondary transition-all duration-300"
                        >
                            <div className="md:w-1/3 relative overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-lg font-bold text-center">
                                    <span className="block text-xs uppercase tracking-wider">{event.date.split(' ')[0]}</span>
                                    <span className="block text-xl">{event.date.split(' ')[1].replace(',', '')}</span>
                                </div>
                            </div>
                            <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">{event.title}</h3>
                                <div className="flex flex-wrap gap-4 text-gray-400 mb-4 text-sm">
                                    <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-secondary" /> {event.time}</span>
                                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-secondary" /> {event.location}</span>
                                </div>
                                <p className="text-gray-300 mb-6">{event.desc}</p>
                                <Button variant="outline" className="self-start">Event Details</Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
