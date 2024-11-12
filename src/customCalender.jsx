import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './customCalender.css';
import './modalCalendar.css';
import './holiday.css';

const CustomCalender = () => {
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);



  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (date) => {
    console.log("Entered")
   
    setHovered(true); 
  };

  const handleMouseLeave = () => {
    console.log("Left")
    
    setHovered(false);
  };







  const holidays = {
    festival: ['2024-12-25', '2024-11-14'],
    restricted: ['2024-11-01', '2024-11-15'],
  };

  const onDateClick = (selectedDate) => {
    setDate(selectedDate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to check if a date is a festival or restricted holiday
  const checkHoliday = (date) => {
    const dateString = date.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD'
    
    if (holidays.festival.includes(dateString)) {
      return 'festival'; // Custom class for festival dates
    } else if (holidays.restricted.includes(dateString)) {
      return 'restricted'; // Custom class for restricted dates
    }
    return null; // No special class for other dates
  };

  return (
    <div className="calendar-container dark">
      <Calendar
        onClickDay={onDateClick}
        tileClassName={({ date }) => checkHoliday(date)}
        // value={date}

        onMouseEnter={handleMouseEnter} // When mouse enters a date
        onMouseLeave={handleMouseLeave} // When mouse leaves a date
        tileContent={() => {
          // Optionally add custom content to each tile (date)
          if (hovered==true) {
            console.log("hi")
            return <div style={{ color: 'red' }}>Hovered!</div>; // Display message on hover
          }
        }}
      />


      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Selected Date</h2>
            <p>{date.toDateString()}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCalender;
