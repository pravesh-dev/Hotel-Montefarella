import React from 'react'
import GalleryMain from './GalleryMain'
import { useSelector } from 'react-redux';

function GallerySection() {
  const language = useSelector(state => state.language.language);
  const translations = {
    english: {
      title: 'Our Hotel’s Beauty',
      subtitle: 'Enjoy A Luxury Experience',
      description: 'Take a stroll through our hotel gallery and imagine yourself here, enjoying every moment of your stay. From cozy interiors to breathtaking views, we’ve captured all the beauty that makes our place special.'
    },
    italy: {
      title: 'La Bellezza del Nostro Hotel',
      subtitle: 'Goditi un\'Esperienza di Lusso',
      description: 'Fai una passeggiata attraverso la galleria del nostro hotel e immagina di essere qui, godendoti ogni momento del tuo soggiorno. Dai interni accoglienti alle viste mozzafiato, abbiamo catturato tutta la bellezza che rende il nostro posto speciale.'
    }
  };

  // Fallback to English if language is not found
  const { title, subtitle, description } = translations[language] || translations.english;

  return (
    <div className='w-full bg-white flex flex-col px-2 py-10 lg:px-20 xl:px-32'>
      <span className="w-[2px] inline-block h-16 bg-primary/50 mb-4 md:mb-5"></span>
      <h2 className='font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl'>{title}</h2>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
      <h1 className='font-bellefair text-3xl my-2 md:text-5xl md:w-[50%] lg:text-6xl lg:w-[30rem]'>{subtitle}</h1>
      <p className='md:text-right font-poppins md:w-[50%] xl:w-[40rem]'>{description}</p>
      </div>
      <GalleryMain />
    </div>
  )
}

export default GallerySection
