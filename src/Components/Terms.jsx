import React from 'react'
import { useSelector } from 'react-redux'

function Terms() {
  const language = useSelector(state => state.language.language)

  const termsContent = {
    english: {
      title: "Terms and Conditions for Your Stay",
      sections: [
        {
          title: "1. Booking Confirmation",
          content: "All bookings are confirmed upon receipt of payment as per the agreed terms. Guests are required to present a valid ID upon check-in."
        },
        {
          title: "2. Check-In and Check-Out",
          content: "Early check-in or late check-out is subject to availability and may incur additional charges."
        },
        {
          title: "3. Use of Amenities",
          content: "The private hot tub, spa, and emotional shower are available exclusively to guests. Guests must follow the usage instructions provided to ensure safety and maintenance. The pool features an automated water treatment system and is regularly sanitized for your safety."
        },
        {
          title: "4. Property Use and Maintenance",
          content: "Guests are responsible for maintaining the property and all furnishings in good condition. Any damage to the property, furniture, or appliances will be charged accordingly. Smoking is prohibited inside the property. Designated smoking areas are available outdoors."
        },
        {
          title: "5. Parking and Electric Vehicle Charging",
          content: "Private parking is provided, along with an EV charging station. Guests are responsible for using the charging station properly and ensuring no damage occurs."
        },
        {
          title: "6. Pets Policy",
          content: "Pets are allowed on the property. Guests are required to ensure their pets are well-behaved and do not disturb the peace or cause damage to the property."
        },
        {
          title: "7. Safety and Security",
          content: "The property is equipped with an external video surveillance system for guest safety. Guests must ensure that gates and fences remain closed at all times. The management is not responsible for the loss of any valuables. Guests are advised to use their discretion in securing personal belongings."
        },
        {
          title: "8. Outdoor and Patio Use",
          content: "The outdoor garden and patio areas, including the pergola and loungers, are for guest use. Guests are requested to maintain cleanliness and respect the natural surroundings."
        },
        {
          title: "9. Local Attractions and Accessibility",
          content: "Our property is located near Castellana and Putignano, with easy access to historical sites such as Alberobello and Monopoli. Travel and exploration are at the guest’s discretion."
        },
        {
          title: "10. Privacy and Comfort",
          content: "The property is designed for couples seeking privacy and relaxation. Noise levels must be kept to a minimum to ensure all guests have a peaceful stay."
        },
        {
          title: "11. Liability Disclaimer",
          content: "The management is not liable for any injury, accident, or loss during the stay. Guests are encouraged to act responsibly and use the facilities as intended."
        }
      ],
      disclaimer: "By booking a stay with us, you acknowledge and agree to the above terms and conditions. We look forward to welcoming you to our luxurious property in the heart of Puglia!"
    },
    italy: {
      title: "Termini e Condizioni per il Tuo Soggiorno",
      sections: [
        {
          title: "1. Conferma della Prenotazione",
          content: "Tutte le prenotazioni sono confermate al ricevimento del pagamento secondo i termini concordati. Gli ospiti sono tenuti a presentare un documento d'identità valido al check-in."
        },
        {
          title: "2. Check-In e Check-Out",
          content: "Il check-in anticipato o il check-out ritardato è soggetto a disponibilità e potrebbe comportare costi aggiuntivi."
        },
        {
          title: "3. Uso delle Strutture",
          content: "La vasca idromassaggio privata, lo spa e la doccia emozionale sono disponibili esclusivamente per gli ospiti. Gli ospiti devono seguire le istruzioni d'uso fornite per garantire la sicurezza e la manutenzione. La piscina presenta un sistema di trattamento dell'acqua automatizzato e viene regolarmente sanificata per la tua sicurezza."
        },
        {
          title: "4. Uso e Manutenzione della Proprietà",
          content: "Gli ospiti sono responsabili del mantenimento della proprietà e di tutti gli arredi in buone condizioni. Qualsiasi danno alla proprietà, ai mobili o agli elettrodomestici sarà addebitato di conseguenza. Il fumo è vietato all'interno della proprietà. Sono disponibili aree per fumatori designate all'esterno."
        },
        {
          title: "5. Parcheggio e Ricarica Veicoli Elettrici",
          content: "È disponibile un parcheggio privato, insieme a una stazione di ricarica per veicoli elettrici. Gli ospiti sono responsabili dell'uso corretto della stazione di ricarica e di garantire che non si verifichino danni."
        },
        {
          title: "6. Politica sugli Animali",
          content: "Gli animali sono ammessi sulla proprietà. Gli ospiti sono tenuti a garantire che i loro animali siano ben educati e non disturbino la pace o causino danni alla proprietà."
        },
        {
          title: "7. Sicurezza e Protezione",
          content: "La proprietà è equipaggiata con un sistema di sorveglianza video esterno per la sicurezza degli ospiti. Gli ospiti devono garantire che i cancelli e le recinzioni rimangano chiusi in ogni momento. La gestione non è responsabile della perdita di qualsiasi bene di valore. Gli ospiti sono consigliati di usare la loro discrezione nella sicurezza dei beni personali."
        },
        {
          title: "8. Uso Esterno e Patio",
          content: "Le aree del giardino esterno e del patio, compresi il pergolato e i lettini, sono per uso degli ospiti. Gli ospiti sono richiesti di mantenere la pulizia e di rispettare l'ambiente naturale."
        },
        {
          title: "9. Attrazioni Locali e Accessibilità",
          content: "La nostra proprietà si trova vicino a Castellana e Putignano, con facile accesso ai siti storici come Alberobello e Monopoli. I viaggi e l'esplorazione sono a discrezione dell'ospite."
        },
        {
          title: "10. Privacy e Comfort",
          content: "La proprietà è progettata per le coppie che cercano la privacy e il relax. I livelli di rumore devono essere mantenuti al minimo per garantire che tutti gli ospiti abbiano un soggiorno pacifico."
        },
        {
          title: "11. Disclaimer sulla Responsabilità",
          content: "La gestione non è responsabile per qualsiasi infortunio, incidente o perdita durante il soggiorno. Gli ospiti sono incoraggiati ad agire in modo responsabile e a utilizzare le strutture come previsto."
        }
      ],
      disclaimer: "Facendo una prenotazione con noi, riconosci e accetti i suddetti termini e condizioni. Non vediamo l'ora di accoglierti nella nostra proprietà di lusso nel cuore della Puglia!"
    }
  }

  const { title, sections, disclaimer } = termsContent[language] || termsContent.english

  return (
    <div className="w-full pt-24 mx-auto p-4 md:w-[80%] lg:w-[70%] lg:pt-32 lg:pb-10">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <p className="text-lg font-bold mb-2">{section.title}</p>
          <p className="text-gray-600">{section.content}</p>
        </div>
      ))}
      <p className="text-gray-600">{disclaimer}</p>
    </div>
  )
}

export default Terms
