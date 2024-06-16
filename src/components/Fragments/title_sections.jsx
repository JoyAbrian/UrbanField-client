const TitleSections = (props) => {
    const { title } = props;
    return (
        <div className="bg-gradient-to-r from-cyan-600 via-sky-900 to-gray-800 w-full h-[116px] justify-center flex items-center select-none">
            <h1 className="text-white font-Poppins font-bold text-4xl">{title}</h1>
        </div>
    )
}

export default TitleSections;