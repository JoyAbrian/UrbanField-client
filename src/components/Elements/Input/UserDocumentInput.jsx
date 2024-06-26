import React, { useState } from 'react';

const UserDocumentInput = () => {
    const [imageUrl, setImageUrl] = useState(null);

    // Function to handle file upload
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result); // Set the image URL after reading the file
            };
            reader.readAsDataURL(file); // Read file as data URL
        }
    };

    return (
        <div className="font-Poppins mt-4 text-sm w-1/2">
            <label htmlFor="uploadInput" className="font-semibold ml-3 cursor-pointer">
                Foto KTP <span className="text-red-500">*</span>
            </label>
            <div className="w-full p-8 flex justify-center bg-gray-50 rounded-lg border border-gray-300">
                {imageUrl ? (
                    <img src={imageUrl} alt="uploaded" className="w-32 object-cover rounded-lg" />
                ) : (
                    <img src="/img/imgInput.png" alt="upload" className="w-32 object-cover rounded-lg" />
                )}
            </div>
            <input
                id="uploadInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default UserDocumentInput;
