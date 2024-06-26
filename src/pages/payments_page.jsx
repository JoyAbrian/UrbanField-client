import React, { Fragment, useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import PaymentNavbar from '../components/Layouts/PaymentNavbar';
import TitleSections from '../components/Fragments/title_sections';
import { Helmet } from 'react-helmet';
import ContactSections from '../components/Fragments/contact_sections';
import LandingPageButton from '../components/Elements/Button/LandingPageButton';
import PaymentFieldDetail from '../components/Fragments/Payment_Page/payment_field_detail';
import PaymentUserDetail from '../components/Fragments/Payment_Page/payment_user_detail';
import PaymentChoose from '../components/Fragments/Payment_Page/payment_choose';
import { getFieldById } from '../services/db/field.service';
import { jwtDecode } from 'jwt-decode';

const PaymentPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedDate = searchParams.get('date');
    const selectedTime = searchParams.get('time');
    const price = searchParams.get('price');

    const [user, setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            window.location.href = '/login';
        } else {
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.sub;

                fetchUser(userId);
            } catch (error) {
                console.error('Error decoding token:', error);
                window.location.href = '/login';
            }
        }
    }, []);

    const fetchUser = async (userId) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/users/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const userData = await response.json();
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const { id } = useParams();
    const [field, setField] = useState({});
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [paymentSelected, setPaymentSelected] = useState(false); // State untuk melacak apakah metode pembayaran sudah dipilih
    const navigate = useNavigate();

    useEffect(() => {
        getFieldById(id).then((data) => {
            setField(data);
        });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (paymentMethod) { // Pastikan paymentMethod sudah dipilih
            navigate(`/confirm_payment/${id}?date=${selectedDate}&time=${selectedTime}&price=${price}&paymentMethod=${paymentMethod}`);
        } else {
            alert("Pilih metode pembayaran terlebih dahulu!");
        }
    };

    const handlePaymentMethodSelect = (method) => {
        setPaymentMethod(method);
        setPaymentSelected(true); // Set state paymentSelected menjadi true saat metode pembayaran dipilih
    };

    return (
        <Fragment>
            <Helmet>
                <title>Payments Page | Urban Fields</title>
            </Helmet>
            <PaymentNavbar />
            <TitleSections title="PAYMENT" />
            <div className="px-10 select-none mt-20 mb-10 w-full flex flex-col items-center">
                <PaymentFieldDetail name={field.name} review="9" city={field.city} date={selectedDate} time={selectedTime} />
                <PaymentUserDetail name={user.username} email={user.email} phone_number={user.phone_number} />
                <PaymentChoose priceM={price} onPaymentMethodSelect={handlePaymentMethodSelect} />

                <form className="w-1/2 flex justify-center mt-12" onSubmit={handleSubmit}>
                    <LandingPageButton type="submit" disabled={!paymentSelected}>Bayar Sekarang</LandingPageButton>
                </form>

                <ContactSections />
            </div>
        </Fragment>
    );
};

export default PaymentPage;
