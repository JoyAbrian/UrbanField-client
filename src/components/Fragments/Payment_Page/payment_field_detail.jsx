const PaymentFieldDetail = (props) => {
    const {name, review, city, date, time} = props;
    return (
        <div className="w-1/2 shadow-lg shadow-slate-400 rounded-xl px-8 pb-20">
            <div className="flex items-center">
                <img src="/img/colouredFieldIcon.png" alt="field" className="w-14 object-cover rounded-l-lg"/>
                <h1 className="ml-2 text-2xl font-Poppins font-semibold">{name}</h1>
            </div>
            <div className="flex items-center font-Poppins font-medium">
                <p className="ml-2">{review}/10</p>
                <p className="ml-2">&gt; {city}</p>
            </div>
            <div className="w-full h-0 border-t border-dashed border-slate-400 mt-5"/>
            <div className="mt-3 w-full">
                <h1 className="ml-2 text-2xl font-Poppins font-semibold">{name}</h1>
                <div className="flex justify-between w-full">
                    <p className="ml-2 font-Poppins font-medium text-sm text-slate-700">{date}</p>
                    <p className="ml-2 font-Poppins font-medium text-sm text-slate-700">[Hapus]</p>
                </div>
            </div>
            <div className="ml-2 mt-1 bg-gray-100 border-l-4 border-slate-600 rounded-md p-1.5">
                <p className="font-Poppins ml-3 text-sm font-medium">{time}</p>
            </div>
            <div className="w-full h-0 border-t border-dashed border-slate-400 mt-5"/>
        </div>
    )
}

export default PaymentFieldDetail;