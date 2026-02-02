import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const TopBarNavigation = () => {
  const [isKlik, setIsKlik] = useState(false);

  const handleToggle = () => {
    setIsKlik((s) => !s);
  };

  return (
    <div className="flex justify-center my-5">
      <div className="bg-white text-black w-[65em] h-12 shadow-xl rounded-xl flex items-center justify-between px-6">
        <h1 className="font-semibold">Hello Muhammad Adil,</h1>
        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-1  border-2 border-gray-300 rounded-xl w-[10em] py-1   ">
            <FontAwesomeIcon icon={faSearch} className="text-gray-700 pl-2" />
            <h1 className="text-sm text-gray-700">Search</h1>
          </div>
          <div className="relative">
            <div
              className="border-gray-300 border-2 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
              onClick={handleToggle}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-700 text-xs"
              />
            </div>
            {isKlik && (
              <div className="absolute bg-white w-[15em] mt-4 right-0 shadow-lg rounded-lg flex  flex-col gap-2 ">
                <p className="p-2 ">Muhammad Adil</p>
                <p className="p-2">adil@ymail.com</p>
                <p className="p-2">User</p>
                <p className="p-2 text-red-600">Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarNavigation;
