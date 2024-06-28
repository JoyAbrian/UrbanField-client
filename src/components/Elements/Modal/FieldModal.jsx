import React, { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseStorage } from '../../../services/firebase.service';

const FieldModal = ({ showModal, toggleModal, field, onSubmit }) => {
    const [formData, setFormData] = useState({
        nama: '',
        tipe: 'futsal',
        city: '',
        address: '',
        street: '',
        price: '',
        opening: '',
        closing: '',
        image1: null,
        image2: null,
        image3: null,
        facilities: [],
    });
    const [imagePreviews, setImagePreviews] = useState({
        image1: null,
        image2: null,
        image3: null,
    });

    useEffect(() => {
        if (field) {
            setFormData({
                nama: field.name || '',
                tipe: field.type || 'futsal',
                city: field.city || '',
                address: field.address || '',
                street: field.street_address || '',
                price: field.price_per_hour || '',
                opening: field.opening_time || '',
                closing: field.closing_time || '',
                image1: field.image_url || null,
                image2: field.image_url2 || null,
                image3: field.image_url3 || null,
                facilities: field.facilities || [],
            });
            setImagePreviews({
                image1: field.image_url || null,
                image2: field.image_url2 || null,
                image3: field.image_url3 || null,
            });
        }
    }, [field]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];
        setFormData({ ...formData, [name]: file });

        // Update image preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreviews(prevState => ({ ...prevState, [name]: reader.result }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        const facilities = checked
            ? [...formData.facilities, value]
            : formData.facilities.filter(facility => facility !== value);
        setFormData({ ...formData, facilities });
    };

    const uploadImageToFirebase = async (image) => {
        if (!image) return null;

        const storageRef = ref(firebaseStorage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);

        return downloadURL;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const imageUrls = await Promise.all([
                uploadImageToFirebase(formData.image1),
                uploadImageToFirebase(formData.image2),
                uploadImageToFirebase(formData.image3),
            ]);

            const fieldData = {
                ...formData,
                image_url: imageUrls[0],
                image_url2: imageUrls[1],
                image_url3: imageUrls[2],
            };

            // Post data to your backend API
            const response = await fetch('http://127.0.0.1:5000/fields', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fieldData),
            });
        

            if (!response.ok) {
                throw new Error('Failed to save field data');
            }

            const result = await response.json();
            console.log('Field saved successfully:', result);

            // Close the modal
            toggleModal();
        } catch (error) {
            console.error('Error saving field:', error);
        }
    };

    const handleDelete = async () => {
        if (!field || !field.id) return;

        try {
            const response = await fetch(`http://127.0.0.1:5000/fields/${field.id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete field data');
            }

            const result = await response.json();
            console.log('Field deleted successfully:', result);

            // Close the modal
            toggleModal();
        } catch (error) {
            console.error('Error deleting field:', error);
        }
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-l-lg shadow-lg w-full max-w-sm relative h-full overflow-auto">
                <span 
                    className="cursor-pointer text-xl font-bold absolute top-4 right-4"
                    onClick={toggleModal}
                >
                    &times;
                </span>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama Lapangan:</label>
                    <input type="text" id="nama" name="nama" value={formData.nama} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                    <label htmlFor="tipe" className="block text-sm font-medium text-gray-700">Tipe Lapangan:</label>
                    <select id="tipe" name="tipe" value={formData.tipe} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4">
                        <option value="futsal">Futsal</option>
                        <option value="badminton">Badminton</option>
                        <option value="voli">Voli</option>
                    </select>

                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
                    <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                    <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street Address:</label>
                    <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price/Hour:</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                    <label htmlFor="opening" className="block text-sm font-medium text-gray-700">Opening:</label>
                    <input type="time" id="opening" name="opening" value={formData.opening} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                    <label htmlFor="closing" className="block text-sm font-medium text-gray-700">Closing:</label>
                    <input type="time" id="closing" name="closing" value={formData.closing} onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                    <label htmlFor="image1" className="block text-sm font-medium text-gray-700">Image 1:</label>
                    <input type="file" id="image1" name="image1" onChange={handleFileChange} className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />
                    {imagePreviews.image1 && <img src={imagePreviews.image1} alt="Preview" className="mt-2 w-full" />}

                    <label htmlFor="image2" className="block text-sm font-medium text-gray-700">Image 2:</label>
                    <input type="file" id="image2" name="image2" onChange={handleFileChange} className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />
                    {imagePreviews.image2 && <img src={imagePreviews.image2} alt="Preview" className="mt-2 w-full" />}

                    <label htmlFor="image3" className="block text-sm font-medium text-gray-700">Image 3:</label>
                    <input type="file" id="image3" name="image3" onChange={handleFileChange} className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />
                    {imagePreviews.image3 && <img src={imagePreviews.image3} alt="Preview" className="mt-2 w-full" />}

                    <label htmlFor="facilities" className="block text-sm font-medium text-gray-700">Fasilitas:</label>
                    <div className="mb-4">
                        <input type="checkbox" id="parkiran" name="facilities" value="parkiran" checked={formData.facilities.includes('parkiran')} onChange={handleCheckboxChange} className="mr-2" />
                        <label htmlFor="parkiran" className="ml-2">Parkiran</label>
                        <br />
                        <input type="checkbox" id="musholla" name="facilities" value="musholla" checked={formData.facilities.includes('musholla')} onChange={handleCheckboxChange} className="mr-2" />
                        <label htmlFor="musholla" className="ml-2">Musholla</label>
                        <br />
                        <input type="checkbox" id="ruangGanti" name="facilities" value="ruangGanti" checked={formData.facilities.includes('ruangGanti')} onChange={handleCheckboxChange} className="mr-2" />
                        <label htmlFor="ruangGanti" className="ml-2">Ruang Ganti</label>
                        <br />
                        <input type="checkbox" id="kantin" name="facilities" value="kantin" checked={formData.facilities.includes('kantin')} onChange={handleCheckboxChange} className="mr-2" />
                        <label htmlFor="kantin" className="ml-2">Kantin</label>
                        <br />
                        <input type="checkbox" id="toilet" name="facilities" value="toilet" checked={formData.facilities.includes('toilet')} onChange={handleCheckboxChange} className="mr-2" />
                        <label htmlFor="toilet" className="ml-2">Toilet</label>
                    </div>

                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {field ? 'Update' : 'Save'}
                        </button>
                        {field && (
                            <button type="button" onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Delete
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FieldModal;
