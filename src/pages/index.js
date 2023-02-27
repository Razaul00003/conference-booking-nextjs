import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavMenu from "@/components/UI/NavMenu/NavMenu";
import Clock from "@/components/UI/MainContent/Clock";
import MinuteInput from "@/components/UI/MainContent/MinuteInput";
import CalendarComponent from "@/components/UI/MainContent/Calender";
import TimeSlot from "@/components/UI/MainContent/TimeSlot";
import Modal from "@/components/UI/Modal/Modal";
import { useState } from "react";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [min, setMin] = useState(null);
  const [date, setDate] = useState(null);
  const [dateAvailable, setDateAvailable] = useState(null);
  const [bookedFor, setBookedFor] = useState(null);
  const slotDate = new Date(Slots.schedule[0].start);
  const minInputHandler = (min) => {
    setMin(min);
  };
  const dateInputHandler = (dateInput) => {
    setDate(dateInput);
    if (date) {
      checkAvailibity();
    }
  };

  const checkAvailibity = () => {
    if (date) {
      const selectedDate = new Date(date);

      Slots.schedule.map((item, index) => {
        const slotDate = new Date(item.start);

        if (slotDate.getDate() == selectedDate?.getDate()) {
          setDateAvailable(item);
        }
      });
    }
  };

  const slotHandler = (info) => {
    if (info && date && min) {
      const data = {
        time: info,
        date: new Date(date),
        min,
      };
      setBookedFor(data);
    } else console.alert("Kindly, Fill all necessary Info!");
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        {/* header  menu */}
        <div className="circle circleBg rounded-full"></div>
        <NavMenu />
        <section className="w-full  md:w-8/12  bg-white  my-10 rounded-md p-3 mx-auto  border-2 border-gray-300 ">
          {/* show current time  */}
          <Clock />
          {/* input from user  */}
          <MinuteInput onClick={minInputHandler} />
          <section className="w-10/12 mx-auto">
            <div className=" flex flex-col lg:flex-row  justify-around">
              {/* main components  */}
              <div className="flex-1">
                <p className="text-white font-medium">Select Data</p>
                <div className="p-4">
                  <CalendarComponent onClick={dateInputHandler} />
                </div>
              </div>
              {/* select time slot */}
              <div className="flex-1">
                <p className="text-white font-medium">Select Time slot </p>
                <div className="my-auto p-4">
                  <div className="grid grid-rows-4 place-items-center grid-cols-3 content-center justify-center gap-2 ">
                    {[
                      "8:00 AM",
                      "9:00 AM",
                      "10:00 AM",
                      "11:00 AM",
                      "12:00 PM",
                      "13:00 PM",
                      "14:00 PM",
                      "15:00 PM",
                      "16:00 PM",
                      "17:00 PM",
                      "18:00 PM",
                      "19:00 PM",
                    ].map((slot, i) => (
                      <TimeSlot
                        onClick={slotHandler}
                        calendar={dateAvailable}
                        slot={slot}
                        key={i}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* text area  */}
          <div className=" flex justify-center mb-8">
            <textarea
              className="resize-none w-3/4 h-40 rounded-md p-2  border-2 border-gray-300"
              placeholder="Additional Details"
            ></textarea>
          </div>
          <div>
            <div className="text-right w-3/4 mx-auto ">
              <div className="  text-white w-1/12 ml-auto font-bold  rounded">
                {min && date && bookedFor ? (
                  <Modal info={bookedFor} />
                ) : (
                  <button
                    disabled
                    className="bg-gray-500 rounded-full px-4 py-2 text-white cursor-not-allowed"
                  >
                    Book
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
        <div className="circle circleBg2 rounded-full"></div>
      </main>
    </>
  );
}