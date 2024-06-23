const FacilityCard = (props) => {
    const { facility, image } = props;
    return (
        <div className="flex items-center">
            <img src={`/img/facility/${image}Icon.png`} alt={image} className="w-10"/>
            <p className="ml-3 text-xl font-Poppins font-semibold">{facility}</p>
        </div>
    )
}

export default FacilityCard;