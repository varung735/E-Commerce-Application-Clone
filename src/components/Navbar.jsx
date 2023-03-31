import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { allListItems } from "../data";
import { ArrowDropDown } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [showList, setShowList] = useState(false);
  const [extendNavbar, setExtendNavbar] = useState(false);
  //console.log(showList);

  return (
    <div className="w-full sticky top-0 z-50 bg-[#111111] ">
      <nav className="max-w-7xl mx-auto py-6 flex justify-between lg:justify-center items-center  gap-4">
        <h1 className=" text-2xl md:text-3xl text-gray-300 font-roboto px-6x lg:px-14 ml-2 cursor-pointer ">
          ClickTo<span className="text-green-500">Cart</span>
        </h1>

        <div className="h-10 hidden relative  rounded-md xl:flex flex-grow items-center  bg-gray-100 text-black cursor-pointer  ">
          <span
            onClick={() => setShowList(!showList)}
            className="px-1 hidden lg:flex "
          >
            All{" "}
            <span>
              <ArrowDropDown />
            </span>
          </span>

          {showList && (
            <div className=" absolute top-10 w-56 h-80 overflow-y-scroll left-0  bg-gray-100 z-50 p-2 rounded-md ">
              <ul className="text-sm font-roboto  ">
                {allListItems.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="hover:bg-gray-200 cursor-pointer"
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <input
            className="h-full  lg:inline-flex flex-grow border-none outline-none px-2 text-black cursor-pointer  "
            type="text"
          />
          <span className="w-12 bg-green-500 hover:bg-green-400 h-full flex items-center justify-center rounded-tr-md rounded-br-md cursor-pointer">
            <SearchIcon />
          </span>
        </div>

        <div
          className={`lg:static  w-full lg:w-auto min-h-[20vh]  lg:min-h-fit absolute  left-0  transition-all ease-in duration-500 z-[-1] lg:z-auto bg-[#111111] ${
            extendNavbar ? "top-20" : "top-[-135%]"
          } `}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 ml-8">
            <Link
              to="/"
              className="cursor-pointer text-gray-300 hover:text-white active:text-green-500  duration-300  "
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="cursor-pointer  text-gray-300 hover:text-white active:text-green-500  duration-300  "
            >
              Categories
            </Link>
            <Link
              to="/products"
              className="cursor-pointer  text-gray-300 hover:text-white active:text-green-500  duration-300  "
            >
              Products
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <Link className="px-6 cursor-pointer">
            <LocalMallRoundedIcon />
          </Link>
          <Link
            onClick={() => {
              setExtendNavbar((open) => !open);
            }}
            className="text-3xl cursor-pointer lg:hidden mr-2"
          >
            {extendNavbar ? <CloseIcon /> : <MenuIcon />}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
