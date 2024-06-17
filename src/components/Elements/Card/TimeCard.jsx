const TimeCard = (props) => {
    const { startTime, endTime, price } = props;
    return (
        <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
            <span className="text-slate-600">60 Menit</span>
            <h3 className="text-xl">{startTime} - {endTime}</h3>
            <p className="text-lg text-slate-600">{price}</p>
        </div>
    )
}

export default TimeCard;