const FieldsImageDetails = ({ image1 = "/img/field_detail1.png", image2 = "/img/field_detail2.png", image3 = "/img/field_detail3.png" }) => {
    const isDummyData1 = image1.includes('/img/');
    const isDummyData2 = image2.includes('/img/');
    const isDummyData3 = image3.includes('/img/');

    const imgSrc1 = 'http://127.0.0.1:5000/' + image1;
    const imgSrc2 = 'http://127.0.0.1:5000/' + image2;
    const imgSrc3 = 'http://127.0.0.1:5000/' + image3;

    return (
        <div className="flex justify-center mx-72">
            {isDummyData1 && <img src={image1} alt="field" className="rounded-l-2xl w-2/3 h-auto"/> || <img src={imgSrc1} alt="field" className="rounded-l-2xl w-2/3 h-auto"/>}
            <div className="flex flex-col ml-2 w-1/3">
                {isDummyData2 && <img src={image2} alt="field" className="rounded-tr-2xl mb-2 w-full h-auto"/> || <img src={imgSrc2} alt="field" className="rounded-tr-2xl mb-2 w-full h-auto"/>}
                {isDummyData3 && <img src={image3} alt="field" className="rounded-br-2xl w-full h-auto"/> || <img src={imgSrc3} alt="field" className="rounded-br-2xl w-full h-auto"/>}
            </div>
        </div>
    );
}

export default FieldsImageDetails;
