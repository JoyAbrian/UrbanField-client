const FieldsInput = (props) => {
    const { name, image, placeholder, value, onChange } = props;
    return (
        <div className="w-1/4 h-16 flex border border-zinc-600 rounded-2xl p-5">
            <img src={image} alt="icon" />
            <input 
                name={name}
                placeholder={placeholder}
                className="text-xl font-Poppins ml-5 w-full outline-none"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default FieldsInput;