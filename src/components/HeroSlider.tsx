'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: "https://storage.googleapis.com/a1aa/image/ROeg7TSt0ledKx5Ko3rOFsUy8HayIs1bav4UTFad-3g.jpg",
    title: "50 Layanan Baru Service",
    subtitle: "24 Jam"
  },
  {
    id: 2,
    image: "https://storage.googleapis.com/a1aa/image/imf-iNZsYZmyZ0nR2fMSBEtX9rOSe_pbyEl4l-cSgOw.jpg",
    title: "Repair Smartphone",
    subtitle: "Teknisi Profesional"
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            <p className="text-lg">{slide.subtitle}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
