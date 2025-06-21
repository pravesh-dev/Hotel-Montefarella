import React, { useEffect, useState } from 'react'
import bookingImg1 from '../../assets/Booking_page_imgs/booking_img1.jpg';
import bookingImg2 from '../../assets/Booking_page_imgs/booking_img2.jpg';
import bookingImg3 from '../../assets/Booking_page_imgs/booking_img3.jpg';
import bookingImg4 from '../../assets/Booking_page_imgs/booking_img4.jpg';

function BookingHero() {
    const [currentImage, setCurrentImage] = useState(0);
  const images = [bookingImg1, bookingImg2, bookingImg3, bookingImg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className='w-full h-96 relative lg:h-96'>
        <img src={images[currentImage]} className="w-full h-full object-cover" alt="background images" />
    <div className="flex justify-center gap-3 mt-5 absolute bottom-3 left-1/2 -translate-x-1/2">
      {
          images.map((item, index)=>{
              return (
                  <span key={index} className={`${index === currentImage ? 'bg-primary scale-125' : 'bg-white'} w-3 h-3 rounded-full duration-200`}></span>
                )
        })
    }
      </div>
    </div>
  )
}

export default BookingHero
