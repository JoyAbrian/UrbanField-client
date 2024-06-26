import React from 'react';

const TimeCard = ({ startTime, endTime, price, isSelected, onSelect }) => {
    let statusClass = isSelected ? "bg-sky-900 text-white" : "bg-white text-black";

    return (
        <div className={`border border-black rounded-xl font-Poppins font-semibold text-center p-4 cursor-pointer ${statusClass}`} onClick={onSelect}>
            <span className="">60 Menit</span>
            <h3 className="text-xl">{startTime} - {endTime}</h3>
            <p className="text-lg">{price}</p>
        </div>
    )
}

export default TimeCard;
