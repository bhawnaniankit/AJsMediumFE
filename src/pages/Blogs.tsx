import AppBar from '../components/AppBar'
// import BlogSkleton from "../components/BlogSkleton"
// import ToolBar from "../components/ToolBar"
import checkLogged from "../utills/checkLogged"
import AllBlogs from "../components/AllBlogs"

export interface userType {
    name: string,
    username: string,
    email: string
}

const Blogs = () => {
    checkLogged();
    return (<div className=" flex flex-col gap-4 md:gap-12">
        <AppBar></AppBar>
        <AllBlogs></AllBlogs>
    </div >
    )
}

export default Blogs