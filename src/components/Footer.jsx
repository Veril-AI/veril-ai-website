import React from 'react';
import { Mail, Linkedin, XIcon, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Veril AI</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner in ethical AI governance. Building a future of responsible AI innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <XIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/vision" className="text-gray-300 hover:text-white">Vision</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-white">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail size={20} className="mr-2" />
                <a href="mailto:info@verilai.com" className="hover:text-white">
                  info@verilai.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Veril AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;