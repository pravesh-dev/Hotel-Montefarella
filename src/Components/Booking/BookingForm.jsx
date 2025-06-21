import React, { useEffect, useState } from "react";
import { setBookingDetails } from "../../Redux/bookingActions";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookingForm() {
  const bookingDetails = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  // Utility to parse dates like "December 10th, 2024"
  const parseFormattedDate = (dateString) => {
    if (!dateString) return ""; // Handle empty date
    const regex = /(\w+)\s+(\d+)(?:st|nd|rd|th)?,\s+(\d{4})/;
    const match = dateString.match(regex);
    if (match) {
      const [, month, day, year] = match;
      const formattedDate = new Date(`${month} ${day}, ${year}`);
  
      // Convert the date to local time by removing the UTC offset
      formattedDate.setMinutes(formattedDate.getMinutes() - formattedDate.getTimezoneOffset());
  
      return formattedDate.toISOString().split("T")[0]; // Return the local date without time
    }
    return "";
  };
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState(
    parseFormattedDate(bookingDetails.checkIn)
  );
  const [checkOutDate, setCheckOutDate] = useState(
    parseFormattedDate(bookingDetails.checkOut)
  );
  const [totalNight, setTotalNight] = useState(bookingDetails.totalNights);
  const [guest, setGuest] = useState(bookingDetails.guestCount);
  const [totalCost, setTotalCost] = useState(0); // Added state for total cost
  const [discountCost, setDiscountCost] = useState(0); // Added state for total cost

  // Function to format the date to "December 10th, 2024"
  const formatDate = (dateString) => {
    if (!dateString) return ""; // Handle empty date
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

    // Add suffix for the day (st, nd, rd, th)
    const day = date.getDate();
    const daySuffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    return formattedDate.replace(
      `${day}`,
      `${day}${daySuffix}` // Add suffix to the day
    );
  };

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
    dispatch(
      setBookingDetails({
        checkIn: formatDate(e.target.value),
        checkOut: formatDate(checkOutDate),
        totalNights: totalNight,
        guestCount: guest,
      })
    );
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
    dispatch(
      setBookingDetails({
        checkIn: formatDate(checkInDate),
        checkOut: formatDate(e.target.value),
        totalNights: totalNight,
        guestCount: guest,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !checkInDate || !checkOutDate || !guest) {
      toast.error("Please fill out all required fields!");
      return;
    }

    if (guest < 1) {
      toast.error("Guest count must be atleast 1.");
      return;
    }
    if (guest > 5) {
      toast.error("Guest count must be smaller than 5.");
      return;
    }

    const data = { name, email, checkInDate, checkOutDate, totalNight, guest };

    try {
      const response = await fetch("backend.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit booking form.");
      }
      
      const result = await response.json();
      console.log(result);

      toast.success("Booking reserved successfully!");

      setName("");
      setEmail("");
      setCheckInDate("");
      setCheckOutDate("");
      setTotalNight("");
      setGuest("");
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Failed to reserve booking. Please try again.");
    }
  };

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      if (!isNaN(checkIn.getTime()) && !isNaN(checkOut.getTime())) {
        const timeDifference = checkOut.getTime() - checkIn.getTime();
        const totalNights = timeDifference / (1000 * 3600 * 24);
        setTotalNight(totalNights);

        // Calculate total cost
        const costPerNight = 200; // One night is for 200 uro
        const discount = 0.1; // 10% discount
        const totalCost = (costPerNight * totalNights)
        const discountCost = (costPerNight * totalNights) * (1 - discount);
        setTotalCost(totalCost.toFixed(2)); // Update total cost state
        setDiscountCost(discountCost.toFixed(2)); // Update total cost state

        dispatch(
          setBookingDetails({
            checkIn: formatDate(checkInDate),
            checkOut: formatDate(checkOutDate),
            totalNights: totalNights,
            guestCount: guest,
          })
        );
      } else {
        setTotalNight(totalNight);
      }
    }
  }, [checkInDate, checkOutDate, guest]);
  return (
    <form
      className="bg-[#2c2b2a] w-full py-3 px-2 text-white md:w-80 lg:w-[28rem] lg:py-7 lg:px-14"
      onSubmit={handleSubmit}
    >
      <ToastContainer />
      <h1 className="font-bellefair text-2xl lg:text-4xl">Reserve :</h1>
      <label
        htmlFor="nameInput"
        className="font-bellefair text-xl mt-5 mb-2 inline-block"
      >
        Name
      </label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full h-10 pl-2 font-poppins text-primary border-none outline-none bg-[#3D3C3C]"
      />
      <label
        htmlFor="emailInput"
        className="font-bellefair text-xl mt-5 mb-2 inline-block"
      >
        Email
      </label>
      <input
        id="emailInput"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-10 pl-2 font-poppins text-primary border-none outline-none bg-[#3D3C3C]"
      />
      <label
        htmlFor="checkInInput"
        className="font-bellefair text-xl mt-5 mb-2 inline-block"
      >
        Check In
      </label>
      <div className="w-full h-10 px-2 bg-[#3d3c3c] flex cursor-pointer">
        <p
          id="checkInInput"
          className="w-[80%] h-10 pl-2 font-poppins text-primary border-none outline-none bg-transparent flex items-center"
        >
          {checkInDate ? formatDate(checkInDate) : "Select Date"}
        </p>
        <input
          type="date"
          id="checkIn"
          className="w-5 bg-transparent text-primary cursor-pointer"
          value={checkInDate}
          onChange={handleCheckInDateChange}
        />
      </div>
      <label
        htmlFor="checkOut"
        className="font-bellefair text-xl mt-5 mb-2 inline-block"
      >
        Check Out
      </label>
      <div className="w-full h-10 px-2 bg-[#3d3c3c] flex cursor-pointer">
        <p
          id="checkOutInput"
          className="w-[80%] h-10 pl-2 font-poppins text-primary border-none outline-none bg-transparent flex items-center"
        >
          {checkOutDate ? formatDate(checkOutDate) : "Select Date"}
        </p>
        <input
          type="date"
          id="checkOut"
          className="w-5 bg-transparent text-primary cursor-pointer"
          value={checkOutDate}
          onChange={handleCheckOutDateChange}
        />
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-[45%]">
          <label htmlFor="nameInput" className="font-bellefair text-xl mb-2">
            Total night
          </label>
          <input
            type="text"
            readOnly
            value={totalNight}
            className="w-full h-10 pl-2 font-poppins text-primary border-none outline-none bg-[#3D3C3C]"
          />
        </div>
        <div className="w-[45%]">
          <label htmlFor="nameInput" className="font-bellefair text-xl mb-2">
            Guest
          </label>
          <input
            id="nameInput"
            type="number"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            className="w-full h-10 pl-2 font-poppins text-primary border-none outline-none bg-[#3D3C3C]"
          />
        </div>
      </div>
      <p className="text-center text-white/70 font-bellefair text-2xl my-8">
        &euro;{totalCost} - 10% Discount
      </p>
      <p className="font-bellefair text-3xl text-center">
        Total Cost: <span className="text-primary ml-3">&euro;{discountCost}</span>
      </p>
      <button
        type="submit"
        className="w-full font-poppins capitalize italic text-primary border-t-2 border-b-2 border-primary text-sm py-1 px-7 my-5 lg:my-7 lg:text-xl lg:py-2"
      >
        Reserve your stay ›
      </button>
    </form>
  );
}

export default BookingForm;
