import { info } from "autoprefixer";
import { useState } from "react";
import { MdDone } from "react-icons/md";

function Modal({ info }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded-full text-center"
        onClick={toggleModal}
      >
        Book
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto rounded-md p-10">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className=" text-center text-gray-700 flex-col items-center p-5">
                <span className="inline-block  border-2 border-green-500 rounded-full p-1">
                  <MdDone className="text-2xl text-green-500" />
                </span>
                <div>
                  <p className="text-3xl p-3 font-bold">Great!</p>
                  <p className="p-3 text-orange-500 font-bold">
                    {" "}
                    Your Booking Time
                  </p>
                  <p>
                    Date : {info.date.getDate()}/{info.date.getMonth() + 1}/
                    {info.date.getFullYear()}
                  </p>
                  <p>Time : {info.time}</p>
                  <p className="py-2">Duration: {info.min} Minutes</p>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={toggleModal}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
