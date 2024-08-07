import React from "react";
import CardProjects from "../modal/CardProjects";

const Portfolio = () => {
    return (
        <div className="h-full w-full flex flex-col justify-start items-center gap-14 p-10 text-white animate-fadeIn transition-all">
            <div className="w-full h-1/6 flex flex-col justify-start items-start gap-7">
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-semibold">Projects</p>
                    <span className="w-10 border-b-[6px] border-yellow-200 rounded-md"></span>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-start gap-5 tablet:flex-col tablet:items-center tablet:h-96">
                <CardProjects
                    label='Project 1'
                />
                <CardProjects
                    label='Project 2'
                />
            </div>
            <div className="w-full h-full flex justify-center items-start gap-5 tablet:flex-col tablet:items-center tablet:h-96">
                <CardProjects
                    label='Project 3'
                />
                <CardProjects
                    label='Project 4'
                />
            </div>
        </div>
    );
};

export default Portfolio;
