import React from "react";
import aboutBg from '../../assets/About_page_imgs/about_img1.jpg';
import { useSelector } from 'react-redux';

function AboutHero() {
  const language = useSelector(state => state.language.language);
  const translations = {
    english: {
      aboutUs: 'About us',
      discoverOurStory: 'Discover our story',
    },
    italy: {
      aboutUs: 'Chi siamo',
      discoverOurStory: 'Scopri la nostra storia',
    },
  };

  const { aboutUs, discoverOurStory } = translations[language] || translations.english;

  return (
    <div className="w-full h-screen relative">
      <img
        src={aboutBg}
        className="w-full h-full object-cover"
        alt="Background image"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black/30 flex flex-col justify-center items-center gap-3">
        <span className="w-[2px] h-16 bg-white/50 mb-4 md:mb-5"></span>
        <h2 className="font-poppins text-primary text-2xl tracking-wider uppercase md:text-4xl lg:text-5xl">
          {aboutUs}
        </h2>
        <h1 className="font-bellefair capitalize text-white text-4xl text-center my-2 md:text-7xl lg:text-8xl">
          {discoverOurStory}
        </h1>
      </div>
    </div>
  );
}

export default AboutHero;
