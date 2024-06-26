const UserDataInput = (props) => {
    const {name, placeholder, value} = props;
    return (
        <div className="font-Poppins w-full mt-4 text-sm">
            <label className="font-semibold ml-3">{name} <span className="text-red-500">*</span></label>
            <div className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300">
                <input className="text-black bg-transparent w-full outline-none" placeholder={placeholder} value={value}/>
            </div>
        </div>
    )
}

export default UserDataInput;