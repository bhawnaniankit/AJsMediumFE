import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";

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
            <div className=" flex md:flex-col flex-col-reverse gap-2">
                <div className=" text-xl flex items-center gap-1">
                    <CgProfile></CgProfile>
                    <div className=" text-xs font">{author} <span className=" text-slate-400"> &#x2022; {publishedDate}</span></div>
                </div>
                <div className=" font-bold text-xl">{title}</div>
                <div className="hidden md:block font-serif mb-8">{content}</div>
                <hr />
            </div >
        </Link>
    )
}

export default BlogCard