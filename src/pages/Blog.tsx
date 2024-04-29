import AppBar from "../components/AppBar";
import { userGlobal } from "./Blogs";
import { CgProfile } from "react-icons/cg";
import BlogCompo from "../components/BlogCompo";
import checkLogged from "../utills/checkLogged";


export const Blog = () => {
    checkLogged();
   
    if (false) {
        return <>
                <AppBar author=""></AppBar>
                <div className=" animate-pulse flex-col md:flex-row flex gap-8 mx-10 my-6 md:mx-44 md:my-10">
                    <div className=" md:w-2/3">
                        <div className=" rounded-md bg-gray-200 h-24 my-2"></div>
                        <div className=" rounded-md bg-gray-200 h-4 my-3"></div>
                        <div className=" rounded-md bg-gray-200 min-h-96 "></div>
                    </div>
                    <div className=" animate-pulse flex flex-col gap-1">
                        <div className=" font-semibold">Author:</div>
                        <div className=" items-start flex gap-2">
                            <div className=" m-1">
                                <CgProfile></CgProfile>
                            </div>
                            <div>
                                <div className=" rounded-md bg-gray-200 h-96"></div>
                                <div className=" rounded-md bg-gray-200 h-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
             </>
    }

    return (
        <>
            <AppBar author={userGlobal.name}></AppBar>
            <BlogCompo></BlogCompo>
        </>
    )
}
