import { CgProfile } from "react-icons/cg";


interface Author {
    "id": string,
    "name": string,
    "username": string
}


const AuthorCard = ({ data }: { data: Author }) => {
    return (
        <div className=" flex flex-col gap-1">
            <div className=" font-semibold">Author:</div>
            <div className=" items-start flex gap-2">
                <div className=" text-2xl m-1">
                    <CgProfile></CgProfile>
                </div>
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