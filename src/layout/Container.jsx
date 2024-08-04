import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import SidePanel from "../pages/SidePanel";


const Container = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center gap-10 p-7 bg-[#101110] tablet:flex-col overflow-auto tablet:h-max">
            <div className="w-[20%] h-full overflow-auto bg-[#232423] rounded-xl shadow-[#101110] shadow-2xl border-[#373837] border tablet:w-full tablet:overflow-hidden">
                <SidePanel />
            </div>
            <div className="w-[75%] h-full bg-[#232423] rounded-xl shadow-[#101110] shadow-2xl border-[#373837] border overflow-auto tablet:w-full tablet:h-screen">
                <div className="w-full flex justify-end items-end tablet:sticky">
                    <Topbar />
                </div>
                <div className="h-full w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Container;
