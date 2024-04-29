import ToolBar from "./ToolBar";
import useBlogs from "../hooks/useBlogs";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BACKEND_URL } from "../config";
import axios from "axios";
import BlogSkleton from "./BlogSkleton";
import { toast } from "react-toastify";
import BlogCard from "./BlogCard";
import { getTime } from "../utills/getTime";

const AllBlogs = () => {
    const { loading, blogs,setBlogs } = useBlogs();
    const [page,setPage]=useState(1);
    const [hasMore,setHasmore]=useState(true)
  return (
    <div className=" flex md:mx-44">
            <div className=" flex-1 flex flex-col gap-2 md:gap-4 px-8">
                <ToolBar></ToolBar>
                <div>
                    <InfiniteScroll
                    dataLength={blogs.length}
                    next={()=>{
                        setPage((page)=>page+1);
                        let skip=(page-1)*5;
                        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                            headers: {
                                Authorization: localStorage.getItem("token")
                            },
                            params:{
                                skip:skip,
                                take:5
                            }
                        }).then((res:any) => {
                            if(res.data.length>0){
                                let newBlogs=blogs; //as objects are passed by ref setBlogs does'nt reload the componet as the ref has'nt changed
                                newBlogs=newBlogs.concat(res.data)
                                setBlogs(newBlogs)
                            }
                            else{
                                setHasmore(false);
                            }
                        }).catch(((e:any)=>{
                            toast.error(e.response.data.erro,{
                                position: "bottom-right"})
                        }))
                    }}
                    hasMore={hasMore} // Replace with a condition based on your data source
                    loader={
                        <div className="my-8">
                            <BlogSkleton></BlogSkleton>
                        </div>
                }
                    endMessage={<p>SEEMS LIKE YOU HAVE REACHED THE END</p>}
                    >
                    <ul>
                        {blogs.map(blog => {
                        const date = blog.createdAt;
                        return <li key={blog.id}><BlogCard key={blog.id} author={blog.author.name} id={blog.id} title={blog.title} content={`${blog.content.slice(0, 500)}....`} publishedDate={getTime(date)}></BlogCard></li>
                        })}
                    </ul>
                    </InfiniteScroll>
                </div>
            </div >
            {/* <div>RIght </div> */}
        </div>
  )
}

export default AllBlogs