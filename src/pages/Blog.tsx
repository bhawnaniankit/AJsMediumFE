import { useParams } from "react-router-dom"
import InidiBlog from "../components/Blog";
import { useBlog } from "../hooks/useBlog"
import AuthorCard from "../components/AuthorCard";
import AppBar from "../components/AppBar";
import { userType } from "./Blogs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Blog = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { loading, indiBlog } = useBlog({
        id: id || ""
    });
    const jwt = localStorage.getItem("token");
    const [user, setUser] = useState<userType>({
        name: "",
        username: "",
        email: ""
    })
    useEffect(() => {
        if (!jwt) {
            // alert(jwt);
            navigate("/signin")
            return
        }
        axios.get(`${BACKEND_URL}/api/v1/user/${jwt}`).then((res) => {
            setUser(res.data);
        })
    }, [])

    if (loading) {
        return <div>
            ...loading
        </div>
    }

    return (
        <>
            <AppBar author={user.name}></AppBar>
            <div className=" flex gap-8 mx-52 my-10">
                <InidiBlog data={indiBlog}></InidiBlog>
                <AuthorCard data={indiBlog.author}></AuthorCard>
            </div>
        </>
    )
}
