const FieldsImageDetails = ({ image1 = "/img/field_detail1.png", image2 = "/img/field_detail2.png", image3 = "/img/field_detail3.png" }) => {
    return (
        <div className="flex justify-center mx-72">
            <img src={image1} alt="field" className="rounded-l-2xl w-2/3 h-auto"/>
            <div className="flex flex-col ml-2 w-1/3">
                <img src={image2} alt="field" className="rounded-tr-2xl mb-2 w-full h-auto"/>
                <img src={image3} alt="field" className="rounded-br-2xl w-full h-auto"/>
            </div>
        </div>
    );
}

export default FieldsImageDetails;
