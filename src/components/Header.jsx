import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, Phone, Search, ShoppingCart, Heart } from "lucide-react";

import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="h-[136px]">
      <div className="bg-[#252B42] text-white flex justify-around items-center h-[58px]">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="m-2">
              <Phone size={16} />
            </span>
            <span className="font-bold text-[14px]">(555) 555-5555</span>
          </div>
          <div className="flex items-center">
            <span className="m-2">
              <Mail size={16} />
            </span>
            <span className="font-bold text-[14px]">sepetix@gmail.com</span>
          </div>
        </div>

        <div className="font-bold text-[14px]">
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>

        <div className="flex items-center gap-3">
          <div className="font-bold text-[14px]">
            <h6>Follow Us :</h6>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} className="text-[16px]" />
            </Link>
            <Link to="/" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faYoutube} className="text-[16px]" />
            </Link>
            <Link to="/" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} className="text-[16px]" />
            </Link>
            <Link to="/" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} className="text-[16px]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white flex justify-around items-center h-[78px]">
        <div className="text-2xl font-bold">
          <h3>Sepetix</h3>
        </div>

        <div className="text-[#737373] w-[361px] flex justify-between items-center">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/" className="hover:text-black">
            Shop
          </Link>
          <Link to="/" className="hover:text-black">
            About
          </Link>
          <Link to="/" className="hover:text-black">
            Blog
          </Link>
          <Link to="/" className="hover:text-black">
            Contact
          </Link>
          <Link to="/" className="hover:text-black">
            Pages
          </Link>
        </div>

        <div className="flex items-center">
          <div className="w-[166px] flex items-center gap-1">
            <FontAwesomeIcon
              icon={faUser}
              className="text-[12px] text-[#23A6F0]"
            />
            <Link to="/" className="font-bold text-[14px] text-[#23A6F0]">
              Login
            </Link>
            <span className="font-bold text-[14px] text-[#23A6F0]">/</span>
            <Link to="/" className="font-bold text-[14px] text-[#23A6F0]">
              Register
            </Link>
          </div>
          <div className="flex items-center justify-evenly w-[148px]">
            <span className="text-[#23A6F0] cursor-pointer">
              <Search size={16} />
            </span>
            <span className="text-[#23A6F0] cursor-pointer flex items-center gap-1">
              <ShoppingCart size={16} />1
            </span>
            <span className="text-[#23A6F0] cursor-pointer flex items-center gap-1">
              <Heart size={16} />1
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}