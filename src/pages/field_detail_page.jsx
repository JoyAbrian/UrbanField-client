import { Fragment } from "react";
import NavBar from "../components/Layouts/NavBar";
import { Helmet } from "react-helmet";
import TitleSections from "../components/Fragments/title_sections";
import FieldsImageDetails from "../components/Elements/FieldImageDetails";
import ContactSections from "../components/Fragments/contact_sections";

const FieldsDetailPage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Details Page | Urban Fields</title>
            </Helmet>
            <NavBar />
            <TitleSections title="BOOKING"/>
            <div className="select-none">
                <div className="mt-8">
                    <FieldsImageDetails />
                    <div className="mt-10 mx-28 flex w-full justify-between">
                        <div className="w-3/5">
                            <div className="flex items-center">
                                <img src="img/fieldIcon.png" alt="field" className="w-16"/>
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

                    <div className="mt-10 mx-28 w-3/5">
                        <h3 className="text-3xl font-bold">Fasilitas</h3>
                        <div className="grid grid-cols-3 gap-6 mt-7">
                            <div className="flex items-center">
                                <img src="img/facility/carIcon.png" alt="car" className="w-10"/>
                                <p className="ml-3 text-xl font-Poppins font-semibold">Parkir Mobil</p>
                            </div>
                            <div className="flex items-center">
                                <img src="img/facility/mushollaIcon.png" alt="musholla" className="w-10"/>
                                <p className="ml-3 text-xl font-Poppins font-semibold">Musholla</p>
                            </div>
                            <div className="flex items-center">
                                <img src="img/facility/bikeIcon.png" alt="bike" className="w-10"/>
                                <p className="ml-3 text-xl font-Poppins font-semibold">Parkir Motor</p>
                            </div>
                            <div className="flex items-center">
                                <img src="img/facility/toiletIcon.png" alt="toilet" className="w-10"/>
                                <p className="ml-3 text-xl font-Poppins font-semibold">Toilet</p>
                            </div>
                            <div className="flex items-center">
                                <img src="img/facility/cafeIcon.png" alt="cafe" className="w-10"/>
                                <p className="ml-3 text-xl font-Poppins font-semibold">Kantin</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 mx-28">
                        <div className="w-fit">
                            <div className="flex items-center">
                                <img src="img/dateIcon.png" alt="date" className="w-14"/>
                                <h2 className="ml-5 text-4xl font-Poppins font-semibold">Pilih Jadwal</h2>
                            </div>
                            <div className="h-0.5 bg-cyan-950 mt-2"/>
                        </div>

                        <div className="flex py-2 pl-2 pr-6 w-full shadow-slate-400 shadow-lg mt-8 rounded-2xl items-center justify-between">
                            <div className="bg-cyan-950 rounded-xl text-white font-Poppins font-semibold p-8 text-center cursor-pointer">
                                <span>Sen</span>
                                <p className="text-xl">20 Mei</p>
                            </div>
                            <div className="rounded-xl text-black font-Poppins font-semibold p-8 text-center cursor-pointer">
                                <span>Sel</span>
                                <p className="text-xl">21 Mei</p>
                            </div>
                            <div className="rounded-xl text-black font-Poppins font-semibold p-8 text-center cursor-pointer">
                                <span>Rab</span>
                                <p className="text-xl">22 Mei</p>
                            </div>
                            <div className="rounded-xl text-black font-Poppins font-semibold p-8 text-center cursor-pointer">
                                <span>Kam</span>
                                <p className="text-xl">23 Mei</p>
                            </div>
                            <div className="rounded-xl text-black font-Poppins font-semibold p-8 text-center cursor-pointer">
                                <span>Jum</span>
                                <p className="text-xl">24 Mei</p>
                            </div>
                            <div className="rounded-xl text-black font-Poppins font-semibold p-8 text-center cursor-pointer">
                                <span>Sab</span>
                                <p className="text-xl">25 Mei</p>
                            </div>
                            <div className="rounded-xl text-black font-Poppins font-semibold p-8 text-center cursor-pointer">
                                <span>Min</span>
                                <p className="text-xl">26 Mei</p>
                            </div>
                            <button className="w-fit px-20 mx-8 h-14 bg-sky-900 text-white text-2xl font-semibold font-Poppins rounded-2xl">MEI 2024</button>
                        </div>

                        <div className="mt-14 mx-28">
                            <div className="grid grid-cols-4 gap-x-28 gap-y-12">
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">07:00 - 08:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">08:00 - 09:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">09:00 - 10:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">10:00 - 11:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">11:00 - 12:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">12:00 - 13:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">13:00 - 14:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">14:00 - 15:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">15:00 - 16:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">16:00 - 17:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">17:00 - 18:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">18:00 - 19:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">19:00 - 20:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">20:00 - 21:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">21:00 - 22:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                                <div className="border border-black rounded-xl font-Poppins font-semibold text-center p-4">
                                    <span className="text-slate-600">60 Menit</span>
                                    <h3 className="text-xl">22:00 - 23:00</h3>
                                    <p className="text-lg text-slate-600">Rp. 45,000</p>
                                </div>
                            </div>
                            <div className="flex justify-center mt-20">
                                <button className="w-fit px-14 py-8 h-14 bg-sky-900 text-white text-2xl font-semibold font-Poppins rounded-lg items-center justify-center flex">Booking</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 mx-56 mb-60">
                        <div className="flex items-center ml-2">
                            <img src="img/reviewIcon.png" alt="date" className="w-14"/>
                            <h2 className="ml-5 text-4xl font-Poppins font-semibold">Review</h2>
                        </div>

                        <div className="flex gap-48 mt-8">
                            <div className="border border-black bg-slate-50 rounded-lg py-3 px-5 w-1/2">
                                <div className="items-center flex justify-between">
                                    <div className="flex w-fit">
                                        <img src="img/userIcon.png" alt="user" className="w-12"/>
                                        <div className="font-Poppins ml-2">
                                            <p className="font-medium">Iswari</p>
                                            <span className="text-sm">02 Mei 2024</span>
                                        </div>
                                    </div>
                                    <div className="font-Poppins ml-2 justify-end">
                                        <p className="font-medium">9/10</p>
                                    </div>
                                </div>
                                <p className="mt-4 mb-8 font-Poppins font-medium">Lapangan dan fasilitasnya keren!</p>
                            </div>

                            <div className="border border-black bg-slate-50 rounded-lg py-3 px-5 w-1/2">
                                <div className="items-center flex justify-between">
                                    <div className="flex w-fit">
                                        <img src="img/userIcon.png" alt="user" className="w-12"/>
                                        <div className="font-Poppins ml-2">
                                            <p className="font-medium">Iswari</p>
                                            <span className="text-sm">02 Mei 2024</span>
                                        </div>
                                    </div>
                                    <div className="font-Poppins ml-2 justify-end">
                                        <p className="font-medium">9/10</p>
                                    </div>
                                </div>
                                <p className="mt-4 mb-8 font-Poppins font-medium">Lapangan dan fasilitasnya keren!</p>
                            </div>
                        </div>
                    </div>

                    <ContactSections />
                </div>
            </div>
        </Fragment>
    );
}

export default FieldsDetailPage;