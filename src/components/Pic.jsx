const Pic = ({ image, text, description, textPosition = "bottom", width, height }) => {
    if (textPosition === "right") {
        return (
            <div className="grid grid-cols-2 gap-4 items-start">
                <img src={image} alt={`Artwork: ${text}`} className="w-full" />
                <div className="flex flex-col p-8">
                    <p className="my-2">{text}</p>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col h-auto w-auto max-h-full">
            <img src={image} alt={`Artwork: ${text}`} width={width} height={height} />
            <p className="my-2">{text}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
};
export default Pic;