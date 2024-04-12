import { blog } from "../hooks/useBlog";


const Blog = ({ data }: { data: blog }) => {

    return (
        <div className=" w-2/3">
            <div className=" text-6xl font-sans font-bold my-2">{data.title}</div>
            <div className=" text-md font-medium text-gray-500 my-3">{`Posted on August 24,2024`}</div>
            <div className=" text-gray-800 font-normal font-roboto text-lg">{data.content}</div>
        </div>
    )
}

export default Blog