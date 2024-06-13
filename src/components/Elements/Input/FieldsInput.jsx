const FieldsInput = (props) => {
    const { image, placeholder } = props;
    return (
        <div className="w-1/4 h-16 flex border border-zinc-600 rounded-2xl p-5">
            <img src={image}/>
            <input placeholder={placeholder} className="text-xl font-Poppins ml-5 w-full outline-none"/>
        </div>
    );
}

export default FieldsInput;