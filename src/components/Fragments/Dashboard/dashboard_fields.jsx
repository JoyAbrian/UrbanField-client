import { useState, useEffect } from 'react';
import DashboardFieldCard from '../../Elements/Card/DashboardFieldCard';
import { getFields } from '../../../services/db/field.service';

const DashboardFields = () => {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        getFields().then((data) => {
            setFields(data);
        });
    }, []);

    return (
        <div className="mt-5 mx-10 font-Inter font-medium">
            <div className="mx-4 flex justify-between">
                <h1 className="text-2xl font-medium">Lapangan</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
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
        </div>
    );
};

export default DashboardFields;
