import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bgImage from '../../assets/Landing_page_imgs/landing-about.jpg'

function HotelInfo() {
  const language = useSelector(state => state.language.language);
  const translations = {
    english: {
      subtitle: `Discover Pure Comfort`,
      title: `Experience True Luxury`,
      para: `Welcome to Luxury Suite & Spa Trullo Monte Farella! Here, you can unwind in a hot tub under the starry cone, enjoying the unique Puglia trullo experience that you won’t find anywhere else. It’s the perfect romantic getaway for couples looking for privacy and relaxation, with a beautiful patio surrounded by lush greenery. Our charming property reflects the spirit of Puglia, and we’ve got everything you need, including private parking with an EV charging station. We can’t wait to help you create unforgettable memories here!`,
      btn: `Discover More ›`
    },
    italy: {
      subtitle: `Scopri il Puro Comfort`,
      title: `Esperienza il Vero Lusso`,
      para: `Benvenuti al Luxury Suite & Spa Trullo Monte Farella! Qui, potrai rilassarti in una vasca idromassaggio sotto la volta stellata, godendoti l'esperienza unica del trullo di Puglia che non troverai da nessun'altra parte. È il perfetto rifugio romantico per le coppie in cerca di privacy e relax, con un patio bellissimo circondato da una lussureggiante vegetazione. La nostra affascinante proprietà riflette lo spirito di Puglia, e abbiamo tutto ciò di cui hai bisogno, compresa una parcheggio privato con una stazione di ricarica per veicoli elettrici. Non vediamo l'ora di aiutarti a creare ricordi indimenticabili qui!`,
      btn: `Scopri di più ›`
    }
  }

  // Fallback to English if language is not found
  const { title, subtitle, para, btn } = translations[language] || translations.english;

  return (
    <section className='w-full h-auto bg-white px-1 pt-52 flex flex-col gap-3 md:flex-row md:justify-center md:gap-14 md:pt-28 md:h-[110vh] lg:h-[120vh] lg:pt-36 lg:justify-between lg:gap-0 lg:px-28 xl:px-40 xl:h-[110vh]'>
      <div className='w-full h-52 flex-shrink-0 md:w-80 md:h-[33rem] lg:w-96 lg:h-[35rem] xl:w-[28rem]'>
      <img src={bgImage} className='w-full h-full object-cover filter brightness-75' alt="" />
      </div>
      <div className='py-4 md:w-[45%] lg:-[50%]'>
        <span className="w-[2px] inline-block h-16 bg-primary/50 mb-4 md:mb-5"></span>
        <h2 className='font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl'>{subtitle}</h2>
        <h1 className='font-bellefair text-5xl my-2 md:text-6xl lg:text-7xl xl:w-[30rem]'>{title}</h1>
        <p className='font-poppins text-black/70 text-sm md:w-[23rem] lg:w-[30rem] lg:text-base'>{para}</p>
        <Link to='/about' className='font-poppins inline-block italic text-primary border-t-2 border-b-2 border-primary text-sm py-1 px-7 my-3 lg:my-7 lg:text-base'>{btn}</Link>
      </div>
    </section>
  )
}

export default HotelInfo
