import axios, {  isAxiosError } from "axios"
import { useState } from "react"
import { BACKEND_URL } from "../config"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


const WriteSpace = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")
    async function saveDraft() {
        try {
            const res =  axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            return res;
        } catch (e) {
            if (isAxiosError(e))
                toast(e.response?.data.message);
                console.log(e);
        }
    }

    async function publishBlog(id: string) {
        try {
            await axios.put(`${BACKEND_URL}/api/v1/blog/publish/${id}`, {}, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div className=" w-full flex flex-col h-screen">
            <input type="text" onChange={(e) => { setTitle(e.target.value) }} placeholder="Title" className="  border-l-2 focus:outline-0 p-4 text-2xl md:text-4xl  " />
            <textarea onChange={(e) => { setContent(e.target.value) }} className=" h-full  md:pr-10 p-4 block w-full focus:outline-0 text-sm md:text-lg" placeholder="Tell Your Story" ></textarea>
            <hr />
            <div className=" mx-4 justify-end flex gap-3">
                <button onClick={async () => {
                    const res = await toast.promise(
                        saveDraft(),
                        {
                          pending: 'Loaing...',
                          success: 'Blog Published',
                          error: 'Error while publishing blog'
                        }
                    )
                    publishBlog(res?.data.id);
                    toast.done("Published")
                    navigate("/blogs")

                }} className=" border-2 p-2 bg-black my-4 font-semibold rounded-md text-white">Publish</button>
                <button onClick={async () => {
                    await toast.promise(
                        saveDraft(),
                        {
                          pending: 'Loading...',
                          success: 'Draft Saved',
                          error: 'Error occured while saving blog'
                        }
                    ).catch((e)=>{
                        if(axios.isAxiosError(e)){
                            toast.error(e.response?.data.message)
                        }
                    })
                    toast.done("Draft Saved")
                    navigate("/blogs")

                }} className="border-2 p-2 bg-black my-4 font-semibold rounded-md text-white">Save Draft</button>
            </div>
            <ToastContainer stacked></ToastContainer>
        </div>
    )
}




export default WriteSpace