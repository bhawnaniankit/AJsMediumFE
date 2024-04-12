import { Link } from "react-router-dom"

interface blogCardProps {
    id: string,
    author: string,
    title: string,
    content: string,
    publishedDate: string
}

const BlogCard = ({ author, title, content, publishedDate, id }: blogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className=" flex flex-col gap-1">
                <div className=" flex items-center gap-1">
                    <Avatar name={author} size={"5"} fontsize="xs" />
                    <div className=" text-xs font">{author} <span className=" text-slate-400"> &#x2022; {publishedDate}</span></div>
                </div>
                <div className=" font-bold text-xl">{title}</div>
                <div className=" font-serif mb-8">{content}</div>
                <hr />
            </div >
        </Link>
    )
}

export function Avatar({ size, name }: { size: number, name: string }) {

    return <div className={` cursor-pointer flex items-center justify-center bg-gray-500 text-white rounded-full h-${size} w-${size} text-center`}>
        <div>
            {name[0]}
        </div>
    </div>


}
export default BlogCard