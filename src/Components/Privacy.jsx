import React from 'react'
import { useSelector } from 'react-redux'

function Privacy() {
  const language = useSelector(state => state.language.language)

  const translations = {
    english: {
      privacyPolicy: "Privacy Policy",
      introduction: "1. Introduction",
      informationWeCollect: "2. Information We Collect",
      howWeUseYourData: "3. How We Use Your Data",
      dataProtectionAndSecurity: "4. Data Protection and Security",
      sharingYourInformation: "5. Sharing Your Information",
      useOfCookies: "6. Use of Cookies",
      yourRights: "7. Your Rights",
      minors: "8. Minors",
      updatesToThePrivacyPolicy: "9. Updates to the Privacy Policy",
      contactUs: "10. Contact Us",
      thankYou: "Thank you for trusting us with your stay. we are committed to ensuring your privacy and creating a memorable experience.",
      personalInformation: "Personal Information:",
      usageData: "Usage Data:",
      managingReservations: "Managing reservations and providing personalized services.",
      sendingBookingConfirmations: "Sending booking confirmations and updates.",
      complyingWithLegalObligations: "Complying with legal obligations.",
      serviceProviders: "Service providers assisting with bookings or payments.",
      legalAuthorities: "Legal authorities when required by law.",
      accessCorrectOrDelete: "Access, correct, or delete your personal information.",
      optOutOfMarketing: "Opt out of marketing communications at any time.",
      servicesNotIntended: "Our services are not intended for individuals under the age of 18, and we do not knowingly collect data from minors.",
      policyMayBeUpdated: "This policy may be updated periodically, and any changes will be reflected on this page.",
      questionsOrConcerns: "For questions or concerns regarding your privacy, please contact us.",
    },
    italy: {
      privacyPolicy: "Politica sulla privacy",
      introduction: "1. Introduzione",
      informationWeCollect: "2. Informazioni che raccogliamo",
      howWeUseYourData: "3. Come utilizziamo i tuoi dati",
      dataProtectionAndSecurity: "4. Protezione e sicurezza dei dati",
      sharingYourInformation: "5. Condivisione delle tue informazioni",
      useOfCookies: "6. Uso dei cookie",
      yourRights: "7. I tuoi diritti",
      minors: "8. Minori",
      updatesToThePrivacyPolicy: "9. Aggiornamenti alla politica sulla privacy",
      contactUs: "10. Contattaci",
      thankYou: "Grazie per averci affidato il tuo soggiorno. ci impegniamo a garantire la tua privacy e a creare un'esperienza indimenticabile.",
      personalInformation: "Informazioni personali:",
      usageData: "Dati di utilizzo:",
      managingReservations: "Gestione delle prenotazioni e servizi personalizzati.",
      sendingBookingConfirmations: "Invio delle conferme di prenotazione e degli aggiornamenti.",
      complyingWithLegalObligations: "Adempimento degli obblighi legali.",
      serviceProviders: "Fornitori di servizi che assistono con le prenotazioni o i pagamenti.",
      legalAuthorities: "Autorità legali quando richiesto dalla legge.",
      accessCorrectOrDelete: "Accedi, correggi o elimina le tue informazioni personali.",
      optOutOfMarketing: "Opta per non ricevere comunicazioni di marketing in qualsiasi momento.",
      servicesNotIntended: "I nostri servizi non sono destinati a individui sotto i 18 anni, e non raccogliamo intenzionalmente dati dai minori.",
      policyMayBeUpdated: "Questa politica potrebbe essere aggiornata periodicamente, e qualsiasi cambiamento sarà riflesso su questa pagina.",
      questionsOrConcerns: "Per domande o preoccupazioni relative alla tua privacy, per favore contattaci.",
    }
  }

  const {
    privacyPolicy,
    introduction,
    informationWeCollect,
    howWeUseYourData,
    dataProtectionAndSecurity,
    sharingYourInformation,
    useOfCookies,
    yourRights,
    minors,
    updatesToThePrivacyPolicy,
    contactUs,
    thankYou,
    personalInformation,
    usageData,
    managingReservations,
    sendingBookingConfirmations,
    complyingWithLegalObligations,
    serviceProviders,
    legalAuthorities,
    accessCorrectOrDelete,
    optOutOfMarketing,
    servicesNotIntended,
    policyMayBeUpdated,
    questionsOrConcerns
  } = translations[language] || translations.english

  return (
    <div className="w-full pt-24 mx-auto p-4 md:w-[80%] lg:w-[70%] lg:pt-32 lg:pb-10">
      <h3 className="text-2xl font-bold mb-4">{privacyPolicy}</h3>
      <div className="mb-8">
        <p className="text-lg font-bold mb-2">{introduction}</p>
        <p className="text-gray-600">At MONTEFARELLA, we value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard the data you provide when using our website, booking a stay, or interacting with our services.</p>
      </div>
      <div className="mb-8">
        <p className="text-lg font-bold mb-2">{informationWeCollect}</p>
        <p className="text-gray-600">We collect the following types of information:</p>
        <ul className="list-disc pl-4">
          <li className="mb-2"><em>{personalInformation}:</em> Name, email address, phone number, and payment details for booking and communication purposes.</li>
          <li><em>{usageData}:</em> IP addresses, browser types, and other website usage details to improve functionality and performance.</li>
        </ul>
      </div>
      <div className="mb-8">
        <p className="text-lg font-bold mb-2">{howWeUseYourData}</p>
        <p className="text-gray-600">Your data is used for:</p>
        <ul className="list-disc pl-4">
          <li className="mb-2">{managingReservations}</li>
          <li>{sendingBookingConfirmations}</li>
          <li>{complyingWithLegalObligations}</li>
        </ul>
      </div>
      <div className="mb-8">
        <p className="text-lg font-bold mb-2">{dataProtectionAndSecurity}</p>
        <p className="text-gray-600">We use industry-standard encryption to protect your data and restrict access to authorized personnel only. Surveillance systems on the property are limited to external areas and do not compromise personal privacy.</p>
      </div>
      <div className="mb-8">
        <p className="text-lg font-bold mb-2">{sharingYourInformation}</p>
        <p className="text-gray-600">We do not sell, rent, or share your personal information with third parties except:</p>
        <ul className="list-disc pl-4">
          <li className="mb-2">{serviceProviders}</li>
          <li>{legalAuthorities}</li>
        </ul>
      </div>
      <div className="mb-8">
        <p className="text-lg font-bold mb-2">{useOfCookies}</p>
        <p className="text-gray-600">Our website uses cookies to improve user experience and analyze performance. You can manage or disable cookies through your browser settings.</p>
      </div>
      <div className="mb-8">
        <p className="text-lg font-bold mb-2">{yourRights}</p>
        <p className="text-gray-600">You have the right to:</p>
        <ul className="list-disc pl-4">
          <li className="mb-2">{accessCorrectOrDelete}</li>
          <li>{optOutOfMarketing}</li>
        </ul>
      </div>
      <div className="mb-8">
        <p className="text-lg font-bold mb-2">{minors}</p>
        <p className="text-gray-600">{servicesNotIntended}</p>
      </div>
      <div className="mb-8">
        <p className="text-lg font-bold mb-2">{updatesToThePrivacyPolicy}</p>
        <p className="text-gray-600">{policyMayBeUpdated}</p>
      </div>
      <div className="mb-8">
        <p className="text-lg font-bold mb-2">{contactUs}</p>
        <p className="text-gray-600">{questionsOrConcerns}</p>
      </div>
      <p className="text-gray-600">{thankYou}</p>
    </div>
  )
}

export default Privacy
