const DashboardFieldCard = (props) => {
    const { image = "/img/dashboard_item/field_example.png", name, description, onClick } = props;
    return (
        <div className="w-full p-4" onClick={onClick}>
            <div className="rounded-md shadow-lg cursor-pointer">
                <img src={image} alt="field" className="w-full"/>
                <div className="bg-white px-5 font-Inter">
                    <h1 className="text-lg font-semibold mt-4">{name}</h1>
                    <p className="mt-2 w-full text-[#475569]">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardFieldCard;