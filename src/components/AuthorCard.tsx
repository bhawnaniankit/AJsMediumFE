import { Avatar } from "./BlogCard"

interface Author {
    "id": string,
    "name": string,
    "username": string
}


const AuthorCard = ({ data }: { data: Author }) => {
    return (
        <div className=" flex flex-col gap-1">
            <div className=" font-semibold">Author:</div>
            <div className=" flex gap-2">
                <Avatar name={data.name} size={8} ></Avatar>
                <div>
                    <div className=" font-semibold text-lg font-sans">
                        {data.name}
                    </div>
                    <div className=" text-sm">
                        Add user description
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorCard