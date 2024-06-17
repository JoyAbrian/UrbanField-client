const DateCard = (props) => {
    const { day, date, isSelected = false } = props;
    return (
        <div className={`${isSelected ? 'bg-cyan-950 text-white' : 'bg-white text-black'} rounded-xl font-Poppins font-semibold p-8 text-center cursor-pointer`}>
            <span>{day}</span>
            <p className="text-xl">{date}</p>
        </div>
);
}

export default DateCard;