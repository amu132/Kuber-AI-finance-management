import React, { useState } from 'react';
import { Mail, Phone, Facebook, Youtube, Dribbble, Globe, MessageCircle } from 'lucide-react';
import logo from '../assets/logo-2.png'

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-navy-900 text-gray-300 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div>
            <div className="mb-6">
              {/* Logo */}
              <div className="w-24 h-24  rounded-full flex items-center justify-center mb-6">
                <img src={logo} alt="" />
              </div>
              <p className="text-sm md:text-base opacity-75 max-w-md">
                Cryptocurrency has revolutionized the world of finance and digital transactions, 
                providing individuals with a decentralized and secure way to store, transfer, 
                and manage their wealth
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-6">
              <h3 className="text-white text-xl mb-4">Subscribe</h3>
              <p className="text-sm opacity-75 mb-4">
                Stay up-to-date on discounts, offers and events. Unsubscribe at any time.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="flex-1 px-4 py-2 rounded-full bg-white text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm opacity-75">Have a Question?</p>
              <p className="text-white">310-437-2766</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm opacity-75">Contact Us at</p>
              <p className="text-white">unreal@outlook.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          {/* Navigation Links */}
          <nav className="flex gap-6 mb-6 md:mb-0">
            <a href="/about" className="text-sm hover:text-white transition-colors">About Us</a>
            <a href="/contact" className="text-sm hover:text-white transition-colors">Contact</a>
            <a href="/privacy" className="text-sm hover:text-white transition-colors">Privacy</a>
            <a href="/sitemap" className="text-sm hover:text-white transition-colors">Sitemap</a>
            <a href="/terms" className="text-sm hover:text-white transition-colors">Terms</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
              <Dribbble className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-sm opacity-75">© 2024, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;