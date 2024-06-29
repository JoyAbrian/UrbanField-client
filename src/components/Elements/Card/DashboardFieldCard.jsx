const DashboardFieldCard = (props) => {
    const { image = "/img/dashboard_item/field_example.png", name, description, onClick } = props;
    const isDummyData = image.includes('/img/');
    const imgSrc = 'http://127.0.0.1:5000/' + image;
    return (
        <div className="w-full p-4" onClick={onClick}>
            <div className="rounded-md shadow-lg cursor-pointer">
                {isDummyData && <img src={image} alt="field" className="w-full"/> || <img src={imgSrc} alt="field" className="w-full"/>}
                <div className="bg-white px-5 font-Inter">
                    <h1 className="text-lg font-semibold mt-4">{name}</h1>
                    <p className="mt-2 w-full text-[#475569]">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardFieldCard;