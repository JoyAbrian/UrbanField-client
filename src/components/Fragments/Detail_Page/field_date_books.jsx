import BookingDate from "../../Elements/BookingDate";
import TimeCard from "../../Elements/Card/TimeCard";

const FieldDateBooks = () => {
    return (
        <div className="mt-20 mx-28">
            <div className="w-fit">
                <div className="flex items-center">
                    <img src="img/dateIcon.png" alt="date" className="w-14"/>
                    <h2 className="ml-5 text-4xl font-Poppins font-semibold">Pilih Jadwal</h2>
                </div>
                <div className="h-0.5 bg-cyan-950 mt-2"/>
            </div>

            <BookingDate />

            <div className="mt-14 mx-28">
                <div className="grid grid-cols-4 gap-x-28 gap-y-12">
                    <TimeCard startTime="07:00" endTime="08:00" price="Rp. 45,000"/>
                    <TimeCard startTime="08:00" endTime="09:00" price="Rp. 45,000"/>
                    <TimeCard startTime="09:00" endTime="10:00" price="Rp. 45,000"/>
                    <TimeCard startTime="10:00" endTime="11:00" price="Rp. 45,000"/>
                    <TimeCard startTime="11:00" endTime="12:00" price="Rp. 45,000"/>
                    <TimeCard startTime="12:00" endTime="13:00" price="Rp. 45,000"/>
                    <TimeCard startTime="13:00" endTime="14:00" price="Rp. 45,000"/>
                    <TimeCard startTime="14:00" endTime="15:00" price="Rp. 45,000"/>
                    <TimeCard startTime="15:00" endTime="16:00" price="Rp. 45,000"/>
                    <TimeCard startTime="16:00" endTime="17:00" price="Rp. 45,000"/>
                    <TimeCard startTime="17:00" endTime="18:00" price="Rp. 45,000"/>
                    <TimeCard startTime="18:00" endTime="19:00" price="Rp. 45,000"/>
                    <TimeCard startTime="19:00" endTime="20:00" price="Rp. 45,000"/>
                    <TimeCard startTime="20:00" endTime="21:00" price="Rp. 45,000"/>
                    <TimeCard startTime="21:00" endTime="22:00" price="Rp. 45,000"/>
                    <TimeCard startTime="22:00" endTime="23:00" price="Rp. 45,000"/>
                </div>
                <div className="flex justify-center mt-20">
                    <button className="w-fit px-14 py-8 h-14 bg-sky-900 text-white text-2xl font-semibold font-Poppins rounded-lg items-center justify-center flex">Booking</button>
                </div>
            </div>
        </div>
    )
}

export default FieldDateBooks;