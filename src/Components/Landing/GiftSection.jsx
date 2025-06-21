import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
import giftImg1 from "../../assets/Landing_page_imgs/gift-img.jpg";
import giftImg2 from "../../assets/Landing_page_imgs/gift-img5.jpg";
import giftImg3 from "../../assets/Landing_page_imgs/gift-img3.jpg";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function GiftSection() {
  const language = useSelector((state) => state.language.language);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [giftImg1, giftImg2, giftImg3];
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Language translations
  const translations = {
    english: {
      subtitle: `Gift a Dream Stay`,
      title: `Customize Your Luxury Stay Gift Card`,
      giftCardForm: "Gift Card Form",
      receiptNameText: "Recipient Name",
      receiptEmailText: "Recipient Email",
      yourMessageText: "Your Message",
      giftStay: "Gift Stay",
    },
    italy: {
      subtitle: `Regala un Soggiorno da Sogno`,
      title: `Personalizza la Tua Gift Card di Soggiorno di Lusso`,
      giftCardForm: "Modulo Regalo",
      receiptNameText: "Nome del Ricevente",
      receiptEmailText: "Email del Ricevente",
      yourMessageText: "Il tuo Messaggio",
      giftStay: "Regala un Soggiorno",
    },
  };

  // Fallback to English if language is not found
  const {
    title,
    subtitle,
    giftCardForm,
    receiptNameText,
    receiptEmailText,
    yourMessageText,
    giftStay,
  } = translations[language] || translations.english;

  const [receiptName, setReceiptName] = useState("");
  const [receiptEmail, setReceiptEmail] = useState("");
  const [yourMessage, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!receiptName || !receiptEmail || !yourMessage) {
      toast.error("Please fill out all fields!");
      return;
    }

    const data = { receiptName, receiptEmail, yourMessage };

    try {
      const response = await fetch("backend.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log(result);

      // Show success notification
      toast.success("Form Submitted submitted successfully!");

      // Clear the form inputs after successful submission
      setReceiptName("");
      setReceiptEmail("");
      setMessage("");

      // Navigate to booking page after 1.5 seconds
      setTimeout(() => {
        navigate('/booking');
        window.scrollTo(0, 0); // Scroll to top when navigating
      }, 1500);
    } catch (error) {
      // Show error notification
      toast.error("Form submission failed!. Please try again.");
    }
  };

  return (
    <section className="flex flex-col bg-[#2c2b2b] items-center w-full h-auto py-16 px-1 gap-2">
      <ToastContainer />
      <span className="w-[2px] inline-block h-16 bg-white/50 mb-4 md:mb-5"></span>
      <h2 className="font-poppins text-primary text-lg tracking-wider uppercase md:text-xl lg:text-2xl">
        {subtitle}
      </h2>
      <h1 className="font-bellefair text-white text-4xl text-center my-2 md:w-[35rem] md:text-5xl lg:text-7xl lg:w-[50rem] lg:mb-5">
        {title}
      </h1>
      <div className="relative md:flex items-center">
        <div className="p-4 w-[90vw] bg-white mt-4 md:p-5 md:w-[30rem] md:mt-0 z-20 lg:w-[35rem] overflow-hidden">
          <form onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bellefair mb-2 md:mb-1">{giftCardForm}</h1>
          <hr className="border-t-2 border-primary mb-4 md:mb-2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 md:mb-1">
              <div>
                <label className="block text-lg mb-1 font-bellefair">{receiptNameText}</label>
                <input
                  type="text"
                  value={receiptName}
                  onChange={(e) => setReceiptName(e.target.value)}
                  className="w-full p-2 font-poppins bg-black/20 border-none outline-none"
                />
              </div>
              <div>
                <label className="block text-lg mb-1 font-bellefair">{receiptEmailText}</label>
                <input
                  type="email"
                  value={receiptEmail}
                  onChange={(e) => setReceiptEmail(e.target.value)}
                  className="w-full p-2 font-poppins bg-black/20 border-none outline-none"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-1">
              <label className="block text-lg mb-1 font-bellefair">{yourMessageText}</label>
              <textarea
                value={yourMessage}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full font-poppins bg-black/20 p-2 h-32 outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-2 text-primary border-t-2 border-b-2 border-primary py-1 font-poppins italic flex items-center justify-center"
            >
              {giftStay}
              <span className="ml-2">
                <FaChevronRight />
              </span>
            </button>
          </form>
        </div>
        <div className="w-[30rem] h-[25rem] hidden md:block -ml-48 lg:w-[40rem] lg:h-[30rem]">
          <img
            src={images[currentImage]}
            className="w-full h-full object-cover filter brightness-90"
            alt="Gift Card Image"
          />
        </div>
      </div>
      <div className="w-full hidden md:flex justify-center gap-3 mt-5">
        {images.map((item, index) => (
          <span
            key={index}
            className={`${
              index === currentImage ? "bg-primary scale-125" : "bg-white"
            } w-3 h-3 rounded-full duration-200`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default GiftSection;
