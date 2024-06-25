const DateCard = (props) => {
    const { day, date, isSelected = false, onSelect } = props;
    return (
        <div
            className={`rounded-xl font-Poppins font-semibold p-8 text-center cursor-pointer ${isSelected ? 'bg-cyan-950 text-white' : 'bg-white text-black'}`}
            onClick={onSelect}
        >
            <span>{day}</span>
            <p className="text-xl">{date}</p>
        </div>
    );
}

export default DateCard;