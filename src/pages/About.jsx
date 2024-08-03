

const About = () => {
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
            <div className="w-full flex flex-col justify-start items-start gap-7">
                <p className="text-3xl font-semibold">What I'm Doing</p>
            </div>

        </div>
    );
};

export default About;
