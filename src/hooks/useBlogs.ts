import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";
import { centralBlogsAtom, filteredBlogsAtom } from "../store/atoms/blogs";
import { useRecoilState, useSetRecoilState } from "recoil";


function useBlogs() {
    const [loading, setLoading] = useState(true);
    const setBlogs=useSetRecoilState(centralBlogsAtom);
    const [filteredBlogs,setFilteredBlogs] = useRecoilState(filteredBlogsAtom);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            },
            params:{
                take:10,
                skip:0
            }
        }).then((res) => {
            setBlogs(res.data);
            setFilteredBlogs(res.data);
            setLoading(false);
        }).catch(((e:any)=>{
            toast.error(e.response.data.erro,{
                position: "bottom-right"})
        }))
    }, []);

    return { loading, filteredBlogs ,setBlogs };
}

export default useBlogs