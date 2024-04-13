import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    "id": string,
    "title": string,
    "content": string,
    "createdAt": string,
    "author": {
        "name": string
    }
}

function useBlogs() {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            setBlogs(res.data);
            setLoading(false);
        })
    }, []);

    return { loading, blogs };
}

export default useBlogs