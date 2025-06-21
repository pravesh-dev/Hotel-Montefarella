import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBookingDetails } from "../../Redux/bookingActions";

import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format, differenceInDays } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

// Reusable DateField Component
function DateField({ label, selectedDate, setSelectedDate, placeholder }) {
  const handleDateChange = (value) => {
    if (value) {
      setSelectedDate(new Date(value));
    } else {
      setSelectedDate(undefined);
    }
  };

  return (
    <div className="mt-4 lg:mt-8">
      <h2 className="font-bellefair text-base lg:text-xl">{label}</h2>
      <Popover placement="bottom" disablePortal={false}>
        <PopoverHandler>
          {/* Set input to readonly to block typing */}
          <Input
            value={selectedDate ? format(selectedDate, "PPP") : ""}
            onChange={(e) => handleDateChange(e.target.value)}
            className="font-poppins py-1 text-primary placeholder:text-primary border-none outline-none"
            style={{ background: "#3e3c3d" }}
            placeholder={placeholder}
            readOnly // This will prevent typing into the input field
          />
        </PopoverHandler>
        <PopoverContent>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            showOutsideDays
            className="border-0 p-1"
            classNames={{
              caption: "flex justify-center py-2 mb-4 relative items-center",
              caption_label: "text-sm font-medium text-gray-900",
              nav: "flex items-center",
              nav_button:
                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
              nav_button_previous: "absolute left-1.5",
              nav_button_next: "absolute right-1.5",
              table: "w-full border-collapse",
              head_row: "flex font-medium text-gray-900",
              head_cell: "m-0.5 w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal",
              day_selected:
                "rounded-md bg-gray-900 text-white hover:bg-gray-900 focus:bg-gray-900",
              day_today: "rounded-md bg-gray-200 text-gray-900",
              day_outside: "text-gray-500 opacity-50",
              day_disabled: "text-gray-500 opacity-50",
              day_hidden: "invisible",
            }}
            components={{
              IconLeft: ({ ...props }) => (
                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
              ),
              IconRight: ({ ...props }) => (
                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
              ),
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function HotelBook() {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [totalNights, setTotalNights] = useState(0);
  const [guestCount, setGuestCount] = useState("");
  const navigate = useNavigate();

  const translations = {
    english: {
      checkIn: "Check In",
      checkOut: "Check Out",
      room: "Total Nights",
      guest: "Guest",
      reserveStay: "Reserve Your Stay ›",
    },
    italy: {
      checkIn: "Check In",
      checkOut: "Check Out",
      room: "Camera",
      guest: "Ospite",
      reserveStay: "Prenota il tuo soggiorno ›",
    },
  };

  const { checkIn, checkOut, room, guest, reserveStay } =
    translations[language] || translations.english;

  React.useEffect(() => {
    if (checkInDate && checkOutDate) {
      const nights = differenceInDays(checkOutDate, checkInDate);
      setTotalNights(nights > 0 ? nights : 0);
    } else {
      setTotalNights(0);
    }
  }, [checkInDate, checkOutDate]);

  const handleReserve = () => {
    if (checkInDate && checkOutDate && totalNights > 0 && guestCount) {
      const bookingDetails = {
        checkIn: format(checkInDate, "PPP"),
        checkOut: format(checkOutDate, "PPP"),
        totalNights,
        guestCount,
      };
  
      // Dispatch the action to save the booking details in Redux
      dispatch(setBookingDetails(bookingDetails));
  
      // Navigate to the booking page (this will now pull the data from Redux)
      navigate("/booking");
    }
  };

  return (
    <div className="w-64 bg-[#2e2b2c] p-5 absolute left-1/2 -bottom-48 -translate-x-1/2 text-white md:left-[60%] md:translate-x-0 lg:w-80 lg:p-10 lg:left-[68%]">
      {/* Check-In Date */}
      <DateField
        label={checkIn}
        selectedDate={checkInDate}
        setSelectedDate={setCheckInDate}
        placeholder="Select a date"
      />

      {/* Check-Out Date */}
      <DateField
        label={checkOut}
        selectedDate={checkOutDate}
        setSelectedDate={setCheckOutDate}
        placeholder="Select a date"
      />

      {/* Room and Guest Section */}
      <div className="flex justify-between mt-4 lg:mt-8">
        <div>
          <h2 className="font-bellefair text-base lg:text-xl">{room}</h2>
          <p className="bg-[#3e3c3d] text-primary font-poppins w-20 h-8 text-center placeholder:text-primary border-none outline-none">
            {totalNights > 0 ? totalNights : "--"}
          </p>
        </div>
        <div>
          <h2 className="font-bellefair text-base lg:text-xl">{guest}</h2>
          <input
            type="number"
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
            className="bg-[#3e3c3d] text-primary font-poppins w-20 h-8 text-center placeholder:text-primary border-none outline-none"
            placeholder="Count"
          />
        </div>
      </div>

      {/* Reserve Button */}
      <button
        onClick={handleReserve}
        className="font-serif italic text-primary text-sm lg:text-base mt-6 lg:mt-10 w-full text-center"
      >
        {reserveStay}
      </button>
    </div>
  );
}

export default HotelBook;
