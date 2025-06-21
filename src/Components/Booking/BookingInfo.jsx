import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import roomIcon from "../../assets/Booking_page_imgs/Room.svg";
import spaIcon from "../../assets/Booking_page_imgs/Spa.svg";
import outdoorIcon from "../../assets/Booking_page_imgs/Outdoor.svg";
import kitchenIcon from "../../assets/Booking_page_imgs/kitchen-icon.svg";
import indoorPoolIcon from "../../assets/Booking_page_imgs/Indoor-pool.svg";
import parkingIcon from "../../assets/Booking_page_imgs/Parking.svg";
import petIcon from "../../assets/Booking_page_imgs/Pet.svg";
import securityCameraIcon from "../../assets/Booking_page_imgs/Security-camera.svg";
import wifiIcon from "../../assets/Booking_page_imgs/Wifi.svg";
import tvIcon from "../../assets/Booking_page_imgs/tv.svg";
import BookingForm from "./BookingForm";


function BookingInfo() {
  const location = useLocation();
  const [additionalStyle, setAdditionalStyle] = useState({});
  
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    if (location.pathname === "/book-stay") {
      setAdditionalStyle({ paddingTop: "6rem" });
    }
  }, [location.pathname]);


  const translations = {
    english: {
      luxurySuiteSpa: `Luxury Suite & Spa`,
      discoverUniqueCharm: `Discover the unique charm of Trullo Monte Farella, where tradition meets modern comfort in the heart of Puglia. Our luxury spa offers a one-of-a-kind Puglia trullo experience, with a private hot tub under the starry cone of an authentic trullo and a soothing emotional shower infused with therapeutic aromas.`,
      surroundedLushGreenery: `Surrounded by lush greenery, our property features a serene patio, private parking with EV charging, and the perfect setting for a romantic getaway. Immerse yourself in the beauty of Puglia and indulge in unparalleled relaxation and privacy.`,
      whatWeOffer: `What we offer`,
      luxuryRoom: `Luxury room`,
      luxurySpaEssentials: `Luxury spa with essentials`,
      entertainmentTV: `Entertainment - TV`,
      wifi: `WIFI`,
      kitchenDining: `Kitchen and dining`,
      petAllowed: `Pet allowed`,
      freeParking: `free parking`,
      privateIndoorPool: `Private Indoor Pool`,
      outdoorPatioDinningArea: `Outdoor patio & Dinning area`,
      exteriorSecurityCamerasProperty: `Exterior security cameras on property`,
      propertyConsistsOf: `The property consists of`,
      authenticCharmPuglia: `Reflects the authentic charm of Puglia with traditional design.`,
      perfectCouplesSeekingRelaxationPrivacy: `Perfect for couples seeking relaxation and privacy.`,
      cozyLivingRoomUniqueFurnishings: `Features a cozy living room with unique furnishings.`,
      equippedKitchenModernInductionCooktop: `Equipped kitchen with modern induction cooktop.`,
      stoneAccentedBathroomSpaciousOutdoorRelaxationArea: `Includes a stone-accented bathroom and spacious outdoor relaxation area.`,
      comfortableDoubleBedroomRestfulStay: `Comfortable double bedroom for a restful stay.`,
      whereWeAre: `Where we are`,
      nestledHeartSouthernItaly: `Nestled in the heart of southern Italy, our suite is just a short stroll from Castellana and Putignano, with easy access to iconic destinations like Alberobello, Monopoli, and Polignano. `,
      surroundedNatureLovinglyRestoredRooms: `Surrounded by nature, our lovingly restored rooms combine the charm of Apulia’s historic past with modern comforts for an unforgettable stay.`,
    },
    italy: {
      luxurySuiteSpa: `Suite & Spa di Lusso`,
      discoverUniqueCharm: `Scopri il fascino unico di Trullo Monte Farella, dove la tradizione incontra il comfort moderno nel cuore della Puglia. Il nostro spa di lusso offre un'esperienza unica del trullo di Puglia, con una vasca idromassaggio privata sotto la volta stellata di un autentico trullo e una doccia emozionale rilassante infusa con aromi terapeutici.`,
      surroundedLushGreenery: `Circondato da una lussureggiante vegetazione, la nostra proprietà presenta un patio sereno, parcheggio privato con stazione di ricarica per veicoli elettrici, e il setting perfetto per una fuga romantica. Immergiti nella bellezza della Puglia e indulge in un relax e una privacy senza precedenti.`,
      whatWeOffer: `Cosa offriamo`,
      luxuryRoom: `Camera di lusso`,
      luxurySpaEssentials: `Spa di lusso con essenziali`,
      entertainmentTV: `Intrattenimento - TV`,
      wifi: `WIFI`,
      kitchenDining: `Cucina e sala da pranzo`,
      petAllowed: `Animali domestici ammessi`,
      freeParking: `parcheggio gratuito`,
      privateIndoorPool: `Piscina coperta privata`,
      outdoorPatioDinningArea: `Patio esterno e area da pranzo`,
      exteriorSecurityCamerasProperty: `Telecamere di sicurezza esterne sulla proprietà`,
      propertyConsistsOf: `La proprietà consiste di`,
      authenticCharmPuglia: `Riflette il fascino autentico della Puglia con design tradizionale.`,
      perfectCouplesSeekingRelaxationPrivacy: `Perfetto per le coppie in cerca di relax e privacy.`,
      cozyLivingRoomUniqueFurnishings: `Presenta un soggiorno accogliente con arredi unici.`,
      equippedKitchenModernInductionCooktop: `Cucina attrezzata con piano cottura ad induzione moderno.`,
      stoneAccentedBathroomSpaciousOutdoorRelaxationArea: `Include un bagno con accenti in pietra e un'area di relax all'aperto spaziosa.`,
      comfortableDoubleBedroomRestfulStay: `Camera da letto matrimoniale confortevole per un soggiorno rilassante.`,
      whereWeAre: `Dove siamo`,
      nestledHeartSouthernItaly: `Nascosto nel cuore del sud Italia, la nostra suite è a breve passeggiata da Castellana e Putignano, con facile accesso a destinazioni iconiche come Alberobello, Monopoli e Polignano. `,
      surroundedNatureLovinglyRestoredRooms: `Circondato dalla natura, le nostre camere restaurate con amore combinano il fascino del passato storico dell'Apulia con comfort moderni per un soggiorno indimenticabile.`,
    },
  };

  // Fallback to English if language is not found
  const {
    luxurySuiteSpa,
    discoverUniqueCharm,
    surroundedLushGreenery,
    whatWeOffer,
    luxuryRoom,
    luxurySpaEssentials,
    entertainmentTV,
    wifi,
    kitchenDining,
    petAllowed,
    freeParking,
    privateIndoorPool,
    outdoorPatioDinningArea,
    exteriorSecurityCamerasProperty,
    propertyConsistsOf,
    authenticCharmPuglia,
    perfectCouplesSeekingRelaxationPrivacy,
    cozyLivingRoomUniqueFurnishings,
    equippedKitchenModernInductionCooktop,
    stoneAccentedBathroomSpaciousOutdoorRelaxationArea,
    comfortableDoubleBedroomRestfulStay,
    whereWeAre,
    nestledHeartSouthernItaly,
    surroundedNatureLovinglyRestoredRooms,
  } = translations[language] || translations.english;

  return (
    <div
      className="w-full bg-white py-10 px-1 text-black md:flex md:flex-row-reverse md:px-6 md:items-center lg:px-24 lg:justify-between"
      style={additionalStyle}
    >
      <BookingForm />
      <div className="md:w-[70%] lg:mr-10 lg:w-[55%]">
        <h1 className="font-bellefair text-4xl mt-8 mb-3 lg:text-6xl">
          {luxurySuiteSpa}
        </h1>
        <p className="font-poppins text-sm mb-2 lg:text-lg">
          {discoverUniqueCharm}
        </p>
        <p className="font-poppins text-sm mb-2 lg:text-lg">
          {surroundedLushGreenery}
        </p>
        <h2 className="font-bellefair mt-8 text-2xl lg:text-3xl">
          {whatWeOffer}
        </h2>
        <div className="flex flex-wrap gap-3 mt-2 justify-between">
          <div className="w-[45%] font-poppins capitalize text-sm lg:text-lg flex items-center gap-2">
            <img src={roomIcon} className="w-8 mr-2" alt="icons" />{" "}
            <span>{luxuryRoom}</span>
          </div>
          <div className="w-[45%] font-poppins capitalize text-sm lg:text-lg flex items-center gap-2">
            <img src={spaIcon} className="w-8 mr-2" alt="icons" />{" "}
            <span>{luxurySpaEssentials}</span>
          </div>
          <div className="w-[45%] font-poppins capitalize text-sm lg:text-lg flex items-center gap-2">
            <img src={tvIcon} className="w-8 mr-2" alt="icons" />{" "}
            <span>{entertainmentTV}</span>
          </div>
          <div className="w-[45%] font-poppins capitalize text-sm lg:text-lg flex items-center gap-2">
            <img src={wifiIcon} className="w-8 mr-2" alt="icons" />{" "}
            <span>{wifi}</span>
          </div>
          <div className="w-[45%] font-poppins capitalize text-sm lg:text-lg flex items-center gap-2">
            <img src={kitchenIcon} className="w-8 mr-2" alt="icons" />{" "}
            <span>{kitchenDining}</span>
          </div>
          <div className="w-[45%] font-poppins capitalize text-sm lg:text-lg flex items-center gap-2">
            <img src={petIcon} className="w-8 mr-2" alt="icons" />{" "}
            <span>{petAllowed}</span>
          </div>
          <div className="w-[45%] font-poppins capitalize text-sm lg:text-lg flex items-center gap-2">
            <img src={parkingIcon} className="w-8 mr-2" alt="icons" />{" "}
            <span>{freeParking}</span>
          </div>
          <div className="w-[45%] font-poppins capitalize text-sm lg:text-lg flex items-center gap-2">
            <img src={indoorPoolIcon} className="w-8 mr-2" alt="icons" />{" "}
            <span>{privateIndoorPool}</span>
          </div>
          <div className="w-[45%] font-poppins capitalize text-sm lg:text-lg flex items-center gap-2">
            <img src={outdoorIcon} className="w-8 mr-2" alt="icons" />{" "}
            <span>{outdoorPatioDinningArea}</span>
          </div>
          <div className="w-[45%] font-poppins capitalize text-sm lg:text-lg flex items-center gap-2">
            <img src={securityCameraIcon} className="w-8 mr-2" alt="icons" />{" "}
            <span>{exteriorSecurityCamerasProperty}</span>
          </div>
        </div>
        <h2 className="font-bellefair mt-8 capitalize text-2xl lg:text-3xl">
          {propertyConsistsOf}
        </h2>
        <div className="flex flex-wrap gap-1 mt-2 justify-between">
          <div className="w-[49%] font-poppins capitalize text-sm flex gap-3 items-center lg:text-lg">
            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>{" "}
            <span>{authenticCharmPuglia}</span>
          </div>
          <div className="w-[49%] font-poppins capitalize text-sm flex gap-3 items-center lg:text-lg">
            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>{" "}
            <span>{perfectCouplesSeekingRelaxationPrivacy}</span>
          </div>
          <div className="w-[49%] font-poppins capitalize text-sm flex gap-3 items-center lg:text-lg">
            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>{" "}
            <span>{cozyLivingRoomUniqueFurnishings}</span>
          </div>
          <div className="w-[49%] font-poppins capitalize text-sm flex gap-3 items-center lg:text-lg">
            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>{" "}
            <span>{equippedKitchenModernInductionCooktop}</span>
          </div>
          <div className="w-[49%] font-poppins capitalize text-sm flex gap-3 items-center lg:text-lg">
            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>{" "}
            <span>{stoneAccentedBathroomSpaciousOutdoorRelaxationArea}</span>
          </div>
          <div className="w-[49%] font-poppins capitalize text-sm flex gap-3 items-center lg:text-lg">
            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>{" "}
            <span>{comfortableDoubleBedroomRestfulStay}</span>
          </div>
        </div>
        <h2 className="font-bellefair mt-8 mb-3 text-2xl lg:text-3xl">
          {whereWeAre}
        </h2>
        <p className="font-poppins capitalize text-sm mb-2 lg:text-lg">
          {nestledHeartSouthernItaly}
        </p>
        <p className="font-poppins capitalize text-sm mb-2 lg:text-lg">
          {surroundedNatureLovinglyRestoredRooms}
        </p>
      </div>
    </div>
  );
}

export default BookingInfo;
