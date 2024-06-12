const LandingPageButton = (props) => {
    const { textsize = '2xl', paddingX='12', paddingY='8', children = '...', onClick = () => {}, type = 'button' } = props;
    return (
        <button
            className={`h-12 px-${paddingX} py-${paddingY} font-semibold text-${textsize} bg-gradient-to-r from-gray-800 via-sky-900 to-cyan-600 text-white rounded-full flex items-center justify-center`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default LandingPageButton;