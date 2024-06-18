import React from "react";
import DateCard from "./Card/DateCard";

const BookingDate = () => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    const daysInIndonesian = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    const monthsInIndonesian = ["Jan", "Feb", "Mar", "Apr", "Mei", "Juni", "Juli", "Agu", "Sept", "Okt", "Nov", "Des"];
    
    const generateDates = (startDate) => {
        let dates = [];
        for (let i = 0; i < 7; i++) {
            const newDate = new Date(startDate);
            newDate.setDate(startDate.getDate() + i);
            const dayName = daysInIndonesian[newDate.getDay()];
            const dateNumber = newDate.getDate();
            const monthName = monthsInIndonesian[newDate.getMonth()];
            dates.push({ dayName, date: `${dateNumber} ${monthName}` });
        }
        return dates;
    }

    const dates = generateDates(date);
    
    return (
        <div className="flex py-2 pl-2 pr-6 w-full shadow-slate-400 shadow-lg mt-8 rounded-2xl items-center justify-between">
            {dates.map((date, index) => (
                <DateCard 
                    key={index} 
                    day={date.dayName} 
                    date={date.date} 
                    isSelected={index === 0} 
                />
            ))}
            <button className="w-fit px-20 mx-8 h-14 bg-sky-900 text-white text-2xl font-semibold font-Poppins rounded-2xl">
                {`${monthsInIndonesian[month]} ${year}`}
            </button>
        </div>
    )
}

export default BookingDate;