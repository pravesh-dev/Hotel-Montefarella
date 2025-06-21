import React, { useState, useEffect } from "react";
import logo from '/logo.png'
import { FaAngleRight, FaChevronRight } from "react-icons/fa6";
import { RiGoogleLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaAirbnb } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {
  const date = new Date();
  const language = useSelector(state => state.language.language);

  const translations = {
    english: {
      usefulLinks: 'USEFUL LINKS',
      home: 'HOME',
      about: 'ABOUT',
      services: 'SERVICES',
      contact: 'Contact',
      bookStay: 'Book Now',
      escapePuglia: 'Escape to the heart of Puglia—book your luxury stay today!',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      copyright: 'All Rights Reserved.',
      footerDescription: 'Trullo Monte Farella blends luxury with tradition, just minutes from Alberobello and the Adriatic coast, offering a serene Puglian retreat.'
    },
    italy: {
      usefulLinks: 'LINK UTILI',
      home: 'HOME',
      about: 'CHI SIAMO',
      services: 'SERVIZI',
      contact: 'CONTATTI',
      bookStay: 'Prenota ora',
      escapePuglia: 'Fuggi nel cuore della Puglia—prenota il tuo soggiorno di lusso oggi!',
      privacyPolicy: 'Politica sulla privacy',
      termsOfUse: 'Termini d\'uso',
      copyright: 'Tutti i diritti riservati.',
      footerDescription: 'Trullo Monte Farella fonde lusso e tradizione, a pochi minuti da Alberobello e dalla costa adriatica, offrendo un sereno rifugio pugliese.'
    },
  };

  const {
    usefulLinks,
    home,
    about,
    services,
    contact,
    bookStay,
    escapePuglia,
    privacyPolicy,
    termsOfUse,
    copyright,
    footerDescription
  } = translations[language] || translations.english;

  return (
    <footer className="bg-[#2c2b2b] text-gray-300 py-8 md:px-5 lg:px-16">
      <div className="md:flex items-center justify-between md:gap-10">
      {/* Footer Logo Section */}
      <div className="mb-8 flex flex-col items-center md:items-start">
        <div className="md:flex">
        <img
          src={logo}
          alt="Imperial Grand Hotel Logo"
          className="w-12 h-12 mx-auto mb-4"
          />
        <div className="flex flex-col">
        <span className="text-[1.15rem] md:text-2xl uppercase font-bellefair">Montefarella</span>
            <span className="text-[0.5rem] md:text-[0.75rem] ml-1 tracking-[3px] text-white/90 uppercase font-mulish">
              Luxury Trullo & Spa
            </span>
        </div>
        </div>
        <p className="text-sm text-gray-400 text-center mt-2 font-poppins w-80 md:text-left">
        {footerDescription}
        </p>
      </div>

      {/* Useful Links Section */}
      <div className="text-center mb-8 md:text-left">
        <h2 className="text-lg font-semibold text-primary mb-2">
          {usefulLinks}
        </h2>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="hover:text-primary">
              {home}
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary">
              {about}
            </Link>
          </li>
          <li>
            <Link to="/booking" className="hover:text-primary">
              {services}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary">
              {contact}
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-center mb-8 md:w-72 md:text-left">
        <p className="text-sm text-gray-400 mb-4">
        {escapePuglia}
        </p>
        <Link
              to='/book-stay'
              className="w-44 mx-auto md:mx-0 lg:mt-6 text-primary border-t-2 border-b-2 border-primary py-1 font-poppins italic flex items-center justify-center"
            >
              {bookStay}<span className="ml-2"><FaChevronRight /></span>
            </Link>
      </div>
      </div>
      {/* Social Links Section */}
      <div className="text-center mb-8 flex items-center justify-center gap-4 md:justify-between">
        <span className="w-14 h-[1.5px] bg-white/50 md:w-60 lg:w-80 xl:w-[30rem]"></span>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/montefarella/" className="text-gray-300 hover:text-primary border-2 border-gray-300 rounded-full p-1 lg:text-xl lg:p-3"><FaInstagram /></a>
          <a href="mailto:bookings.montefarella@gmail.com" className="text-gray-300 hover:text-primary border-2 border-gray-300 rounded-full p-1 lg:text-xl lg:p-3"><TfiEmail /></a>
          <a href="https://www.airbnb.com/rooms/1217293513567519910?guests=1&adults=1&s=67&unique_share_id=ca4f976b-4311-439b-a1ae-1c17da72cf27" className="text-gray-300 hover:text-primary border-2 border-gray-300 rounded-full p-1 lg:text-xl lg:p-3"><FaAirbnb/></a>
          <a href="https://www.google.com/search?q=trullo+monte+farella&sca_esv=963e6bd44828a6b7&rlz=1C1GCEA_enIT964IT964&sxsrf=ADLYWII4O1K_mL4_HS93ri5C8-K7tG3HcA%3A1734536833344&ei=ge5iZ4HRFNqqi-gPu-ndoQ0&ved=0ahUKEwjBlbSe1bGKAxVa1QIHHbt0N9QQ4dUDCBA&uact=5&oq=trullo+monte+farella&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHRydWxsbyBtb250ZSBmYXJlbGxhMgQQIxgnMgQQIxgnMhEQLhiABBjHARjLARiOBRivATILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgUQABjvBTIIEAAYgAQYogQyBRAAGO8FMgUQABjvBTIFEAAY7wVIrBRQ4wlYxRFwAXgAkAEAmAGBAaAB8wWqAQMxLja4AQPIAQD4AQGYAgigArIGwgIIEAAYsAMY7wXCAgsQABiABBiwAxiiBMICBxAjGCcYrgLCAgYQABgWGB6YAwCIBgGQBgWSBwMxLjegB9ko&sclient=gws-wiz-serp" className="text-gray-300 hover:text-primary border-2 border-gray-300 rounded-full p-1 lg:text-xl lg:p-3"><RiGoogleLine /></a>
        </div>
        <span className="w-14 h-[1.5px] bg-white/50 md:w-60 lg:w-80 xl:w-[30rem]"></span>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-sm text-gray-500 md:flex items-center justify-between">
        <p>&copy; {date.getFullYear()} Montefarella - Luxury Trullo & Spa. {copyright}.</p>
        <div className="space-x-2 mt-2 md:mt-0 md:space-x-10">
          <Link to="/privacy" className="hover:text-yellow-500">
            {privacyPolicy}
          </Link>
          <Link to="/terms" className="hover:text-yellow-500">
            {termsOfUse}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
