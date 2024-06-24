import axios from "axios";

export const getFields = () => {
    return axios.get("http://127.0.0.1:5000/fields")
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            return [];
        });
};