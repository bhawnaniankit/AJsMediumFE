import WriteSpace from "../components/WriteSpace"
import AppBar from "../components/AppBar"
import checkLogged from "../utills/checkLogged"
const AddBlog = () => {
    checkLogged()
    return (<>
        <AppBar></AppBar>
        <div className=" flex mx-8 lg:mx-40 my-6 h-10 gap-4 items-start">
            <img src="./add.png" className="hidden md:block w-6 md:w-10 py-4" alt="" />
            <WriteSpace></WriteSpace>
        </div>
    </>
    )
}

export default AddBlog