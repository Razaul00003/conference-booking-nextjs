import React from "react";
import Link from "next/link";
import LanguageDropdown from "./LangDropdown";

const MenuOptionsMobile = () => {
  return (
    <div className="px-2 pt-2 pb-3 space-y-10">
      <Link href="/">
        <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          Home
        </span>
      </Link>
      <Link href="/dev">
        <span className="text-gray-1000 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          Developements
        </span>
      </Link>
      <Link href="/conference">
        <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          Conference
        </span>
      </Link>
      <Link href="/blog">
        <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          Blog
        </span>
      </Link>
      <LanguageDropdown />
    </div>
  );
};

export default MenuOptionsMobile;
