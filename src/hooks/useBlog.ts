import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface blog {
    "id": string,
    "title": string,
    "content": string,
    "createdAt": string,
    "author": {
        "id": string,
        "name": string,
        "username": string
    }
}

export function useBlog({ id }: { id: string }) {
    const [loading, setLoading] = useState(true);
    const [indiBlog, setIndiBlog] = useState<blog>({
        "id": "",
        "title": "",
        "content": "",
        "createdAt": "",
        "author": {
            "id": "",
            "name": "",
            "username": ""
        }
    })

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            setIndiBlog(res.data.blog);
            setLoading(false);
        }).catch(()=>{
            // throw new Error(e.response.data.error);
        })
    }, [id]);

    return { loading, indiBlog };
}