import axios from "axios";

export const getUsers = () => {
    return axios.get("http://127.0.0.1:5000/users")
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            return [];
        });
};