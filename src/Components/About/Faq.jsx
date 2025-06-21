import React from 'react'
import FaqData from './FaqData'
import { useSelector } from 'react-redux'

function Faq() {
  const language = useSelector(state => state.language.language)
  const translations = {
    english: {
      discover: 'Discover Our Hotel',
      luxuryExperience: 'Enjoy A Luxury Experience',
    },
    italy: {
      discover: 'Scopri il nostro Hotel',
      luxuryExperience: 'Goditi un\'Esperienza di Lusso',
    },
  }

  // Fallback to English if language is not found
  const { discover, luxuryExperience } = translations[language] || translations.english

  return (
    <div className='w-full min-h-[70vh] flex flex-col justify-center py-10 md:pb-20 px-2 md:px-16'>
      <span className="w-[2px] inline-block h-16 bg-primary/50 mb-4 md:mb-5"></span>
      <h2 className='font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl'>{discover}</h2>
      <h1 className='font-bellefair text-3xl my-2 md:text-5xl lg:text-6xl'>{luxuryExperience}</h1>
      <FaqData />
    </div>
  )
}

export default Faq
