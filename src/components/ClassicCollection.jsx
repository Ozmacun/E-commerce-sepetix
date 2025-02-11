import React from "react";
import Slider from "./Slider"; 
import slide1 from "../assets/images/w-slide-01.jpg"
import slide2 from "../assets/images/w-slide-02.jpg"
import slide3 from "../assets/images/w-slide-03.jpg"

export default function ClassicCollection() {
  const slides = [
    {
      id: 1,
      image: slide1,
      title: "WINTER 2025",
      subtitle: "YENİ KOLEKSİYON",
      description: "Kaçırılmayacak Fırsatlarla Kış Koleksiyonu",
      buttonText: "Alışverişe Başla",
    },
    {
      id: 2,
      image: slide2,
      title: "WINTER 2025",
      subtitle: "YENİ KOLEKSİYON",
      description: "Kaçırılmayacak Fırsatlarla Kış Koleksiyonu",
      buttonText: "Alışverişe Başla",
    },
    {
      id: 3,
      image: slide3,
      title: "WINTER 2025",
      subtitle: "YENİ KOLEKSİYON",
      description: "Kaçırılmayacak Fırsatlarla Kış Koleksiyonu",
      buttonText: "Alışverişe Başla",
    },
  ];

  return (
    <div className="w-full">
      <Slider slides={slides} />
    </div>
  );
}