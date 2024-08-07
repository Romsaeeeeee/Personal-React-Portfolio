import React from "react";

export default function CardProjects({ label }) {
    return (
        <div className="w-1/2 h-full flex justify-center items-end p-3 bg-[#373837] rounded-xl shadow-md">
            <p>{label}</p>
        </div>
    );

}
