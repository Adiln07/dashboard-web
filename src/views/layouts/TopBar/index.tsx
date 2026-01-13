import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TopBarNavigation = () => {
  return (
    <div className="flex justify-center my-5">
      <div className="bg-white text-black w-[65em] h-12 shadow-xl rounded-xl flex items-center justify-between px-6">
        <h1 className="font-semibold">Hello Muhammad Adil,</h1>
        <div>
          <div className="flex items-center gap-1  border-2 border-gray-300 rounded-xl w-[10em] py-1   ">
            <FontAwesomeIcon icon={faSearch} className="text-gray-700 pl-2" />
            <h1 className="text-sm text-gray-700">Search</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarNavigation;
