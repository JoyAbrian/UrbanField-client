const DashboardOrder = () => {
    return (
        <div className="mt-5 mx-10 font-Inter font-medium">
            <div className="ml-4">
                <h1 className="text-2xl font-bold">ORDER LIST</h1>
            </div>
            <div className="mt-8 mx-12">
                <table className="w-full">
                    <thead className="border-b-[1px] border-gray-800">
                        <tr>
                            <th className="text-left font-medium py-4">ORDER ID</th>
                            <th className="text-left font-medium py-4">NAME</th>
                            <th className="text-left font-medium py-4">FIELD</th>
                            <th className="text-left font-medium py-4">DATE</th>
                            <th className="text-left font-medium py-4">TIME</th>
                            <th className="text-left font-medium py-4">PAYMENT</th>
                        </tr>
                    </thead>
                    <tbody className="mt-4">
                        <tr>
                            <td className="py-4">1</td>
                            <td className="py-4">Joy</td>
                            <td className="py-4">Lapangan Merdeka</td>
                            <td className="py-4">12-12-2021</td>
                            <td className="py-4">12:00 - 13:00</td>
                            <td className="py-4">BCA</td>
                        </tr>
                        <tr>
                            <td className="py-4">2</td>
                            <td className="py-4">Joy</td>
                            <td className="py-4">Lapangan Merdeka</td>
                            <td className="py-4">12-12-2021</td>
                            <td className="py-4">12:00 - 13:00</td>
                            <td className="py-4">BCA</td>
                        </tr>
                        <tr>
                            <td className="py-4">3</td>
                            <td className="py-4">Joy</td>
                            <td className="py-4">Lapangan Merdeka</td>
                            <td className="py-4">12-12-2021</td>
                            <td className="py-4">12:00 - 13:00</td>
                            <td className="py-4">BCA</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardOrder;