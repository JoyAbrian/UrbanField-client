import { useState } from "react";
import PaymentCard from "../../Elements/Card/PaymentCard";

const PaymentChoose = (props) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const handleCardClick = (cardId) => {
        setSelectedCard(cardId);
    };

    const { price } = props;
    const priceRp = price.toLocaleString('id-ID', {style: 'currency', currency:'IDR'})

    return (
        <div className="w-1/2 shadow-lg shadow-slate-400 rounded-xl px-8 pb-5 mt-10">
            <div className="flex items-center">
                <img src="img/listIcon.png" alt="field" className="w-12 object-cover rounded-l-lg"/>
                <h1 className="ml-4 text-2xl font-Poppins font-semibold">Metode Pembayaran</h1>
            </div>
            <div className="w-full h-0 border-t border-dashed border-slate-400 mt-5"/>

            <PaymentCard 
                image="img/payment/bca.png" 
                name="BCA" 
                type="Virtual Account" 
                price={priceRp} 
                onCardClick={() => handleCardClick('card1')} 
                checked={selectedCard === 'card1'} 
            />
            <PaymentCard 
                image="img/payment/bni.png" 
                name="BNI" 
                type="Virtual Account" 
                price={priceRp} 
                onCardClick={() => handleCardClick('card2')} 
                checked={selectedCard === 'card2'} 
            />
            <PaymentCard 
                image="img/payment/bri.png" 
                name="BRI" 
                type="Virtual Account" 
                price={priceRp} 
                onCardClick={() => handleCardClick('card3')} 
                checked={selectedCard === 'card3'} 
            />
            <PaymentCard 
                image="img/payment/gopay.png" 
                name="GoPay" 
                price={priceRp} 
                onCardClick={() => handleCardClick('card4')} 
                checked={selectedCard === 'card4'} 
            />
            <PaymentCard 
                image="img/payment/ovo.png" 
                name="OVO" 
                price={priceRp} 
                onCardClick={() => handleCardClick('card5')} 
                checked={selectedCard === 'card5'} 
            />
            <PaymentCard 
                image="img/payment/dana.png" 
                name="Dana" 
                price={priceRp} 
                onCardClick={() => handleCardClick('card6')} 
                checked={selectedCard === 'card6'} 
            />
            <PaymentCard 
                image="img/payment/qris.png" 
                name="QRIS" 
                price={priceRp} 
                onCardClick={() => handleCardClick('card7')} 
                checked={selectedCard === 'card7'} 
            />
        </div>
    )
}

export default PaymentChoose;