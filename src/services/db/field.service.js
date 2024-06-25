import axios from "axios";

export const getFields = () => {
    return axios.get("http://127.0.0.1:5000/fields")
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            return [];
        });
};

export const getFieldById = (id) => {
    return axios.get(`http://127.0.0.1:5000/fields/${id}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            return {};
        });
};

export const getFieldFacilities = (id) => {
    return axios.get(`http://127.0.0.1:5000/fields/${id}/facilities`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            return [];
        });
}

export const createField = (formData) => {
    return axios.post("http://127.0.0.1:5000/fields", formData)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            throw err;
        });
}

export const updateField = (id, formData) => {
    return axios.put(`http://127.0.0.1:5000/fields/${id}`, formData)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            throw err;
        });
}
