

export default function CardSkills({ icon, label, description }) {
    return (
        <div className="w-1/2 h-48 flex justify-start items-center gap-5 px-5 bg-[#373837] rounded-2xl shadow-xl">
            <span className="text-9xl text-yellow-200">{icon}</span>
            <div className="flex flex-col justify-start items-start gap-3">
                <p className="text-3xl font-semibold">{label}</p>
                <p className="text-justify">{description}</p>
            </div>
        </div>
    );

}
