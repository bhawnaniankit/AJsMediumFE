import { Link } from "react-router-dom"
import { IoIosAdd } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AppBar = ({ author }: { author: string }) => {    
    const Navigate = useNavigate();
    function logoutHandler() {
        localStorage.removeItem("token");
        Navigate("/signin")
    }
    return (
        <div className=" sticky top-0 bg-white border-b px-4 py-2 md:px-12 flex items-center justify-between">
            <div className=" items-center flex gap-6">
                <div className=" text-lg font-bold md:text-2xl">{"<MEDIUM"}</div>
                <input className="hidden md:inline-block bg-gray-100 rounded-full py-1  px-4" type="text" placeholder="Search" />
            </div>
            <div className=" text-xl flex items-center gap-5">
                <Link className=" hidden md:block" to={"/write"}> <IoIosAdd></IoIosAdd></Link>
                <div className=" text-sm md:text-lg">{author}</div>
                <div onClick={logoutHandler} className=" cursor-pointer text-sm md:text-2xl">
                    <IoIosLogOut></IoIosLogOut>
                </div>
            </div>
        </div>
    )
}

export default AppBar