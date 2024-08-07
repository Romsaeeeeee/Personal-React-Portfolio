import { Box, LinearProgress } from "@mui/material";
import React from "react";
import { FaLaptopCode, FaRegDotCircle } from "react-icons/fa";
import { IoBook } from "react-icons/io5";

const Resume = () => {
    return (
        <div className="h-full w-full flex flex-col justify-start items-start gap-8 p-10 text-white animate-fadeIn transition-all">
            <div className="w-full flex flex-col justify-start items-start gap-7">
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-semibold">Resume</p>
                    <span className="w-10 border-b-[6px] border-yellow-200 rounded-md"></span>
                </div>
            </div>
            <div className="w-full h-auto flex justify-start items-start gap-10">
                <div className="flex flex-col justify-start items-start">
                    <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md shadow-md bg-[#373837] text-yellow-200">
                        <IoBook />
                    </span>
                    <div className="w-full flex flex-col">
                        <span className="h-7 w-1/2 border-r-2 border-[#373837]"></span>
                        <span className="w-full flex justify-center items-center text-sm text-yellow-200"><FaRegDotCircle /></span>
                    </div>
                    <div className="w-full flex flex-col">
                        <span className="h-[90px] w-1/2 border-r-2 border-[#373837]"></span>
                        <span className="w-full flex justify-center items-center text-sm text-yellow-200"><FaRegDotCircle /></span>
                    </div>
                    <div className="w-full flex flex-col">
                        <span className="h-[90px] w-1/2 border-r-2 border-[#373837]"></span>
                        <span className="w-full flex justify-center items-center text-sm text-yellow-200"><FaRegDotCircle /></span>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-8">
                    <p className="text-2xl font-semibold">Education</p>
                    <div className="flex flex-col justify-start items-start gap-1">
                        <p className="font-semibold">Bulacan State University</p>
                        <p className="text-yellow-200 text-sm">2021 - Present</p>
                        <p className="text-sm">Bachelor of Science in Math with Specialization in Computer Science</p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                        <p className="font-semibold">Marcelo H. del Pilar National High School (Senior High School)</p>
                        <p className="text-yellow-200 text-sm">2019 - 2021</p>
                        <p className="text-sm">Science Technology Engineering and Mathematics (Engineering)</p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                        <p className="font-semibold">Marcelo H. del Pilar National High School (Junior High School)</p>
                        <p className="text-yellow-200 text-sm">2015 - 2019</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex justify-start items-start gap-10">
                <div className="flex flex-col justify-start items-start">
                    <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md shadow-md bg-[#373837] text-yellow-200">
                        <FaLaptopCode />
                    </span>
                    <div className="w-full flex flex-col">
                        <span className="h-7 w-1/2 border-r-2 border-[#373837]"></span>
                        <span className="w-full flex justify-center items-center text-sm text-yellow-200"><FaRegDotCircle /></span>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-8">
                    <p className="text-2xl font-semibold">Experience</p>
                    <div className="flex flex-col justify-start items-start gap-1">
                        <p className="font-semibold">Nexbridge Technologies Inc.</p>
                        <p className="text-yellow-200 text-sm">2024</p>
                        <p className="text-sm">Front-End Web Developer (Intern)</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit flex flex-col justify-start items-start gap-5 pb-5">
                <p className="text-2xl font-semibold">My Skills</p>
                <div className="h-full w-full flex flex-col justify-start items-start gap-5 bg-[#373837] p-5 rounded-lg">
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <p>HTML <span className="opacity-50"> 90%</span></p>
                        <Box sx={{ width: '100%', height: '100%', color: '#fef08a' }}>
                            <LinearProgress sx={{ height: '10px', borderRadius: '20px', }} variant="determinate" color="inherit" value={90} />
                        </Box>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <p>CSS <span className="opacity-50"> 80%</span></p>
                        <Box sx={{ width: '100%', height: '100%', color: '#fef08a' }}>
                            <LinearProgress sx={{ height: '10px', borderRadius: '20px', }} variant="determinate" color="inherit" value={80} />
                        </Box>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <p>JAVASCRIPT <span className="opacity-50"> 70%</span></p>
                        <Box sx={{ width: '100%', height: '100%', color: '#fef08a' }}>
                            <LinearProgress sx={{ height: '10px', borderRadius: '20px', }} variant="determinate" color="inherit" value={70} />
                        </Box>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <p>REACT JS <span className="opacity-50"> 70%</span></p>
                        <Box sx={{ width: '100%', height: '100%', color: '#fef08a' }}>
                            <LinearProgress sx={{ height: '10px', borderRadius: '20px', }} variant="determinate" color="inherit" value={70} />
                        </Box>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                        <p>GIT <span className="opacity-50"> 80%</span></p>
                        <Box sx={{ width: '100%', height: '100%', color: '#fef08a' }}>
                            <LinearProgress sx={{ height: '10px', borderRadius: '20px', }} variant="determinate" color="inherit" value={80} />
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
