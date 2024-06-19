import { Fragment } from "react";
import PaymentNavbar from "../components/Layouts/PaymentNavbar";
import TitleSections from "../components/Fragments/title_sections";
import { Helmet } from "react-helmet";
import ContactSections from "../components/Fragments/contact_sections";
import LandingPageButton from "../components/Elements/Button/LandingPageButton";

const PaymentPage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Payments Page | Urban Fields</title>
            </Helmet>
            <PaymentNavbar />
            <TitleSections title="PAYMENT"/>
            <div className="px-10 select-none mt-20 mb-10">
                <div className="w-1/2 shadow-lg shadow-slate-400 rounded-xl px-8 pb-20">
                    <div className="flex items-center">
                        <img src="img/colouredFieldIcon.png" alt="field" className="w-14 object-cover rounded-l-lg"/>
                        <h1 className="ml-2 text-2xl font-Poppins font-semibold">Futsal Rooftop PTC</h1>
                    </div>
                    <div className="flex items-center font-Poppins font-medium">
                        <p className="ml-2">9/10</p>
                        <p className="ml-2">&gt; Kota Jakarta Timur</p>
                    </div>
                    <div className="w-full h-0 border-t border-dashed border-slate-400 mt-5"/>
                    <div className="mt-3 w-full">
                        <h1 className="ml-2 text-2xl font-Poppins font-semibold">Futsal Rooftop PTC</h1>
                        <div className="flex justify-between w-full">
                            <p className="ml-2 font-Poppins font-medium text-sm text-slate-700">Senin, 20 Mei 2024</p>
                            <p className="ml-2 font-Poppins font-medium text-sm text-slate-700">[Hapus]</p>
                        </div>
                    </div>
                    <div className="ml-2 mt-1 bg-gray-100 border-l-4 border-slate-600 rounded-md p-1.5">
                        <p className="font-Poppins ml-3 text-sm font-medium">13.00 - 14.00</p>
                    </div>
                    <div className="w-full h-0 border-t border-dashed border-slate-400 mt-5"/>
                </div>

                <div className="w-1/2 shadow-lg shadow-slate-400 rounded-xl px-8 pb-5 mt-10">
                    <div className="flex items-center">
                        <img src="img/listIcon.png" alt="field" className="w-12 object-cover rounded-l-lg"/>
                        <h1 className="ml-4 text-2xl font-Poppins font-semibold">Data Penyewa</h1>
                    </div>
                    <div className="w-full h-0 border-t border-dashed border-slate-400 mt-5"/>
                    <div className="font-Poppins mt-4 text-sm">
                        <label className="font-semibold ml-3">Nama Lengkap <span className="text-red-500">*</span></label>
                        <div className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300">
                            <input className="text-black bg-transparent w-full outline-none" placeholder="John Doe"/>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-Poppins mt-4 text-sm w-full">
                            <label className="font-semibold ml-3">Nomor Ponsel <span className="text-red-500">*</span></label>
                            <div className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300">
                                <input className="text-black bg-transparent w-full outline-none" placeholder="John Doe"/>
                            </div>
                        </div>
                        <div className="font-Poppins mt-4 text-sm w-full">
                            <label className="font-semibold ml-3">Email <span className="text-red-500">*</span></label>
                            <div className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300">
                                <input className="text-black bg-transparent w-full outline-none" placeholder="John Doe"/>
                            </div>
                        </div>
                    </div>
                    <div className="font-Poppins mt-4 text-sm w-1/2">
                        <label className="font-semibold ml-3">Foto KTP <span className="text-red-500">*</span></label>
                        <div className="w-full p-8 flex justify-center bg-gray-50 rounded-lg border border-gray-300">
                            <img src="img/imgInput.png" alt="upload" className="w-32 object-cover rounded-lg"/>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 shadow-lg shadow-slate-400 rounded-xl px-8 pb-5 mt-10">
                    <div className="flex items-center">
                        <img src="img/listIcon.png" alt="field" className="w-12 object-cover rounded-l-lg"/>
                        <h1 className="ml-4 text-2xl font-Poppins font-semibold">Metode Pembayaran</h1>
                    </div>
                    <div className="w-full h-0 border-t border-dashed border-slate-400 mt-5"/>
                    <div className="flex items-center my-3 shadow-md rounded-xl py-3 px-5 shadow-slate-400 mt-5">
                        <img src="img/payment/bca.png" alt="visa" className="w-14 object-cover"/>
                        <div className="font-Poppins ml-3">
                            <h3 className="text-lg font-semibold">BCA</h3>
                            <p className="text-gray-600">Virtual Account</p>
                        </div>
                        <div className="ml-auto flex items-center">
                            <span className="text-slate-500 text-lg mr-2 font-Poppins">Rp. 5.000</span>
                            <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="flex items-center my-3 shadow-md rounded-xl py-3 px-5 shadow-slate-400 mt-5">
                        <img src="img/payment/bni.png" alt="visa" className="w-14 object-cover"/>
                        <div className="font-Poppins ml-3">
                            <h3 className="text-lg font-semibold">BNI</h3>
                            <p className="text-gray-600">Virtual Account</p>
                        </div>
                        <div className="ml-auto flex items-center">
                            <span className="text-slate-500 text-lg mr-2 font-Poppins">Rp. 5.000</span>
                            <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="flex items-center my-3 shadow-md rounded-xl py-3 px-5 shadow-slate-400 mt-5">
                        <img src="img/payment/bri.png" alt="visa" className="w-14 object-cover"/>
                        <div className="font-Poppins ml-3">
                            <h3 className="text-lg font-semibold">BRI</h3>
                            <p className="text-gray-600">Virtual Account</p>
                        </div>
                        <div className="ml-auto flex items-center">
                            <span className="text-slate-500 text-lg mr-2 font-Poppins">Rp. 5.000</span>
                            <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="flex items-center my-3 shadow-md rounded-xl py-3 px-5 shadow-slate-400 mt-5">
                        <img src="img/payment/gopay.png" alt="visa" className="w-14 object-cover"/>
                        <div className="font-Poppins ml-3">
                            <h3 className="text-lg font-semibold">GoPay</h3>
                        </div>
                        <div className="ml-auto flex items-center">
                            <span className="text-slate-500 text-lg mr-2 font-Poppins">Rp. 5.000</span>
                            <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="flex items-center my-3 shadow-md rounded-xl py-3 px-5 shadow-slate-400 mt-5">
                        <img src="img/payment/ovo.png" alt="visa" className="w-14 object-cover"/>
                        <div className="font-Poppins ml-3">
                            <h3 className="text-lg font-semibold">OVO</h3>
                        </div>
                        <div className="ml-auto flex items-center">
                            <span className="text-slate-500 text-lg mr-2 font-Poppins">Rp. 5.000</span>
                            <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="flex items-center my-3 shadow-md rounded-xl py-3 px-5 shadow-slate-400 mt-5">
                        <img src="img/payment/shopeepay.png" alt="visa" className="w-14 object-cover"/>
                        <div className="font-Poppins ml-3">
                            <h3 className="text-lg font-semibold">ShopeePay</h3>
                        </div>
                        <div className="ml-auto flex items-center">
                            <span className="text-slate-500 text-lg mr-2 font-Poppins">Rp. 5.000</span>
                            <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="flex items-center my-3 shadow-md rounded-xl py-3 px-5 shadow-slate-400 mt-5">
                        <img src="img/payment/dana.png" alt="visa" className="w-14 object-cover"/>
                        <div className="font-Poppins ml-3">
                            <h3 className="text-lg font-semibold">Dana</h3>
                        </div>
                        <div className="ml-auto flex items-center">
                            <span className="text-slate-500 text-lg mr-2 font-Poppins">Rp. 5.000</span>
                            <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="flex items-center my-3 shadow-md rounded-xl py-3 px-5 shadow-slate-400 mt-5">
                        <img src="img/payment/qris.png" alt="visa" className="w-14 object-cover"/>
                        <div className="font-Poppins ml-3">
                            <h3 className="text-lg font-semibold">QRIS</h3>
                        </div>
                        <div className="ml-auto flex items-center">
                            <span className="text-slate-500 text-lg mr-2 font-Poppins">Rp. 5.000</span>
                            <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center mt-12 mb-80">
                    <LandingPageButton >Bayar Sekarang</LandingPageButton>
                </div>

                <ContactSections />
            </div>
        </Fragment>
    )
}

export default PaymentPage;