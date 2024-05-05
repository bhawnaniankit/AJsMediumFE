import AuthorCard from "./AuthorCard";
import { ToastContainer } from "react-toastify";
import InidiBlog from "./Blog";
import { useParams } from "react-router-dom";
import {useBlog} from "../hooks/useBlog";
import { CgProfile } from "react-icons/cg";

const BlogCompo = () => {
    const { id } = useParams();
    const { loading, indiBlog } = useBlog({
        id: id || ""
    });

    if (loading) {
      return <>
              <div className=" animate-pulse flex-col md:flex-row flex gap-8 mx-10 my-6 md:mx-44 md:my-10">
                  <div className=" md:w-2/3">
                      <div className=" rounded-md bg-gray-200 h-24 my-2"></div>
                      <div className=" rounded-md bg-gray-200 h-4 my-3"></div>
                      <div className=" rounded-md bg-gray-200 min-h-96 "></div>
                  </div>
                  <div className=" animate-pulse flex flex-col gap-1">
                      <div className=" font-semibold">Author:</div>
                      <div className=" items-start flex gap-2">
                          <div className=" m-1">
                              <CgProfile></CgProfile>
                          </div>
                          <div>
                              <div className=" rounded-md bg-gray-200 h-96"></div>
                              <div className=" rounded-md bg-gray-200 h-4"></div>
                          </div>
                      </div>
                  </div>
              </div>
           </>
  }
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