const FieldsImageDetails = ({ image1 = "/img/field_detail1.png", image2 = "/img/field_detail2.png", image3 = "/img/field_detail3.png" }) => {
    return (
        <div className="flex w-full justify-center">
            <img src={image1} alt="field" className="rounded-l-2xl h-full"/>
            <div className="flex flex-col h-full ml-5">
                <img src={image2} alt="field" className="rounded-tr-2xl mb-5"/>
                <img src={image3} alt="field" className="rounded-br-2xl"/>
            </div>
        </div>
    );
}

export default FieldsImageDetails;