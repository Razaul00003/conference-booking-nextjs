import React, { useState } from "react";
const Slots = {
  "schedule": [
    {
      "start": "2023-02-26T02:00:00.020Z",
      "end": "2023-02-26T13:00:00.020Z",
    },
    {
      "start": "2023-02-27T05:00:00.020Z",
      "end": "2023-02-27T16:00:00.020Z",
    },
    {
      "start": "2023-02-28T02:00:00.020Z",
      "end": "2023-02-28T09:00:00.020Z",
    },
    {
      "start": "2023-03-02T02:00:00.020Z",
      "end": "2023-03-02T09:00:00.020Z",
    },
  ],
};

const TimeSlot = ({ slot, calendar, onClick }) => {
  const dataFromProp = Number(slot.split(":")[0]);

  const dateStart = new Date(calendar?.start);
  const dateEnd = new Date(calendar?.end);
  const day = dateStart.getDate();
  const hourStart = dateStart.getHours();
  const hourEnd = dateEnd.getHours();
  const array = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const available = array.filter((i) => i >= hourStart && i <= hourEnd);

  const slotSeletionHandler = (e) => {
    onClick(e.target.value);
  };
  return (
    <div className="">
      <button
        onClick={slotSeletionHandler}
        value={
          slot.split(":")[0] > 12
            ? slot.split(":")[0] - 12 + ":00" + " PM"
            : slot.split(":")[0] + ":00" + " AM"
        }
        className={` ${
          available.includes(dataFromProp)
            ? " bg-white mb-0 text-sm  md:mb-2  py-1 px-1 md:py-2  border rounded-full"
            : "cursor-not-allowed  bg-gray-100    mb-0 text-sm  md:mb-2  py-1 px-1 md:py-2  border rounded-full"
        }`}
      >
        {slot.split(":")[0] > 12
          ? slot.split(":")[0] - 12 + ":00" + " PM"
          : slot.split(":")[0] + ":00" + " AM"}
      </button>
    </div>
  );
};

export default TimeSlot;
