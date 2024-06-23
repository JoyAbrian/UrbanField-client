import DashboardFieldCard from "../../Elements/Card/DashboardFieldCard";

const DashboardFields = () => {
    return (
        <div className="mt-5 mx-10 font-Inter font-medium">
            <div className="mx-4 flex justify-between">
                <h1 className="text-2xl font-medium">Lapangan</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <DashboardFieldCard name="Lapangan Merdeka" description="Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod." />
                <DashboardFieldCard name="Lapangan Merdeka" description="Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod." />
                <DashboardFieldCard name="Lapangan Merdeka" description="Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod." />
                <DashboardFieldCard name="Lapangan Merdeka" description="Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod." />
            </div>
        </div>
    )
}

export default DashboardFields;