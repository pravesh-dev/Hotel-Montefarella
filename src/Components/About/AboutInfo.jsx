import React from 'react';
import { FaBell } from "react-icons/fa";
import bgImage from '../../assets/About_page_imgs/about_img2.jpg';
import roomIcon from '../../assets/About_page_imgs/Room.svg';
import gardenIcon from '../../assets/About_page_imgs/Garden.svg';
import spaIcon from '../../assets/About_page_imgs/Spa.svg';
import outdoorIcon from '../../assets/About_page_imgs/Outdoor.svg';
import { useSelector } from 'react-redux';

function AboutInfo() {
  const language = useSelector(state => state.language.language);
  const translations = {
    english: {
      discover: 'Discover Our Hotel',
      luxuryExperience: 'Enjoy A Luxury Experience',
      description: 'At Trullo Monte Farella, we invite you to experience the perfect blend of tradition and luxury in the heart of Puglia. With breathtaking views, personalized spa treatments, and a serene atmosphere, we provide a truly unique escape. Whether you’re here to relax or reconnect, we promise a stay that’s both unforgettable and rejuvenating.',
      luxuryRoom: 'Luxury Room',
      outdoorSpaces: 'Outdoor Spaces',
      gardenViews: 'Garden Views',
      luxurySpa: 'Luxury Spa Experience',
    },
    italy: {
      discover: 'Scopri il nostro Hotel',
      luxuryExperience: 'Goditi un\'Esperienza di Lusso',
      description: 'Al Trullo Monte Farella, ti invitiamo a vivere il perfetto mix di tradizione e lusso nel cuore della Puglia. Con viste mozzafiato, trattamenti spa personalizzati e un\'atmosfera serena, offriamo una vera e propria fuga. Sia che tu sia qui per rilassarti o per ricongiungerti, promettiamo un soggiorno che sia sia indimenticabile che rigenerante.',
      luxuryRoom: 'Camera di Lusso',
      outdoorSpaces: 'Spazi Esterni',
      gardenViews: 'Viste sul Giardino',
      luxurySpa: 'Esperienza Spa di Lusso',
    },
  };

  // Fallback to English if language is not found
  const { discover, luxuryExperience, description, luxuryRoom, outdoorSpaces, gardenViews, luxurySpa } = translations[language] || translations.english;

  return (
    <section className='w-full h-auto bg-white px-1 pt-52 flex flex-col gap-3 md:flex-row md:justify-center md:gap-14 md:pt-28 md:h-[110vh] lg:h-[120vh] lg:pt-36 lg:justify-between lg:gap-0 lg:px-28 xl:px-40 xl:h-[110vh]'>
      <div className='w-full h-52 bg-gray-900 flex-shrink-0 md:w-80 md:h-[33rem] lg:w-96 lg:h-[35rem] xl:w-[28rem]'>
        <img src={bgImage} className='w-full h-full object-cover' alt="" />
      </div>
      <div className='py-4 md:w-[45%] lg:-[50%]'>
        <span className="w-[2px] inline-block h-16 bg-primary/50 mb-4 md:mb-5"></span>
        <h2 className='font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl'>{discover}</h2>
        <h1 className='font-bellefair text-5xl my-2 md:text-6xl lg:text-7xl xl:w-[36rem]'>{luxuryExperience}</h1>
        <p className='font-poppins text-black/70 text-sm md:w-[23rem] lg:w-[30rem] lg:text-base'>{description}</p>
        <div className='flex flex-wrap md:mt-4 lg:mt-8'>
            <div className='w-1/2 flex items-center gap-2 mb-3 lg:w-[50%]'>
                <img src={roomIcon} className='w-8' alt="icons" />
                    <h2 className='font-bellefair text-xl lg:text-2xl'>{luxuryRoom}</h2>
            </div>
            <div className='w-1/2 flex items-center gap-2 mb-3 lg:w-[50%]'>
                <img src={outdoorIcon} className='w-8' alt="icons" />
                    <h2 className='font-bellefair text-xl lg:text-2xl'>{outdoorSpaces}</h2>
            </div>
            <div className='w-1/2 flex items-center gap-2 mb-3 lg:w-[50%]'>
                <img src={gardenIcon} className='w-8' alt="icons" />
                    <h2 className='font-bellefair text-xl lg:text-2xl'>{gardenViews}</h2>
            </div>
            <div className='w-1/2 flex items-center gap-2 mb-3 lg:w-[50%]'>
                <img src={spaIcon} className='w-8' alt="icons" />
                    <h2 className='font-bellefair text-xl lg:text-2xl'>{luxurySpa}</h2>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutInfo
