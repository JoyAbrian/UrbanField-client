const ReviewCard = (props) => {
    const {name, date, rating, review} = props;
    return (
        <div className="border border-black bg-slate-50 rounded-lg py-3 px-5 w-1/2">
            <div className="items-center flex justify-between">
                <div className="flex w-fit items-center">
                    <img src="/img/userIcon.png" alt="user" className="w-12"/>
                    <div className="font-Poppins ml-2">
                        <p className="font-medium">{name}</p>
                        <span className="text-sm">{date}</span>
                    </div>
                </div>
                <div className="font-Poppins ml-2 justify-end">
                    <p className="font-medium">{rating}/10</p>
                </div>
            </div>
            <p className="mt-4 mb-8 font-Poppins font-medium">{review}</p>
        </div>
    )
}

export default ReviewCard;