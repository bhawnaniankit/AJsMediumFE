import BlogCard from "../components/BlogCard"
import AppBar from '../components/AppBar'
import useBlogs from "../hooks/useBlogs"
import BlogSkleton from "../components/BlogSkleton"
import ToolBar from "../components/ToolBar"

const Blogs = () => {
    const { loading, blogs } = useBlogs();

    //Todo route to user page if jwt not found
    if (loading) {
        return (<div className=" flex  flex-col gap-12">
            <AppBar></AppBar>
            <div className=" flex mx-44">
                <div className=" flex-1 flex flex-col gap-12 px-8">
                    <ToolBar></ToolBar>
                    <BlogSkleton></BlogSkleton>
                    <BlogSkleton></BlogSkleton>
                    <BlogSkleton></BlogSkleton>
                    <BlogSkleton></BlogSkleton>
                    <BlogSkleton></BlogSkleton>
                </div >
                <div>RIght </div>
            </div>
        </div>
        )
    }

    return (<div className=" flex flex-col gap-12">
        <AppBar></AppBar>
        <div className=" flex mx-44">
            <div className=" flex-1 flex flex-col gap-4 px-8">
                <ToolBar></ToolBar>
                {blogs.map((blog) => {
                    return <BlogCard author={blog.author.name} id={blog.id} title={blog.title} content={blog.content} publishedDate={"Dec 21,2004"}></BlogCard>
                })}
            </div >
            <div>RIght </div>
        </div>
    </div >
    )
}

export default Blogs