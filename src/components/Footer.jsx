import React from 'react';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand & Desc */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            UPPER <span className="text-secondary">ROOM</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowered by Spirit. United in Purpose. A vibrant, Spirit-filled Christian community rooted in the Pentecostal tradition.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61582560673037" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="https://instagram.com/upper_room?igsh=aGFwNXJ6Nmo5MGZi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.tiktok.com/@upper_room.ag?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                                <FaTiktok size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Ministries', 'Sermons', 'Events', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-secondary transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-400">
                                <MapPin className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                                <span>Amasaman, Ashalaja,<br />Near K.Ofori Ltd</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Phone className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Mail className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                                <span>info@upperroom.church</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Assemblies Of God (UPPER ROOM). All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
