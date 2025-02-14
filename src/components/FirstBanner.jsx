import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/images/banners/banner1.png";

export default function FirstBanner() {
  return (
    <div className="bg-[#FFF] px-4 sm:px-6 lg:px-8 flex justify-center w-full relative z-10 -mt-20">
      <div className="w-full max-w-[1440px] min-h-[682px] bg-white p-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        <div className="flex justify-center">
          <div className="w-full max-w-[704px] rounded-lg overflow-hidden">
            <img
              src={banner1}
              alt="Winter 2025"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="max-w-[389px]">
            <h2 className="text-lg font-semibold text-gray-600">WINTER 2025</h2>
            <h1 className="mt-4 text-4xl font-bold text-gray-700 sm:text-5xl lg:text-4xl">
              Part of the Neural Universe
            </h1>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <Link
              to="/shop"
              className="bg-[#2DC071] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              BUY NOW
            </Link>
            <Link
              to="/shop"
              className="bg-transparent text-[#2DC071] px-6 py-3 rounded-lg font-semibold border border-[#2DC071] hover:bg-green-50 transition"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
