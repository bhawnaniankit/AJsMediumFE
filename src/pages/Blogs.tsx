import BlogCard from "../components/BlogCard"
import AppBar from '../components/AppBar'
import useBlogs from "../hooks/useBlogs"
import BlogSkleton from "../components/BlogSkleton"
import ToolBar from "../components/ToolBar"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { getTime } from "../utills/getTime"

export interface userType {
    name: string,
    username: string,
    email: string
}

export let userGlobal: userType = {
    name: "",
    username: "",
    email: ""
}

const Blogs = () => {
    const { loading, blogs } = useBlogs();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("token");
    useEffect(() => {
        if (!jwt) {
            navigate("/signin")
            return
        }
        axios.get(`${BACKEND_URL}/api/v1/user/${jwt}`).then((res) => {
            userGlobal = res.data;
        })
    }, [])


    if (loading) {
        return (<div className=" flex  flex-col md:gap-12">
            <AppBar author={userGlobal.name} ></AppBar>
            <div className=" flex md:mx-44">
                <div className=" flex-1 flex flex-col gap-4 px-8">
                    <ToolBar></ToolBar>
                    <div className=" flex flex-col gap-8">
                        <BlogSkleton></BlogSkleton>
                        <BlogSkleton></BlogSkleton>
                        <BlogSkleton></BlogSkleton>
                        <BlogSkleton></BlogSkleton>
                        <BlogSkleton></BlogSkleton>
                    </div>
                </div >
                {/* <div>RIght </div> */}
            </div>
        </div>
        )
    }

    return (<div className=" flex flex-col gap-4 md:gap-12">
        <AppBar author={userGlobal.name}></AppBar>
        <div className=" flex md:mx-44">
            <div className=" flex-1 flex flex-col gap-2 md:gap-4 px-8">
                <ToolBar></ToolBar>
                {blogs.map((blog) => {
                    const date = blog.createdAt;
                    return <BlogCard author={blog.author.name} id={blog.id} title={blog.title} content={`${blog.content.slice(0, 500)}....`} publishedDate={getTime(date)}></BlogCard>
                })}
            </div >
            {/* <div>RIght </div> */}
        </div>
    </div >
    )
}

export default Blogs