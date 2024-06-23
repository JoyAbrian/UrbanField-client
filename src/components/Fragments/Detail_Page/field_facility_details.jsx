import FacilityCard from "../../Elements/Card/FacilityCard";

const FieldFacilityDetails = () => {
    return (
        <div className="mt-10 mx-28 w-3/5">
            <h3 className="text-3xl font-bold">Fasilitas</h3>
            <div className="grid grid-cols-3 gap-6 mt-7">
                <FacilityCard facility="Parkir Mobil" image="car"/>
                <FacilityCard facility="Musholla" image="musholla"/>
                <FacilityCard facility="Ruang Ganti" image="hanger"/>
                <FacilityCard facility="Toilet" image="toilet"/>
                <FacilityCard facility="Kantin" image="cafe"/>
            </div>
        </div>
    )
}

export default FieldFacilityDetails;