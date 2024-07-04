import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { BACKEND_URL } from "../config"

const checkLogged = () => {
    const navigate=useNavigate()
    const jwt=localStorage.getItem("token")
    useEffect(()=>{
        if(!jwt){
            navigate("/signin");
            toast.error("Unauthorized");
            return
        }
        axios.get(`${BACKEND_URL}/api/v1/user/${jwt}`).then(()=>{
            navigate("/blogs");
        }).catch(()=>{
            navigate("/signin");
        })
    },[])
}

export default checkLogged