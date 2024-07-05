import BlogCompo from "../components/BlogCompo";
import checkLogged from "../utills/checkLogged";
import AppBar from "../components/AppBar";

export const Blog = () => {
    checkLogged();
    return (
        <>
            <AppBar/>
            <BlogCompo></BlogCompo>
        </>
    )
}
