const UserDocumentInput = () => {
    return (
        <div className="font-Poppins mt-4 text-sm w-1/2">
            <label className="font-semibold ml-3">Foto KTP <span className="text-red-500">*</span></label>
            <div className="w-full p-8 flex justify-center bg-gray-50 rounded-lg border border-gray-300">
                <img src="img/imgInput.png" alt="upload" className="w-32 object-cover rounded-lg"/>
            </div>
        </div>
    )
}

export default UserDocumentInput;