import  { useState, useEffect } from 'react';
import DashboardFieldCard from '../../Elements/Card/DashboardFieldCard';
import { getFields, updateField, createField } from '../../../services/db/field.service';
import FieldModal from '../../Elements/Modal/FieldModal';

const DashboardFields = () => {
    const [fields, setFields] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedField, setSelectedField] = useState(null);

    useEffect(() => {
        getFields().then((data) => {
            setFields(data);
        });
    }, []);

    const toggleModal = (field = null) => {
        setSelectedField(field);
        setShowModal(!showModal);
    };

    const handleFormSubmit = async (formData) => {
        if (selectedField) {
            await updateField(selectedField.id, formData);
        } else {
            await createField(formData);
        }
        const updatedFields = await getFields();
        setFields(updatedFields);
    };

    return (
        <div className="mt-5 mx-10 font-Inter font-medium">
            <div className="mx-4 flex justify-between">
                <h1 className="text-2xl font-medium">Lapangan</h1>
                <button 
                    onClick={() => toggleModal()} 
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
                        onClick={() => toggleModal(field)}
                    />
                ))}
            </div>

            <FieldModal showModal={showModal} toggleModal={toggleModal} field={selectedField} onSubmit={handleFormSubmit} />
        </div>
    );
};

export default DashboardFields;