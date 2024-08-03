import React from "react";

const Portfolio = () => {
    return (
        <div className="h-full w-full flex flex-col justify-start items-center gap-14 p-5 text-white animate-fadeIn transition-all">
            <div className="w-full flex flex-col justify-start items-start gap-7">
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-semibold">Portfolio</p>
                    <span className="w-10 border-b-[6px] border-yellow-200 rounded-md"></span>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
