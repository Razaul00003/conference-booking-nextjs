import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComponent({ onClick }) {
  const [date, setDate] = useState(new Date());

  function onChange(newDate) {
    setDate(newDate);
    onClick(date);
  }

  return (
    <div className="bg-white flex justify-center rounded-lg   p-2">
      <Calendar
        onChange={onChange}
        value={date}
        className="  bg-[#14100f] text-[#F25A2C]  rounded-lg "
      />
    </div>
  );
}

export default CalendarComponent;
