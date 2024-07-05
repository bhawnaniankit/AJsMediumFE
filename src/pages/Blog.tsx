import BlogCompo from "../components/BlogCompo";
import checkLogged from "../utills/checkLogged";


export const Blog = () => {
    checkLogged();
    return (
        <>
            <BlogCompo></BlogCompo>
        </>
    )
}
