const FieldCard = (props) => {
    const { img, name, venue, location, price } = props;
    
    return (
        <div className="w-full mx-20 rounded-2xl shadow-slate-300 shadow-xl font-Poppins cursor-pointer">
            <img src={img} alt={name} className="w-full h-96 rounded-t-2xl mx-auto object-cover"/>
            <div className="px-3 pt-3 pb-5">
                <p className="text-slate-400 font-semibold">{venue}</p>
                <h3 className="text-black font-semibold text-lg">{name}</h3>
                <p className="text-sm">{location}</p>
                <p className="mt-6 text-sm">Mulai <span className="text-slate-800 font-bold">{price.toLocaleString('id-ID', {style: 'currency', currency:'IDR'})}</span> / Sesi</p>
            </div>
        </div>
    )
}

export default FieldCard;