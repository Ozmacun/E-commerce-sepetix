import { Mail, Phone, Instagram, Youtube, Facebook, Twitter, Search, ShoppingCart, Heart, User} from "lucide-react";

import { Link } from "react-router-dom";
export default function Header() {
  return (
    
    <header className="h-32">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center h-14">
        {/* Left - Contact Info */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <Phone size={16} className="mr-1" /> (225) 555-0118
          </span>
          <span className="flex items-center">
            <Mail size={16} className="mr-1" /> sepetix@gmail.com
          </span>
        </div>

        {/* Center - Promo Text */}
        <p className="text-sm">Follow Us and get a chance to win 80% off</p>

        {/* Right - Social Icons */}
        <div className="flex items-center space-x-3">
          <span>Follow Us :</span>
          <Link to="/" className="text-white hover:text-gray-400"><Instagram size={18} /></Link>
          <Link to="/" className="text-white hover:text-gray-400"><Youtube size={18} /></Link>
          <Link to="/" className="text-white hover:text-gray-400"><Facebook size={18} /></Link>
          <Link to="/" className="text-white hover:text-gray-400"><Twitter size={18} /></Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md py-3 px-6 flex justify-between items-center jus">
        {/* Logo */}
        <div className="text-2xl font-bold">Sepetix</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-600 h-18 items-center">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/" className="hover:text-black">Shop</Link>
          <Link to="/" className="hover:text-black">About</Link>
          <Link to="/" className="hover:text-black">Blog</Link>
          <Link to="/" className="hover:text-black">Contact</Link>
          <Link to="/" className="hover:text-black">Pages</Link>
        </nav>

        {/* Right - User Actions */}
        <div className="flex items-center space-x-4">
          <span className="text-blue-600 m-1"><User size={18} className="mr-4" /></span>
          <Link href="#" className="text-blue-600 flex items-center hover:underline m-0">
             Login
          </Link>
          <span className="text-blue-600 m-1">/</span>
          <Link href="#" className="text-blue-600 flex items-center hover:underline">
             Register
          </Link>
          <Search size={20} className="text-gray-600 cursor-pointer hover:text-black" />
          <ShoppingCart size={20} className="text-gray-600 cursor-pointer hover:text-black" />
          <Heart size={20} className="text-gray-600 cursor-pointer hover:text-black" />
        </div>
      </div>
    </header>
  );
}
