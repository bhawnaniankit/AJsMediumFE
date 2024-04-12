import { useParams } from "react-router-dom"
import InidiBlog from "../components/Blog";
import { useBlog } from "../hooks/useBlog"
import AuthorCard from "../components/AuthorCard";
import AppBar from "../components/AppBar";

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
            <AppBar></AppBar>
            <div className=" flex gap-8 mx-52 my-10">
                <InidiBlog data={indiBlog}></InidiBlog>
                <AuthorCard data={indiBlog.author}></AuthorCard>
            </div>
        </>
    )
}
