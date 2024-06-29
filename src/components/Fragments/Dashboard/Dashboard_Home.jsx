import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const DashboardHome = () => {
  const [user, setUser] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/login';
    } else {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.sub;

        fetchUser(userId);
      } catch (error) {
        console.error('Error decoding token:', error);
        window.location.href = '/login';
      }
    }
  }, []);

  const fetchUser = async (userId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  return (
    <div className="p-6 flex-grow bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <img src="/img/dashboard_item/dashboard_anonym.png" alt="Profile" className="w-16 h-16 rounded-full" />
            </div>
          </div>
          <div className="ml-4">
            <div className="text-lg font-medium text-gray-900">{user.id} | {user.username}</div>
            <div className="text-gray-500">
              <p>Role: {user.role}</p>
              <p>Email: {user.email}</p>
              <p>Phone Number: {user.phone_number}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-gray-500">DOC:</div>
          {imageUrl ? (
            <img src={imageUrl} alt="Document" className="mt-4 rounded-lg shadow-lg"/>
          ) : (
            <img src="/img/dashboard_item/ktp_dummy.png" alt="Document" className="mt-4 rounded-lg shadow-lg"/>
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} className="mt-4 block w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"/>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardHome;