import React, { useState, useEffect } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useSelector } from 'react-redux';

function FaqData() {
    const [activeIndex, setActiveIndex] = useState(null);
    const language = useSelector(state => state.language.language);

    useEffect(() => {
        setActiveIndex(null); // Reset active index on language change
    }, [language]);

    const data = [
        {
            ques: {
                english: `How to get to the spa from the nearest airport?`,
                italy: `Come arrivare allo spa dall'aeroporto più vicino?`,
            },
            ans: {
                english: `The nearest airport is Bari Karol Wojtyła Airport (BRI), located about an hour's drive away. Transfers can be arranged upon request`,
                italy: `L'aeroporto più vicino è l'Aeroporto di Bari Karol Wojtyła (BRI), situato a circa un'ora di auto. I trasferimenti possono essere organizzati su richiesta`,
            },
        },
        {
            ques: {
                english: `Is the property pet-friendly?`,
                italy: `La proprietà è pet-friendly?`,
            },
            ans: {
                english: `Small pets are welcome, under the careful control of the owners, in order to respect the venue`,
                italy: `I piccoli animali sono i benvenuti, sotto il controllo attento dei proprietari, per rispettare la location`,
            },
        },
        {
            ques: {
                english: `Do you offer Wi-Fi?`,
                italy: `Offriamo Wi-Fi?`,
            },
            ans: {
                english: `Yes, we provide free Wi-Fi throughout the property.`,
                italy: `Sì, offriamo Wi-Fi gratuito in tutta la proprietà.`,
            },
        },
        {
            ques: {
                english: `What dining options are available?`,
                italy: `Quali sono le opzioni di ristorazione disponibili?`,
            },
            ans: {
                english: `Our property comes with a small but fully-equipped kitchen. There are also excellent dining options in the nearby towns of Castellana Grotte and Putignano.`,
                italy: `La nostra proprietà dispone di una piccola ma completamente attrezzata cucina. Ci sono anche ottime opzioni di ristorazione nei vicini paesi di Castellana Grotte e Putignano.`,
            },
        },
        {
            ques: {
                english: `Are room upgrades available?`,
                italy: `Sono disponibili gli upgrade delle camere?`,
            },
            ans: {
                english: `Please contact us for more information regarding room upgrades and premium packages.`,
                italy: `Si prega di contattarci per ulteriori informazioni riguardanti gli upgrade delle camere e i pacchetti premium.`,
            },
        },
        {
            ques: {
                english: `What about parking?`,
                italy: `E il parcheggio?`,
            },
            ans: {
                english: `Free private parking located inside the property is available on-site, including a charging station for electric vehicles.`,
                italy: `Il parcheggio privato gratuito situato all'interno della proprietà è disponibile sul posto, compresa una stazione di ricarica per veicoli elettrici.`,
            },
        }
    ]
  return (
    <div className='flex flex-wrap justify-between items-start'>
      {data.map((item, index) => (
        <div key={index} className='w-full mt-7 md:mt-10 md:w-[45%] border-b-2 border-black/30 pb-2'>
          <h1 className='font-bellefair text-base flex items-center justify-between md:text-xl lg:text-2xl cursor-pointer' onClick={() => setActiveIndex(index === activeIndex ? null : index)}>{item.ques[language]} <span>{index === activeIndex ? <FaAngleUp /> : <FaAngleDown />}</span></h1>
          <p className={`font-poppins text-xs ${index === activeIndex ? 'h-auto' : 'h-0'} overflow-hidden text-black/70 md:text-sm lg:text-base duration-500`}>{item.ans[language]}</p>
        </div>
      ))}
    </div>
  )
}

export default FaqData
