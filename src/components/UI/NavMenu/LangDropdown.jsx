import { useState } from "react";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("En");

  const languages = [
    {
      code: "En",
      name: "English",
    },
    {
      code: "Fr",
      name: "French",
    },
    {
      code: "Es",
      name: "Spanish",
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setCurrentLanguage(language.code);
    setIsOpen(false);
    // code to change language goes here
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange focus:ring-white sm:w-24 sm:rounded-full sm:px-2 sm:py-1"
          id="language-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <span className="hidden sm:block">{currentLanguage}</span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } origin-top-right absolute left-0 md:right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 sm:w-full`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="language-menu"
      >
        {languages.map((language) => (
          <button
            key={language.code}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 w-full text-left"
            role="menuitem"
            onClick={() => selectLanguage(language)}
          >
            {language.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;
