const DashboardUser = () => {
    return (
        <div className="mt-5 mx-10 font-Inter font-medium">
            <div className="ml-4">
                <h1 className="text-2xl font-bold">Users</h1>
            </div>
            <div className="mt-8 mx-12">
                <table className="w-full">
                    <thead className="border-b-[1px] border-gray-800">
                        <tr>
                            <th className="text-left font-medium py-4">ID</th>
                            <th className="text-left font-medium py-4">NAMA</th>
                            <th className="text-left font-medium py-4">PHONE NUMBER</th>
                            <th className="text-left font-medium py-4">E-MAIL</th>
                        </tr>
                    </thead>
                    <tbody className="mt-4">
                        <tr className="border-b-[0.5px] border-gray-200">
                            <td className="py-2 pt-4">1</td>
                            <td className="py-2 pt-4">Joy</td>
                            <td className="py-2 pt-4">08123456789</td>
                            <td className="py-2 pt-4">example@gmail.com</td>
                        </tr>
                        <tr className="border-b-[0.5px] border-gray-200">
                            <td className="py-2 pt-4">2</td>
                            <td className="py-2 pt-4">Joy</td>
                            <td className="py-2 pt-4">08123456789</td>
                            <td className="py-2 pt-4">example@gmail.com</td>
                        </tr>
                        <tr className="border-b-[0.5px] border-gray-200">
                            <td className="py-2 pt-4">3</td>
                            <td className="py-2 pt-4">Joy</td>
                            <td className="py-2 pt-4">08123456789</td>
                            <td className="py-2 pt-4">example@gmail.com</td>
                        </tr>
                        <tr className="border-b-[0.5px] border-gray-200">
                            <td className="py-2 pt-4">4</td>
                            <td className="py-2 pt-4">Joy</td>
                            <td className="py-2 pt-4">08123456789</td>
                            <td className="py-2 pt-4">example@gmail.com</td>
                        </tr>
                        <tr className="border-b-[0.5px] border-gray-200">
                            <td className="py-2 pt-4">5</td>
                            <td className="py-2 pt-4">Joy</td>
                            <td className="py-2 pt-4">08123456789</td>
                            <td className="py-2 pt-4">example@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashboardUser;