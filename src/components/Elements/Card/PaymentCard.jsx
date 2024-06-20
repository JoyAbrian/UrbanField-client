const PaymentCard = (props) => {
    const {image, name, type, price, onCardClick, checked } = props;
    return (
        <label className="flex items-center my-3 shadow-md rounded-xl py-3 px-5 shadow-slate-400 mt-5 cursor-pointer" onClick={onCardClick}>
            <img src={image} alt="visa" className="w-14 object-cover" />
            <div className="font-Poppins ml-3">
                <h3 className="text-lg font-semibold">{name}</h3>
                {type && <p className="text-gray-600">{type}</p>}
            </div>

            <div className="ml-auto flex items-center">
                <span className="text-slate-500 text-lg mr-2 font-Poppins">{price}</span>
                <input type="radio" name="payment" className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" checked={checked} readOnly />
            </div>
        </label>
    )
}

export default PaymentCard;