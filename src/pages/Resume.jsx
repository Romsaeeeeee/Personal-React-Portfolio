import { Box, LinearProgress } from "@mui/material";
import React from "react";
import { FaLaptopCode, FaRegDotCircle } from "react-icons/fa";
import { IoBook } from "react-icons/io5";

const Resume = () => {
    const skills = [
        { name: 'HTML', value: 90 },
        { name: 'CSS', value: 80 },
        { name: 'JAVASCRIPT', value: 70 },
        { name: 'REACT JS', value: 70 },
        { name: 'GIT', value: 80 },
    ];
    return (
        <div className="h-full w-full flex flex-col justify-start items-start gap-14 p-10 text-white animate-fadeIn transition-all tablet:p-4">
            <div className="w-full flex flex-col justify-start items-start gap-7">
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-semibold">Resume</p>
                    <span className="w-10 border-b-[6px] border-yellow-200 rounded-md"></span>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-10">
                <div className="w-full h-auto flex justify-start items-start gap-10">
                    <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md shadow-md bg-[#373837] text-yellow-200">
                        <IoBook />
                    </span>
                    <p className="text-2xl font-semibold">Education</p>
                </div>
                <ul className="flex flex-col justify-start items-start gap-1 px-3">
                    <li className="flex justify-start items-center gap-[53px] font-semibold "><span className="text-yellow-200"><FaRegDotCircle /></span>Bulacan State University</li>
                    <li className="text-yellow-200 text-sm px-[69px]">2021 - Present</li>
                    <li className="text-sm px-[69px]">Bachelor of Science in Math with Specialization in Computer Science</li>
                </ul>
                <ul className="flex flex-col justify-start items-start gap-1 px-3">
                    <li className="flex justify-start items-center gap-[53px] font-semibold"><span className="text-yellow-200"><FaRegDotCircle /></span>MHPNHS (Senior High School)</li>
                    <li className="text-yellow-200 text-sm px-[69px]">2019 - 2021</li>
                    <li className="text-sm px-[69px]">Science Technology Engineering and Mathematics (Engineering)</li>
                </ul>
                <ul className="flex flex-col justify-start items-start gap-1 px-3">
                    <li className="flex justify-start items-center gap-[53px] font-semibold"><span className="text-yellow-200"><FaRegDotCircle /></span>MHPNHS (Junior High School)</li>
                    <li className="text-yellow-200 text-sm px-[69px]">2015 - 2019</li>
                </ul>
            </div>
            <div className="flex flex-col justify-start items-start gap-10">
                <div className="w-full h-auto flex justify-start items-start gap-10">
                    <span className="w-10 h-10 flex justify-center items-center text-2xl rounded-md shadow-md bg-[#373837] text-yellow-200">
                        <IoBook />
                    </span>
                    <p className="text-2xl font-semibold">Experience</p>
                </div>
                <ul className="flex flex-col justify-start items-start gap-1 px-3">
                    <li className="flex justify-start items-center gap-[53px] font-semibold"><span className="text-yellow-200"><FaRegDotCircle /></span>Bulacan State University</li>
                    <li className="text-yellow-200 text-sm px-[69px]">June (2024) - August (2024)</li>
                    <li className="text-sm px-[69px]">Front-End Web Developer (Intern)</li>
                </ul>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start gap-5 pb-10">
                <p className="text-2xl font-semibold">My Skills</p>
                <div className="h-full w-full flex flex-col justify-start items-start gap-5 bg-[#373837] p-5 rounded-lg">

                    {skills.map((skill, index) => (
                        <div key={index} className="w-full flex flex-col justify-start items-start gap-2">
                            <p>
                                {skill.name} <span className="opacity-50">{skill.value}%</span>
                            </p>
                            <Box sx={{ width: '100%', height: '100%', color: '#fef08a' }}>
                                <LinearProgress
                                    sx={{ height: '10px', borderRadius: '20px' }}
                                    variant="determinate"
                                    color="inherit"
                                    value={skill.value}
                                />
                            </Box>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resume;
