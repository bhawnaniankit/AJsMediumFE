import WriteSpace from "../components/WriteSpace"
import AppBar from "../components/AppBar"

const AddBlog = () => {
    return (<>
        <AppBar></AppBar>
        <div className=" flex w-10 mx-52 my-6 h-10 gap-4 items-start">
            <img src="./add.png" className="py-4" alt="" />
            <WriteSpace></WriteSpace>
        </div>
    </>
    )
}

export default AddBlog