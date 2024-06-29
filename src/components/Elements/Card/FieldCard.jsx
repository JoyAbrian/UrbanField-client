const FieldCard = (props) => {
    const { img, name, venue, location, price } = props;
    const formattedPrice = (price !== undefined && Number(price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })) || '-';
    const isDummyData = img.includes('/img/');
    const imgSrc = 'http://127.0.0.1:5000/' + img;

    return (
        <div className="w-full rounded-2xl shadow-slate-300 shadow-xl font-Poppins cursor-pointer">
            {isDummyData && <img src={img} alt="field" className="w-full h-96 rounded-t-2xl mx-auto object-cover"/> || <img src={imgSrc} alt="field" className="w-full h-96 rounded-t-2xl mx-auto object-cover"/>}
            <div className="px-3 pt-3 pb-5">
                <p className="text-slate-400 font-semibold">{venue}</p>
                <h3 className="text-black font-semibold text-lg">{name}</h3>
                <p className="text-sm">{location}</p>
                <p className="mt-6 text-sm">Mulai <span className="text-slate-800 font-bold">{formattedPrice}</span> / Sesi</p>
            </div>
        </div>
    )
}

export default FieldCard;