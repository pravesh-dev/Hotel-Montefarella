import React, { useState, useEffect } from 'react';
import data from './GalleryData.js';
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";
// import './GalleryMain.css';
import { useSelector } from 'react-redux';

function GalleryMain() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    let autoplay;
    if (isOpen) {
      autoplay = setInterval(() => {
        handleNext();
      }, 7000);
    }
    return () => clearInterval(autoplay);
  }, [isOpen, currentIndex]);

  const handleGallery = (gallery) => {
    setIsOpen(true);
    setSelectedGallery(gallery);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedGallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-auto mt-10 sm:w-[30rem] sm:mx-auto md:w-[95%] lg:w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-full flex flex-col ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          <div className="w-full h-52 md:w-1/2 md:h-[18rem] lg:min-h-[28rem]">
            <img
              src={item.image}
              loading="lazy"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full bg-[#2c2b2c] p-5 flex flex-col flex-shrink-0 justify-center text-white md:w-1/2 lg:min-h-[20rem] lg:px-16">
            <img
              className="w-10 mb-2 lg:w-14"
              src={item.icon}
              alt="icon image"
            />
            <h2 className="font-bellefair text-xl lg:text-2xl lg:my-4">
              {language === 'english'
                ? item.title.english
                : item.title.italy}
            </h2>
            <p className="font-poppins text-xs lg:text-base">
              {language === 'english'
                ? item.description.english
                : item.description.italy}
            </p>
            <button
              className={`font-poppins capitalize italic text-primary border-t-2 border-b-2 border-primary text-sm py-1 px-7 my-5 lg:my-7 lg:text-xl lg:py-2`}
              onClick={() => handleGallery(item.galleryImgs)}
            >
              {language === 'english'
                ? item.button.english
                : item.button.italy}
            </button>
          </div>
        </div>
      ))}
      {isOpen && (
        <div className="w-full h-screen bg-black/80 backdrop-blur-md fixed top-0 left-0 z-[100] flex justify-center items-center">
          <button
            className="text-3xl absolute right-14 top-14 text-primary"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          <div className="w-80 h-96 overflow-hidden relative lg:w-[45rem] lg:h-[40rem] flex items-center justify-center">
            {selectedGallery[currentIndex].type === 'img' ? (
              <img
                src={selectedGallery[currentIndex].url}
                loading="lazy"
                alt={`Gallery Image ${currentIndex + 1}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={selectedGallery[currentIndex].url}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              ></video>
            )}
          </div>
          <button
            className="custom-prev-button absolute top-[85%] left-10 md:left-20 md:top-1/2 md:-translate-y-1/2 z-[100] border-2 border-primary text-primary text-2xl p-3 rounded-full cursor-pointer"
            onClick={handlePrev}
          >
            <FaChevronLeft />
          </button>
          <button
            className="custom-next-button absolute top-[85%] right-10 md:right-20 md:top-1/2 md:-translate-y-1/2 z-[100] border-2 border-primary text-primary text-2xl p-3 rounded-full cursor-pointer"
            onClick={handleNext}
          >
            <FaAngleRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default GalleryMain;
