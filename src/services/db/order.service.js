import axios from "axios";

export const getOrders = () => {
    return axios.get("http://localhost:5000/bookings")
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            return [];
        });
};