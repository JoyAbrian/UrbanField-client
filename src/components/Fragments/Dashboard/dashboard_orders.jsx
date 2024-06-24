import{ useState, useEffect } from 'react';
import axios from 'axios';

const DashboardOrder = () => {
    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/bookings');
            setBookings(response.data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

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
                        {bookings.map(booking => (
                            <tr key={booking.id}>
                                <td className="py-4">{booking.id}</td>
                                <td className="py-4">{booking.user_name}</td>
                                <td className="py-4">{booking.field_name}</td>
                                <td className="py-4">{booking.date}</td>
                                <td className="py-4">{booking.time}</td>
                                <td className="py-4">{booking.payment_method_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardOrder;
