import BlogCard from "../components/BlogCard"
import AppBar from '../components/AppBar'
import useBlogs from "../hooks/useBlogs"
import BlogSkleton from "../components/BlogSkleton"
import ToolBar from "../components/ToolBar"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { getTime } from "../utills/getTime"

export interface userType {
    name: string,
    username: string,
    email: string
}

const Blogs = () => {
    const { loading, blogs } = useBlogs();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("token");
    const [user, setUser] = useState<userType>({
        name: "",
        username: "",
        email: ""
    })
    useEffect(() => {
        if (!jwt) {
            navigate("/signin")
            return
        }
        axios.get(`${BACKEND_URL}/api/v1/user/${jwt}`).then((res) => {
            setUser(res.data);
        })
    }, [])


    if (loading) {
        return (<div className=" flex  flex-col gap-12">
            <AppBar author={user.name} ></AppBar>
            <div className=" flex mx-44">
                <div className=" flex-1 flex flex-col gap-4 px-8">
                    <ToolBar></ToolBar>
                    <BlogSkleton></BlogSkleton>
                    <BlogSkleton></BlogSkleton>
                    <BlogSkleton></BlogSkleton>
                    <BlogSkleton></BlogSkleton>
                    <BlogSkleton></BlogSkleton>
                </div >
                {/* <div>RIght </div> */}
            </div>
        </div>
        )
    }

    return (<div className=" flex flex-col gap-12">
        <AppBar author={user.name}></AppBar>
        <div className=" flex mx-44">
            <div className=" flex-1 flex flex-col gap-4 px-8">
                <ToolBar></ToolBar>
                {blogs.map((blog) => {
                    const date = blog.createdAt;
                    return <BlogCard author={blog.author.name} id={blog.id} title={blog.title} content={blog.content} publishedDate={getTime(date)}></BlogCard>
                })}
            </div >
            {/* <div>RIght </div> */}
        </div>
    </div >
    )
}

export default Blogs