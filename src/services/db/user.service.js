import axios from "axios";

export const getUsers = () => {
    return axios.get("http://127.0.0.1:5000/users")
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            return [];
        });
};

export const registerUser = () => {
    return axios.post("http://127.0.0.1:5000/users")
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

// export const deleteUser = () => {
//     return 
// }