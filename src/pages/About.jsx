import { FaCss3Alt, FaHtml5, FaReact, FaRegKeyboard } from "react-icons/fa";
import CardSkills from "../modal/CardSkills"
import { IoLogoJavascript } from "react-icons/io5";
import { FaBasketball, FaSquareGit } from "react-icons/fa6";
import { CgGames } from "react-icons/cg";



const About = () => {

    const skills = [
        {
            label: "HTML", icon: <FaHtml5 />
            , description: "HTML (HyperText Markup Language) is the standard language for creating web pages, structuring content with tags and elements."
        },
        {
            label: "CSS", icon: <FaCss3Alt />
            , description: "CSS (Cascading Style Sheets) is used to style and layout web pages, controlling the design and appearance of HTML elements."
        },
        {
            label: "JAVASCRIPT", icon: <IoLogoJavascript />
            , description: "JavaScript is a programming language used to create dynamic and interactive effects on web pages, enhancing user experience."
        },
        {
            label: "REACT JS", icon: <FaReact />,
            description: "React JS is a JavaScript library for building user interfaces, particularly single-page applications, by creating reusable UI components."
        },
        {
            label: "GIT", icon: <FaSquareGit />,
            description: "Git is a version control system that allows developers to track changes, collaborate, and manage code across different versions and branches."
        },
    ]

    const firstSlice = skills.slice(0, 2);
    const secondSlice = skills.slice(2, 4);
    const thirdSlice = skills.slice(4, 5);


    return (
        <div className="h-full w-full flex flex-col justify-start items-center gap-14 p-5 text-white animate-fadeIn transition-all">
            <div className="w-full flex flex-col justify-start items-start gap-7">
                <div className="flex flex-col gap-4">
                    <p className="text-3xl font-semibold">About Me</p>
                    <span className="w-10 border-b-[6px] border-yellow-200 rounded-md"></span>
                </div>
                <p className="text-justify text-gray-300">
                    I am an aspiring web developer with a passion for creating dynamic
                    and responsive websites. I have a strong foundation in HTML5, CSS3,
                    JavaScript, ReactJS, and Git, and I am continuously learning and
                    expanding my skill set to keep up with the ever-evolving world of
                    web development.
                </p>
                <p className="text-justify text-gray-300">My goal is to work with a reputable company where I
                    can contribute my knowledge and skills while growing as a
                    professional.
                </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-7 pb-10">
                <p className="text-3xl font-semibold">My Skills</p>
                <div className="w-full flex justify-center items-center gap-10">
                    {firstSlice && firstSlice.map((item, index) =>
                        <CardSkills
                            key={index}
                            label={item?.label}
                            icon={item?.icon}
                            description={item?.description}
                        />
                    )}
                </div>
                <div className="w-full flex justify-center items-center gap-10">
                    {secondSlice && secondSlice.map((item, index) =>
                        <CardSkills
                            key={index}
                            label={item?.label}
                            icon={item?.icon}
                            description={item?.description}
                        />
                    )}
                </div>
                <div className="w-full flex justify-center items-center gap-10">
                    {thirdSlice && thirdSlice.map((item, index) =>
                        <CardSkills
                            key={index}
                            label={item?.label}
                            icon={item?.icon}
                            description={item?.description}
                        />
                    )}
                </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-7 pb-10">
                <p className="text-3xl font-semibold">My Hobbies</p>
                <div className="w-full flex justify-center items-center gap-10">
                    <CardSkills
                        label="Online Games"
                        icon={<CgGames />}
                        description="I enjoy playing Dota 2, Valorant, and League of Legends (LoL) with my friends during my free time."
                    />
                    <CardSkills
                        label="Coding"
                        icon={<FaRegKeyboard />}
                        description="I spend my free time doing front-end web development, creating and enhancing web pages and applications."
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <CardSkills
                        label="Basketball"
                        icon={<FaBasketball />}
                        description="I play basketball with my friends to hang out and stay active."
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
