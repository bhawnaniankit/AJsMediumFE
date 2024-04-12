import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

const AppBar = () => {
    return (
        <div className=" sticky top-0 bg-white border-b py-2 px-12 flex items-center justify-between">
            <div className=" items-center flex gap-6">
                <div className="  font-bold text-2xl">{"<MEDIUM"}</div>
                <input className=" bg-gray-100 rounded-full py-1  px-4" type="text" placeholder="Search" />
            </div>
            <div className=" flex items-center gap-5">
                <Link to={"/write"}>Write</Link>
                <Avatar name="Aniit" size={10}></Avatar>
            </div>
        </div>
    )
}

export default AppBar