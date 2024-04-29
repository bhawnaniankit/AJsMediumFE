import AuthorCard from "./AuthorCard";
import { ToastContainer } from "react-toastify";
import InidiBlog from "./Blog";
import { useParams } from "react-router-dom";
import {useBlog} from "../hooks/useBlog";

const BlogCompo = () => {
    const { id } = useParams();
    const { loading, indiBlog } = useBlog({
        id: id || ""
    });

  return (
    <div>
        <div className=" flex-col md:flex-row flex gap-8 mx-10 my-6 md:mx-44 md:my-10">
            <InidiBlog data={indiBlog}></InidiBlog>
            <AuthorCard data={indiBlog.author}></AuthorCard>
        </div>
            <ToastContainer position="bottom-right"></ToastContainer>
    </div>
  )
}

export default BlogCompo