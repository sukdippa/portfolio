import Tag from "../components/Tag";

const Card = ({ title, description, image, tag1, tag2, tag3, tag4 }) => {
    return (
        <div className="relative group flex flex-col md:flex-row md:w-[30rem] md:h-[15rem] h-[30rem] w-[15rem] rounded-3xl bg-[rgb(252,252,254)] border border-[rgb(238,245,248)] mx-4 p-5 gap-4" style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}>
            <div className="aspect-square md:w-auto w-full">
                <img src={image} alt="forest" className="w-auto h-full rounded-lg object-cover" />
            </div>
            <div className="flex flex-col justify-start items-start min-w-[12rem]">
                <div className="p-4">
                    <div className="text-xl font-semibold text-[rgb(108,122,140)]">
                        {title}
                    </div>
                    <p className="text-[rgb(156,156,167)] leading-none my-2 text-sm">
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 px-3">
                    {tag1 && <Tag label={tag1} />}
                    {tag2 && <Tag label={tag2} />}
                    {tag3 && <Tag label={tag3} />}
                    {tag4 && <Tag label={tag4} />}
                </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 rounded-3xl pointer-events-none transition duration-300 group-hover:bg-opacity-5"></div>
        </div>
        
    );
};
export default Card;