import { Link } from "react-router-dom"

const ToolBar = () => {
    //check outline and border
    return (
        <div className="flex gap-3 py-2 outline-2 outline-black font-bold">
            <Link to="/write"><div className=" hover:border-b-2 border-black">Plus</div></Link>
            <div className=" cursor-pointer hover:border-b-2 border-black">Blogs</div>
        </div>
    )
}

export default ToolBar