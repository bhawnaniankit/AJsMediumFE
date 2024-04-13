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
        <div className=" sticky top-0 bg-white border-b py-2 px-12 flex items-center justify-between">
            <div className=" items-center flex gap-6">
                <div className="  font-bold text-2xl">{"<MEDIUM"}</div>
                <input className=" bg-gray-100 rounded-full py-1  px-4" type="text" placeholder="Search" />
            </div>
            <div className=" text-xl flex items-center gap-5">
                <Link to={"/write"}> <IoIosAdd></IoIosAdd></Link>
                <div className=" text-lg">{author}</div>
                <div onClick={logoutHandler} className=" cursor-pointer text-2xl">
                    <IoIosLogOut></IoIosLogOut>
                </div>
            </div>
        </div>
    )
}

export default AppBar