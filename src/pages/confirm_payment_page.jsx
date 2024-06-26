import { useLocation, useParams } from 'react-router-dom';
import PaymentNavbar from '../components/Layouts/PaymentNavbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getFieldById } from '../services/db/field.service';
import { jwtDecode } from 'jwt-decode';

const ConfirmPaymentPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedDate = searchParams.get('date');
    const selectedTime = searchParams.get('time').substring(0, 5);;
    const price = searchParams.get('price');
    const paymentMethod = searchParams.get('paymentMethod');

    const { id } = useParams();
    const [field, setField] = useState({});

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.sub;

    useEffect(() => {
        getFieldById(id).then((data) => {
            setField(data);
        });
    }, [id]);

    const handlePayment = () => {
        const data = {
            user_id: userId,
            field_id: id,
            date: selectedDate,
            time: selectedTime,
            payment_method_id: paymentMethod
        };

        axios.post('http://127.0.0.1:5000/bookings', data)
            .then(response => {
                console.log(response.data.message);
                alert('Pembayaran berhasil dilakukan.');
                window.location.href = '/fields';
            })
            .catch(error => {
                console.error('Error during booking:', error);
                alert('Terjadi kesalahan saat melakukan pembayaran.');
            });

    };

    return (
        <div className="w-100 h-auto relative bg-white mx-auto">
            <PaymentNavbar />
            <div className="w-full h-16 bg-gradient-to-r from-cyan-600 via-sky-900 to-gray-800 flex items-center justify-center">
                <div className="text-zinc-100 text-4xl font-bold font-['Poppins']">PAYMENT</div>
            </div>

            <div className='mx-24'>
                <div className="mx-4 mt-10 bg-white rounded-lg shadow p-4">
                    <div className="text-gray-700 text-xl font-semibold font-['Poppins']">Rincian Biaya</div>
                    <div className="border-b border-neutral-400 my-4"></div>
                    <div className="text-zinc-600 text-base font-semibold font-['Poppins'] flex justify-between">
                        <span>Waktu Pemesanan</span>
                        <span>{selectedDate} {selectedTime}</span>
                    </div>
                    <div className="border-b border-neutral-400 my-4"></div>
                    <div className="text-zinc-600 text-base font-semibold font-['Poppins'] flex justify-between">
                        <span>Nama Lapangan</span>
                        <span>{field.name}</span>
                    </div>
                    <div className="border-b border-neutral-400 my-4"></div>
                    <div className="text-zinc-600 text-base font-semibold font-['Poppins'] flex justify-between">
                        <span>Biaya Sewa</span>
                        <span>Rp.{price}</span>
                    </div>
                    <div className="text-zinc-600 text-base font-semibold font-['Poppins'] flex justify-between">
                        <span>Biaya Transaksi</span>
                        <span>Rp.5.000</span>
                    </div>
                    <div className="border-b border-neutral-400 my-4"></div>
                    <div className="mt-6 text-black text-base font-semibold font-['Poppins'] flex justify-between">
                        <span>Total Bayar</span>
                        <span>Rp.{parseInt(price) + 5000}</span>
                    </div>

                </div>
                <div className="text-center mt-6 mx-4">
                    <span className="text-zinc-600 text-base font-medium font-['Poppins']">
                        Dengan mengklik tombol berikut, Anda menyetujui
                    </span>
                    <span className="text-cyan-600 text-base font-medium font-['Poppins']"> Syarat dan ketentuan </span>
                    <span className="text-zinc-600 text-base font-medium font-['Poppins']">serta</span>
                    <span className="text-cyan-600 text-base font-medium font-['Poppins']"> Kebijkaan privasi</span>
                </div>
                <div className="mt-6 flex justify-center">
                    <button onClick={handlePayment} className="w-80 h-14 bg-sky-900 rounded-lg text-white text-base font-semibold font-['Poppins']">
                        Lakukan Pembayaran
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPaymentPage;