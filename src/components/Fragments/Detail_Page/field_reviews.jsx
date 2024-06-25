import React, { useState, useEffect } from "react";
import ReviewCard from "../../Elements/Card/ReviewCard";

const FieldReviews = ({ fieldId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, [fieldId]);

    const fetchReviews = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/fields/${fieldId}/reviews`);
            if (!response.ok) {
                throw new Error("Failed to fetch reviews");
            }
            const reviewsData = await response.json();
            setReviews(reviewsData);
        } catch (error) {
            console.error("Error fetching reviews:", error);
            // Handle error (show message, retry logic, etc.)
        }
    };

    return (
        <div className="mt-20 mx-56 mb-60">
            <div className="flex items-center ml-2">
                <img src="/img/reviewIcon.png" alt="review" className="w-14" />
                <h2 className="ml-5 text-4xl font-Poppins font-semibold">Reviews</h2>
            </div>

            <div className="flex gap-48 mt-8">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        name="Anonim"
                        date={review.date}
                        rating={review.rating}
                        review={review.review}
                    />
                ))}
            </div>
        </div>
    );
};

export default FieldReviews;