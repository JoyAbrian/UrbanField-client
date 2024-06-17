import DateCard from "./Card/DateCard";

const BookingDate = () => {
    return (
        <div className="flex py-2 pl-2 pr-6 w-full shadow-slate-400 shadow-lg mt-8 rounded-2xl items-center justify-between">
            <DateCard day="Sen" date="02 Mei" isSelected={true} />
            <DateCard day="Sel" date="03 Mei"/>
            <DateCard day="Rab" date="04 Mei"/>
            <DateCard day="Kam" date="05 Mei"/>
            <DateCard day="Jum" date="06 Mei"/>
            <DateCard day="Sab" date="07 Mei"/>
            <DateCard day="Min" date="08 Mei"/>
            <button className="w-fit px-20 mx-8 h-14 bg-sky-900 text-white text-2xl font-semibold font-Poppins rounded-2xl">MEI 2024</button>
        </div>
    )
}

export default BookingDate;