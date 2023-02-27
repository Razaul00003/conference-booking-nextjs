import React from "react";
import Link from "next/link";
import LanguageDropdown from "./LangDropdown";

const MenuOptions = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        <Link href="/">
          <span className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </span>
        </Link>
        <Link href="/dev">
          <span className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Developments
          </span>
        </Link>
        <Link href="/conference">
          <span className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Conference
          </span>
        </Link>
        <Link href="/blog">
          <span className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Blogs
          </span>
        </Link>
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default MenuOptions;
