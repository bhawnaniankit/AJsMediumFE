import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"

const checkLogged = () => {
    const navigate=useNavigate()
    const jwt=localStorage.getItem("token")
    useEffect(()=>{
        if(!jwt){
            navigate("/signin")
            toast.error("Unauthorized")
            return
        }
    },[])
}

export default checkLogged