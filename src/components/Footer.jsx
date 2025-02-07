import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Sepetix</h2>
          <div className="flex space-x-4">
            <FaFacebook className="text-blue-600 hover:text-blue-800 cursor-pointer" size={24} />
            <FaInstagram className="text-pink-500 hover:text-pink-700 cursor-pointer" size={24} />
            <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" size={24} />
          </div>
        </div>
        <div className="border-t border-gray-300 pt-6 grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Company Info</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="space-y-1">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Get In Touch</h3>
            <div className="flex space-x-2 mb-2">
              <input type="email" placeholder="Your Email" className="flex-1 p-2 border border-gray-300 rounded" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-gray-500">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
