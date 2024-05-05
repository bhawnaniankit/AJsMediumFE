import AppBar from '../components/AppBar'
// import BlogSkleton from "../components/BlogSkleton"
// import ToolBar from "../components/ToolBar"
import { useEffect } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import checkLogged from "../utills/checkLogged"
import AllBlogs from "../components/AllBlogs"

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
    const jwt = localStorage.getItem("token");
    checkLogged()
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/user/${jwt}`).then((res) => {
            userGlobal = res.data;
            Object.freeze(userGlobal) //set userGlobal to be a constant
        })
    }, [])

    return (<div className=" flex flex-col gap-4 md:gap-12">
        <AppBar author={userGlobal.name}></AppBar>
        <AllBlogs></AllBlogs>
    </div >
    )
}

export default Blogs