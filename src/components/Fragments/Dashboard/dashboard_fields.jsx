import { useState, useEffect } from 'react';
import DashboardFieldCard from '../../Elements/Card/DashboardFieldCard';
import { getFields } from '../../../services/db/field.service';

const DashboardFields = () => {
    const [fields, setFields] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getFields().then((data) => {
            setFields(data);
        });
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="mt-5 mx-10 font-Inter font-medium">
            <div className="mx-4 flex justify-between">
                <h1 className="text-2xl font-medium">Lapangan</h1>
                <button 
                    onClick={toggleModal} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {fields.map(field => (
                    <DashboardFieldCard 
                        key={field.id} 
                        name={field.name} 
                        image={field.image_url} 
                        description={field.address}
                    />
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-l-lg shadow-lg w-full max-w-sm relative h-full overflow-auto">
                        <span 
                            className="cursor-pointer text-xl font-bold absolute top-4 right-4"
                            onClick={toggleModal}
                        >
                            &times;
                        </span>
                        <form>
                            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama Lapangan:</label>
                            <input type="text" id="nama" name="nama" className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                            <label htmlFor="tipe" className="block text-sm font-medium text-gray-700">Tipe Lapangan:</label>
                            <select id="tipe" name="tipe" className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4">
                                <option value="futsal">Futsal</option>
                                <option value="badminton">Badminton</option>
                            </select>

                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
                            <input type="text" id="city" name="city" className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                            <input type="text" id="address" name="address" className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                            <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street Address:</label>
                            <input type="text" id="street" name="street" className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price/Hour:</label>
                            <input type="text" id="price" name="price" className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                            <label htmlFor="opening" className="block text-sm font-medium text-gray-700">Opening:</label>
                            <input type="text" id="opening" name="opening" className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                            <label htmlFor="closing" className="block text-sm font-medium text-gray-700">Closing:</label>
                            <input type="text" id="closing" name="closing" className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                            <label htmlFor="image1" className="block text-sm font-medium text-gray-700">Image 1:</label>
                            <input type="file" id="image1" name="image1" className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                            <label htmlFor="image2" className="block text-sm font-medium text-gray-700">Image 2:</label>
                            <input type="file" id="image2" name="image2" className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                            <label htmlFor="image3" className="block text-sm font-medium text-gray-700">Image 3:</label>
                            <input type="file" id="image3" name="image3" className="block w-full p-2 border border-gray-300 rounded mt-1 mb-4" />

                            <label htmlFor="facilities" className="block text-sm font-medium text-gray-700">Fasilitas:</label>
                            <div className="mb-4">
                                <input type="checkbox" id="parkiran" name="facilities" value="parkiran" className="mr-2" />
                                <label htmlFor="parkiran" className="ml-2">Parkiran</label>
                                <br />
                                <input type="checkbox" id="musholla" name="facilities" value="musholla" className="mr-2" />
                                <label htmlFor="musholla" className="ml-2">Musholla</label>
                                <br />
                                <input type="checkbox" id="ruangGanti" name="facilities" value="ruangGanti" className="mr-2" />
                                <label htmlFor="ruangGanti" className="ml-2">Ruang Ganti</label>
                                <br />
                                <input type="checkbox" id="kantin" name="facilities" value="kantin" className="mr-2" />
                                <label htmlFor="kantin" className="ml-2">Kantin</label>
                                <br />
                                <input type="checkbox" id="toilet" name="facilities" value="toilet" className="mr-2" />
                                <label htmlFor="toilet" className="ml-2">Toilet</label>
                            </div>

                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardFields;
