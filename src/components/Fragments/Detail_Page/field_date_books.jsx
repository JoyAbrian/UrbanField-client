import React, { useState } from 'react';
import DateCard from "../../Elements/Card/DateCard";
import TimeCard from "../../Elements/Card/TimeCard";

const FieldDateBooks = ({ fieldId, price }) => {
    const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    const date = new Date();
    
    const daysInIndonesian = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    const monthsInIndonesian = ["Jan", "Feb", "Mar", "Apr", "Mei", "Juni", "Juli", "Agu", "Sep", "Okt", "Nov", "Des"];
    
    const generateDates = (startDate) => {
        let dates = [];
        for (let i = 0; i < 7; i++) {
            const newDate = new Date(startDate);
            newDate.setDate(startDate.getDate() + i);
            const dayName = daysInIndonesian[newDate.getDay()];
            const dateNumber = newDate.getDate();
            const monthName = monthsInIndonesian[newDate.getMonth()];
            dates.push({ dayName, date: `${dateNumber} ${monthName}`, fullDate: newDate });
        }
        return dates;
    }

    const dates = generateDates(date);
    
    const [selectedDate, setSelectedDate] = useState(dates[0].fullDate);
    const [selectedTime, setSelectedTime] = useState("");

    const selectedMonth = selectedDate.getMonth();
    const selectedYear = selectedDate.getFullYear();

    function formatDate(selectedTime) {
        const date = new Date(selectedTime);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const queryString = new URLSearchParams({
            date: formatDate(selectedDate),  
            time: selectedTime,
            price: price.toString(), 
        }).toString();

        window.location.href = `/payment/${fieldId}?${queryString}`;
    };

    return (
        <div className="mt-20 mx-28">
            <div className="w-fit">
                <div className="flex items-center">
                    <img src="/img/dateIcon.png" alt="date" className="w-14"/>
                    <h2 className="ml-5 text-4xl font-Poppins font-semibold">Pilih Jadwal</h2>
                </div>
                <div className="h-0.5 bg-cyan-950 mt-2"/>
            </div>

            <div className="flex py-2 pl-2 pr-6 w-full shadow-slate-400 shadow-lg mt-8 rounded-2xl items-center justify-between">
                {dates.map((date, index) => (
                    <DateCard 
                        key={index} 
                        day={date.dayName} 
                        date={date.date} 
                        isSelected={selectedDate.getDate() === date.fullDate.getDate() && selectedDate.getMonth() === date.fullDate.getMonth() && selectedDate.getFullYear() === date.fullDate.getFullYear()}
                        onSelect={() => setSelectedDate(date.fullDate)}
                    />
                ))}
                <button className="w-fit px-20 mx-8 h-14 bg-sky-900 text-white text-2xl font-semibold font-Poppins rounded-2xl">
                    {`${monthsInIndonesian[selectedMonth]} ${selectedYear}`}
                </button>
            </div>

            <div className="mt-14 mx-28">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-4 gap-x-28 gap-y-12">
                        {["07:00-08:00", "08:00-09:00", "09:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00", "18:00-19:00", "19:00-20:00", "20:00-21:00", "21:00-22:00", "22:00-23:00"].map((time, index) => (
                            <TimeCard
                                key={index}
                                startTime={time.split('-')[0]}
                                endTime={time.split('-')[1]}
                                price={formattedPrice}
                                isSelected={selectedTime === time}
                                onSelect={() => setSelectedTime(time)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center mt-20">
                        <button type="submit" className="w-fit px-14 py-8 h-14 bg-sky-900 text-white text-2xl font-semibold font-Poppins rounded-lg items-center justify-center flex">Booking</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FieldDateBooks;
