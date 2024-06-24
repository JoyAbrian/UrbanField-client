import { useEffect, useState } from "react";
import FacilityCard from "../../Elements/Card/FacilityCard";
import { getFieldFacilities } from "../../../services/db/field.service";

const FieldFacilityDetails = (props) => {
    const { field_id } = props;
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        getFieldFacilities(field_id).then((data) => {
            setFacilities(data);
        });
    }, [field_id]);

    return (
        <div className="mt-10 mx-28 w-3/5">
            <h3 className="text-3xl font-bold">Fasilitas</h3>
            <div className="grid grid-cols-3 gap-6 mt-7">
                {facilities.map((facility) => (
                    <FacilityCard key={facility.id} facility={facility.name} image={facility.icon}/>
                ))}
            </div>
        </div>
    );
}

export default FieldFacilityDetails;
