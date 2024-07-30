import { AiFillInstagram } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const SidePanel = () => {
  return (
    <div className="h-full w-full text-white flex flex-col justify-start items-center px-5 py-10 gap-5">
      <div className="w-36 h-36 flex items-center justify-center rounded-2xl bg-[#373837] shadow-xl">
        IMAGE
      </div>
      <div className="w-full h-1/6 flex flex-col justify-start items-center gap-4 border-b-2 border-[#373837]">
        <p className="text-2xl">Jaycee Bautista</p>
        <p className="bg-[#373837] p-1.5 rounded-md text-sm">Position</p>
      </div>
      <div className="w-full h-1/2 flex flex-col justify-center items-center gap-10">
        <div className="w-full flex justify-start items-center gap-3">
          <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md drop-shadow-2xl bg-[#373837] text-yellow-500">
            <MdOutlineMail />
          </span>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-sm font-semibold">EMAIL</p>
            <p className="text-xs font-light">jayceebautista0929@gmail.com</p>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md drop-shadow-2xl bg-[#373837] text-yellow-500">
            <IoPhonePortraitOutline />
          </span>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-sm font-semibold">PHONE</p>
            <p className="text-xs font-light">+63 912-391-9789</p>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md drop-shadow-2xl bg-[#373837] text-yellow-500">
            <BsCalendarDate />
          </span>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-sm font-semibold">BIRTHDAY</p>
            <p className="text-xs font-light">September 29, 2003</p>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md drop-shadow-2xl bg-[#373837] text-yellow-500">
            <CiLocationOn />
          </span>
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="text-sm font-semibold">LOCATION</p>
            <p className="text-xs font-light">
              Malolos City, Bulacan, Philippines
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-5 text-2xl">
        <a href="">
          <FaFacebook />
        </a>
        <a className="text-3xl" href="">
          <AiFillInstagram />
        </a>
        <a href="">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SidePanel;
