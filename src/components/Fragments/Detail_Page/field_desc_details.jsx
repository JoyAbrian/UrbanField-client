const FieldDescDetail = () => {
    return (
        <div className="mt-10 mx-28 flex w-full justify-between">
            <div className="w-3/5">
                <div className="flex items-center">
                    <img src="/img/fieldIcon.png" alt="field" className="w-16"/>
                    <h2 className="ml-3 text-4xl font-Poppins font-semibold">Futsal Rooftop PTC</h2>
                </div>
                <p className="text-2xl text-slate-600">Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta</p>
                <div className="h-0.5 bg-black mt-5 mr-16"/>
                <div className="ml-10 mt-8">
                    <h3 className="text-2xl font-Poppins font-semibold">Lokasi Venue</h3>
                    <p className="text-lg font-Poppins w-1/2">Pulogadung Trade Centre lanntai Roof Jl.Raya Bekasi KM 21 Jakarta Timur 13920</p>
                </div>
            </div>
            <div className="w-2/5 mt-12">
                <h2 className="text-xl font-Poppins text-slate-600 font-semibold">Mulai Dari</h2>
                <p className="text-3xl font-Poppins font-semibold">Rp. 45,000 <span className="text-xl text-slate-800 font-normal">Per Sesi</span></p>
                <button className="w-fit px-32 h-14 bg-sky-900 text-white text-xl mt-6 font-semibold font-Poppins rounded-2xl">Cek Ketersediaan</button>
            </div>
        </div>
    )
}

export default FieldDescDetail;