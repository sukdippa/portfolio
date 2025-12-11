import { on } from "events";
import Tag from "../components/Tag";
import Link from "next/link";

const Card = ({ title, description, image, tag1, tag2, tag3, tag4, tag5, link }) => {
    return (
        <Link className="relative group flex flex-col max-w-[40rem] w-auto md:w-full rounded-3xl bg-[rgba(252,252,254,0.1)] border border-border m-4 p-5 gap-4 overflow-hidden"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
            href={link ? link : '#'}
            >
            <div className="aspect-[3/2] md:w-auto w-full">
                <img src={image} alt={`Image of ${title}`} className="w-full h-full rounded-lg object-cover" />
            </div>
            <div className="flex flex-col justify-start items-start min-w-[12rem]">
                <div>
                    <div className="text-xl font-semibold text-[rgb(108,122,140)]">
                        {title}
                    </div>
                    <p className="text-[rgb(156,156,167)] leading-none my-2 text-sm">
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {tag1 && <Tag label={tag1} />}
                    {tag2 && <Tag label={tag2} />}
                    {tag3 && <Tag label={tag3} />}
                    {tag4 && <Tag label={tag4} />}
                    {tag5 && <Tag label={tag5} />}
                </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 pointer-events-none transition duration-300 group-hover:bg-opacity-5"></div>
        </Link>
    );
};
export default Card;