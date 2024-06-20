import { Fragment } from "react";
import PaymentNavbar from "../components/Layouts/PaymentNavbar";
import TitleSections from "../components/Fragments/title_sections";
import { Helmet } from "react-helmet";
import ContactSections from "../components/Fragments/contact_sections";
import LandingPageButton from "../components/Elements/Button/LandingPageButton";
import PaymentFieldDetail from "../components/Fragments/Payment_Page/payment_field_detail";
import PaymentUserDetail from "../components/Fragments/Payment_Page/payment_user_detail";
import PaymentChoose from "../components/Fragments/Payment_Page/payment_choose";

const PaymentPage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Payments Page | Urban Fields</title>
            </Helmet>
            <PaymentNavbar />
            <TitleSections title="PAYMENT"/>
            <div className="px-10 select-none mt-20 mb-10 w-full flex flex-col items-center">
                <PaymentFieldDetail name="Futsal Rooftop RPC" review="9" city="Kota Jakarta Timur" date="Senin, 1 Januari 2020" time="13:00 - 14:00" />
                <PaymentUserDetail />
                <PaymentChoose price={5000} />

                <div className="w-1/2 flex justify-center mt-12">
                    <LandingPageButton>Bayar Sekarang</LandingPageButton>
                </div>

                <ContactSections />
            </div>
        </Fragment>
    )
}

export default PaymentPage;