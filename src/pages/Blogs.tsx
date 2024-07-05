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
        <AllBlogs></AllBlogs>
    </div >
    )
}

export default Blogs