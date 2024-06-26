import { useState } from "react";
import PaymentCard from "../../Elements/Card/PaymentCard";

const PaymentChoose = ({ priceM, onPaymentMethodSelect }) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (cardId) => {
        setSelectedCard(cardId);
        onPaymentMethodSelect(cardId);
    };

    const priceRp = priceM.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

    return (
        <div className="w-1/2 shadow-lg shadow-slate-400 rounded-xl px-8 pb-5 mt-10">
            <div className="flex items-center">
                <img src="/img/listIcon.png" alt="field" className="w-12 object-cover rounded-l-lg" />
                <h1 className="ml-4 text-2xl font-Poppins font-semibold">Metode Pembayaran</h1>
            </div>
            <div className="w-full h-0 border-t border-dashed border-slate-400 mt-5" />

            <PaymentCard 
                image="/img/payment/bca.png" 
                name="BCA" 
                type="Virtual Account" 
                price={`Rp . ${priceRp.toLocaleString('id-ID')}`} 
                onCardClick={() => handleCardClick('1')} 
                checked={selectedCard === '1'} 
            />
            <PaymentCard 
                image="/img/payment/bni.png" 
                name="BNI" 
                type="Virtual Account" 
                price={`Rp. ${priceRp.toLocaleString('id-ID')}`}
                onCardClick={() => handleCardClick('2')} 
                checked={selectedCard === '2'} 
            />
            <PaymentCard 
                image="/img/payment/bri.png" 
                name="BRI" 
                type="Virtual Account" 
                price={`Rp. ${priceRp.toLocaleString('id-ID')}`} 
                onCardClick={() => handleCardClick('3')} 
                checked={selectedCard === '3'} 
            />
            <PaymentCard 
                image="/img/payment/gopay.png" 
                name="GoPay" 
                price={`Rp. ${priceRp.toLocaleString('id-ID')}`} 
                onCardClick={() => handleCardClick('4')} 
                checked={selectedCard === '4'} 
            />
            <PaymentCard 
                image="/img/payment/ovo.png" 
                name="OVO" 
                price={`Rp. ${priceRp.toLocaleString('id-ID')}`} 
                onCardClick={() => handleCardClick('5')} 
                checked={selectedCard === '5'} 
            />
            <PaymentCard 
                image="/img/payment/dana.png" 
                name="Dana" 
                price={`Rp. ${priceRp.toLocaleString('id-ID')}`} 
                onCardClick={() => handleCardClick('6')} 
                checked={selectedCard === '6'} 
            />
            <PaymentCard 
                image="/img/payment/qris.png" 
                name="QRIS" 
                price={`Rp. ${priceRp.toLocaleString('id-ID')}`}
                onCardClick={() => handleCardClick('7')} 
                checked={selectedCard === '7'} 
            />
        </div>
    );
};

export default PaymentChoose;