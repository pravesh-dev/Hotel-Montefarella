import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import bgImage from '../../assets/Landing_page_imgs/landing-hero1.jpg';
import bgImage2 from '../../assets/Landing_page_imgs/landing-hero2.jpg';
import bgImage3 from '../../assets/Landing_page_imgs/landing-hero3.jpg';
import bgImage4 from '../../assets/Landing_page_imgs/landing-hero4.jpg';
import star from '../../assets/Landing_page_imgs/star.svg';
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import HotelBook from './HotelBook';

function Hero() {
  const language = useSelector(state => state.language.language); // Get language from Redux store
  const [currentImage, setCurrentImage] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const images = [bgImage, bgImage2, bgImage3, bgImage4];

  // Text translations
  const translations = {
    english: {
      title: 'Perfect Place to Enjoy <br /> Your Life',
      subtitle: 'BEST PLACE TO RELAX & ENJOY',
      rating: '4.8 Rated Around The World',
    },
    italy: {
      title: 'Il posto perfetto per <br /> goderti la vita',
      subtitle: 'IL MIGLIOR POSTO PER RILASSARSI E DIVERTIRSI',
      rating: '4.8 Valutato in tutto il mondo',
    },
  };

  // Fallback to English if language is not found
  const { title, subtitle, rating } = translations[language] || translations.english;

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentImage((currentImage + 1) % images.length);
        setOpacity(1);
      }, 350);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  const handleImageChange = (direction) => {
    setOpacity(0);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentImage((currentImage + 1) % images.length);
      } else if (direction === 'prev') {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
      }
      setOpacity(1);
    }, 500);
  };

  return (
    <section className="relative bg-black">
      <img
        src={images[currentImage]}
        className={`w-full h-screen object-cover transition-opacity duration-500 ease-in-out ${
          opacity === 1 ? 'opacity-100' : 'opacity-0'
        }`}
        alt="background images"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-3 md:px-10 lg:px-24 bg-black/60">
        <span className="w-[2px] h-20 bg-white/50 md:mt-12 mb-10 md:mb-5"></span>
        <p className="text-primary text-xs md:text-lg tracking-widest md:tracking-[6px] font-poppins mb-4">
          {subtitle}
        </p>
        <h1
  className="text-[2.2rem] md:text-[4rem] lg:text-[6rem] font-thin leading-tight mb-5 font-bellefair text-white"
  dangerouslySetInnerHTML={{ __html: title }}
></h1>

        <div className="flex items-center mb-10">
          <img
            alt="Reviewer 1"
            className="w-10 h-10 rounded-full border-2 border-primary -mr-3"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/FoS7fjUtcMXjECupS8BqUlgDDY0tna0oGFIJB26uhEYFCLeTA.jpg"
            width="40"
          />
          <img
            alt="Reviewer 2"
            className="w-10 h-10 rounded-full border-2 border-primary -mr-3"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/Wjf3Je0hJSilq0gVwIUjnCtfQD4YAdlN7jhmyRqWMEYQIs4nA.jpg"
            width="40"
          />
          <img
            alt="Reviewer 3"
            className="w-10 h-10 rounded-full border-2 border-primary"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/PML4JiBUtrLgKlnKhj2t3Gzb1vXxch6wcPyHnQhaTW9AhFfJA.jpg"
            width="40"
          />
          <div className="ml-5 flex flex-col gap-1">
            <span className="font-poppins text-white/80 text-xs md:text-base">
              {rating}
            </span>
            <div className="flex gap-1">
              <img src={star} className="w-5" alt="" />
              <img src={star} className="w-5" alt="" />
              <img src={star} className="w-5" alt="" />
              <img src={star} className="w-5" alt="" />
              <img src={star} className="w-5" alt="" />
            </div>
          </div>
        </div>
        <div className="flex space-x-6">
          <button
            className="w-12 h-12 text-xs flex items-center justify-center border-2 border-white/70 text-white/70 rounded-full"
            onClick={() => handleImageChange('prev')}
          >
            <FaChevronLeft />
          </button>
          <button
            className="w-12 h-12 text-xs flex items-center justify-center border-2 border-white/70 text-white/70 rounded-full"
            onClick={() => handleImageChange('next')}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
      <HotelBook />
    </section>
  );
}

export default Hero;
