import React from "react";

const MinuteInput = ({ onClick, setCalendar }) => {
  const inputChangeHandler = (e) => {
    if (e.key === "Enter") {
      setCalendar(true);
      console.log(e.key);
      onClick(e.target.value);
    }
  };
  return (
    <div className="my-5 text-center  ">
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row px-4 py-2 justify-center">
          <p className="text-lg leading-6 mt-4  px-4 py-2 font-semibold ">
            Enter Meeting Duration {`min`}{" "}
          </p>
          <input
            type="text"
            onChange={(e) => onClick(e.target.value)}
            onKeyPress={inputChangeHandler}
            className=" text-center font-bold text-2xl text-gra w-full md:w-2/12 mt-4 px-1 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Minute"
          />
        </div>
      </div>
    </div>
  );
};

export default MinuteInput;
