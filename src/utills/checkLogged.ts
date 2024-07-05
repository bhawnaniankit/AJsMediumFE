import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { BACKEND_URL } from "../config"

const checkLogged = () => {
    const navigate=useNavigate();
    const jwt=localStorage.getItem("token")
    useEffect(()=>{
        async function check(){
            if(!jwt){
                navigate("/signin");
                toast.error("Unauthorized");
                return
            }
            await axios.get(`${BACKEND_URL}/api/v1/user/${jwt}`).catch(()=>{
                return navigate("/signin");
            })
        }
        check();
    },[])
}

export default checkLogged