import { useParams } from "react-router-dom"
import InidiBlog from "../components/Blog";
import { useBlog } from "../hooks/useBlog"
import AuthorCard from "../components/AuthorCard";
import AppBar from "../components/AppBar";
import { userGlobal } from "./Blogs";

export const Blog = () => {
    const { id } = useParams();
    const { loading, indiBlog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return <div>
            ...loading
        </div>
    }

    return (
        <>
            <AppBar author={userGlobal.name}></AppBar>
            <div className=" flex-col md:flex-row flex gap-8 mx-10 my-6 md:mx-44 md:my-10">
                <InidiBlog data={indiBlog}></InidiBlog>
                <AuthorCard data={indiBlog.author}></AuthorCard>
            </div>
        </>
    )
}
