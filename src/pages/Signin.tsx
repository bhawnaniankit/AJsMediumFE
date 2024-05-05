import { SigninCompo } from "../components/SignInCompo"
import { Quote } from "../components/Quote"
// import { ToastContainer } from "react-toastify"

const Signin = () => {
    return (
        <div className=" flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
            <SigninCompo></SigninCompo>
            <Quote></Quote>
            {/* <ToastContainer stacked></ToastContainer> */}
        </div>
    )
}

export default Signin