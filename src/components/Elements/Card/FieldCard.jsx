const FieldCard = (props) => {
    const { img, venue, location, price } = props;
    
    return (
        <div className="w-1/4 rounded-2xl shadow-slate-300 shadow-xl font-Poppins">
            <img src={img} alt={venue} className="w-full mx-auto object-cover"/>
            <div className="px-3 pt-3 pb-5">
                <p className="text-slate-400 font-semibold">venue</p>
                <h3 className="text-black font-semibold text-lg">{venue}</h3>
                <p className="text-sm">{location}</p>
                <p className="mt-6 text-sm">Mulai <span className="text-slate-800 font-bold">{price.toLocaleString('id-ID', {style: 'currency', currency:'IDR'})}</span> / Sesi</p>
            </div>
        </div>
    )
}

export default FieldCard;