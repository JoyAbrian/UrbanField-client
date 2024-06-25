import React from 'react';

const TimeCard = (props) => {
    const { startTime, endTime, price, status = 'available' } = props;

    let statusClass = "";
    switch (status) {
        case "closed":
            statusClass = "bg-gray-300 text-gray-700 cursor-not-allowed";
            break;
        case "booked":
            statusClass = "bg-red-500 text-white cursor-not-allowed";
            break;
        case "available":
        default:
            statusClass = "bg-white text-black";
            break;
    }

    return (
        <div className={`border border-black rounded-xl font-Poppins font-semibold text-center p-4 ${statusClass}`}>
            <span className="text-slate-600">60 Menit</span>
            <h3 className="text-xl">{startTime} - {endTime}</h3>
            <p className="text-lg text-slate-600">{price}</p>
        </div>
    )
}

export default TimeCard;