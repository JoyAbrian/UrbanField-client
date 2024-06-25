import React, { useState } from 'react';
import DateCard from "../../Elements/Card/DateCard";
import TimeCard from "../../Elements/Card/TimeCard";

const FieldDateBooks = ({ price }) => {
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

    const selectedMonth = selectedDate.getMonth();
    const selectedYear = selectedDate.getFullYear();

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
                <div className="grid grid-cols-4 gap-x-28 gap-y-12">
                    <TimeCard startTime="07:00" endTime="08:00" price={formattedPrice}/>
                    <TimeCard startTime="08:00" endTime="09:00" price={formattedPrice}/>
                    <TimeCard startTime="09:00" endTime="10:00" price={formattedPrice}/>
                    <TimeCard startTime="10:00" endTime="11:00" price={formattedPrice}/>
                    <TimeCard startTime="11:00" endTime="12:00" price={formattedPrice}/>
                    <TimeCard startTime="12:00" endTime="13:00" price={formattedPrice}/>
                    <TimeCard startTime="13:00" endTime="14:00" price={formattedPrice}/>
                    <TimeCard startTime="14:00" endTime="15:00" price={formattedPrice}/>
                    <TimeCard startTime="15:00" endTime="16:00" price={formattedPrice}/>
                    <TimeCard startTime="16:00" endTime="17:00" price={formattedPrice}/>
                    <TimeCard startTime="17:00" endTime="18:00" price={formattedPrice}/>
                    <TimeCard startTime="18:00" endTime="19:00" price={formattedPrice}/>
                    <TimeCard startTime="19:00" endTime="20:00" price={formattedPrice}/>
                    <TimeCard startTime="20:00" endTime="21:00" price={formattedPrice}/>
                    <TimeCard startTime="21:00" endTime="22:00" price={formattedPrice}/>
                    <TimeCard startTime="22:00" endTime="23:00" price={formattedPrice}/>
                </div>
                <div className="flex justify-center mt-20">
                    <button className="w-fit px-14 py-8 h-14 bg-sky-900 text-white text-2xl font-semibold font-Poppins rounded-lg items-center justify-center flex">Booking</button>
                </div>
            </div>
        </div>
    )
}

export default FieldDateBooks;