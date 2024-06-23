import ReviewCard from "../../Elements/Card/ReviewCard"

const FieldReviews = () => {
    return (
        <div className="mt-20 mx-56 mb-60">
            <div className="flex items-center ml-2">
                <img src="/img/reviewIcon.png" alt="date" className="w-14"/>
                <h2 className="ml-5 text-4xl font-Poppins font-semibold">Review</h2>
            </div>

            <div className="flex gap-48 mt-8">
                <ReviewCard name="Iswari" date="02 Mei 2024" rating="9" review="Lapangan dan fasilitasnya keren!"/>
                <ReviewCard name="Iswari" date="02 Mei 2024" rating="9" review="Lapangan dan fasilitasnya keren!"/>
            </div>
        </div>
    )
}

export default FieldReviews;