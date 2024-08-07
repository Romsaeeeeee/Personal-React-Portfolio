import { IoIosSend } from "react-icons/io";

const Contact = () => {

    return (
        <div className="h-full w-full flex flex-col justify-start items-center gap-14 p-10 text-white animate-fadeIn transition-all">
            <div className="w-full flex flex-col justify-start items-start gap-7">
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-semibold">Contact</p>
                    <span className="w-10 border-b-[6px] border-yellow-200 rounded-md"></span>
                </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-10">
                <p className="text-2xl font-semibold">Contact Form</p>
                <div className="w-full flex justify-start items-start gap-10 tablet:flex-col">
                    <div className="w-full flex flex-col justify-start items-start gap-2 text-white">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your Full Name" className="w-full h-12  p-2 bg-transparent border-b-2 outline-none border-[#373837] text-sm font-light  transition-all" />
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-2 text-white">
                        <label>Email Adress</label>
                        <input type="email" placeholder="Enter your Email Adress" className="w-full h-12  p-2 bg-transparent border-b-2 outline-none border-[#373837] text-sm font-light   transition-all" />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2 text-white">
                    <label>Message</label>
                    <textarea placeholder="Enter your Message...." className="w-full max-h-40 min-h-40  p-2 bg-transparent rounded-md border-2 outline-none border-[#373837] text-sm font-light   transition-all overflow-visible" />
                </div>
            </div>
            <div className="w-full h-20 flex justify-end items-center tablet:justify-center pb-10">
                <button className="w-1/6 h-12 flex justify-center items-center gap-1 rounded-md bg-[#373837] hover:text-yellow-200 transition hover:border-2 hover:border-white hover:bg-transparent tablet:w-1/2 tablet:text-xs "><span><IoIosSend /></span>  Send Message</button>
            </div>
        </div>
    );
};

export default Contact;
