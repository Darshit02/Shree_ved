import React from 'react';
import { BiPhoneCall } from 'react-icons/bi'; // Import BiPhoneCall icon from react-icons

const PhoneNumber = ({ phoneNumber }) => {
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <a
        className="text-gray-600 hover:text-gray-800 flex gap-2 py-1 items-center md:justify-normal justify-center"
        onClick={handleCallClick} // Call handleCallClick function on click
        style={{ cursor: 'pointer' }} // Change cursor to pointer on hover
      >
        <BiPhoneCall /> {phoneNumber}
      </a>
    </>
  );
};

export default PhoneNumber;
