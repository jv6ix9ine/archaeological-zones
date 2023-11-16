'use client'
import  { useState } from 'react'
interface Slide {
    id: number;
    imageUrl: string;
  }
  
  const slides: Slide[] = [
    { id: 1, imageUrl: '/hero/4.webp' },
    { id: 2, imageUrl: '/hero/5.webp' },
    { id: 3, imageUrl: '/hero/6.webp' },
    // Agrega más slides según sea necesario
  ];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      console.log(currentSlide)
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      console.log(currentSlide)

    };
  
    return (
      <div className="relative overflow-hidden">
        <div className="flex transition-transform ease-in-out duration-300 transform translate-x-[calc(-100%)]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="w-full h-64 flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            />
          ))}
        </div>
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 hover:bg-neutral-200" onClick={prevSlide}>
          Anterior
        </button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextSlide}>
          Siguiente
        </button>
      </div>
    );
}

export default Slider