import { AiFillInstagram } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineLocationOn,
  MdOutlineMail,
} from "react-icons/md";
import Profile from "../assets/IMG_20200808_195723_565.jpg";
import { useState } from "react";

const SidePanel = () => {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <div className="w-full text-white flex flex-col justify-start items-center px-5 py-10 gap-10 relative">
      <div className="w-36 h-36 flex items-center justify-center rounded-2xl bg-[#373837] shadow-xl">
        <img src={Profile} alt="profile" className="rounded-2xl" />
      </div>
      <div
        className={`${hide == true ? "border-none" : "border-b-2 border-[#373837] w-full"
          } h-1/6 flex flex-col justify-start items-center gap-4  py-2`}
      >
        <p className="text-2xl">Jaycee Bautista</p>
        <p className="bg-[#373837] p-1.5 rounded-md text-sm">
          Front-End Developer
        </p>
      </div>
      <button
        onClick={handleClick}
        className="tablet:block tablet:bg-[#373837] tablet:p-4 tablet:rounded-full tablet:absolute tablet:top-5 tablet:right-5 tablet:text-3xl hidden"
      >
        {hide == true ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </button>
      <div
        className={`${hide == true
          ? "hidden h-fit"
          : "w-full h-1/2 flex flex-col justify-center items-center gap-10"
          }`}
      >
        <div className="w-full flex justify-start items-center gap-3">
          <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md shadow-md bg-[#373837] text-yellow-500">
            <MdOutlineMail />
          </span>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-sm font-semibold">EMAIL</p>
            <p className="text-xs font-light">jbautista0929@gmail.com</p>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md shadow-md bg-[#373837] text-yellow-500">
            <IoPhonePortraitOutline />
          </span>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-sm font-semibold">PHONE</p>
            <p className="text-xs font-light">+63 912-391-9789</p>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md shadow-md bg-[#373837] text-yellow-500">
            <BsCalendarDate />
          </span>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-sm font-semibold">BIRTHDAY</p>
            <p className="text-xs font-light">September 29, 2003</p>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md shadow-md bg-[#373837] text-yellow-500">
            <MdOutlineLocationOn />
          </span>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-sm font-semibold">LOCATION</p>
            <p className="text-xs font-light">
              Malolos City, Bulacan, Philippines
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${hide == true
          ? "hidden"
          : "w-full h-fit flex justify-center items-center gap-5 text-2xl"
          } `}
      >
        <a
          href=""
          className="hover:text-yellow-500 transition-all duration-300"
        >
          <FaFacebook />
        </a>
        <a
          className="text-3xl hover:text-yellow-500 transition-all duration-300"
          href=""
        >
          <AiFillInstagram />
        </a>
        <a
          href=""
          className="hover:text-yellow-500 transition-all duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SidePanel;
