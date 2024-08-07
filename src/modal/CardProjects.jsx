import React from "react";

export default function CardProjects({ label }) {
    return (
        <div className="w-full h-full flex justify-center items-end p-3 bg-[#373837] rounded-xl shadow-md animate-shrinkOut transition-all">
            <p>{label}</p>
        </div>
    );

}
