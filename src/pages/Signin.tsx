import { SigninCompo } from "../components/SignInCompo"
import { Quote } from "../components/Quote"

const Signin = () => {
    return (
        <div className=" flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
            <SigninCompo></SigninCompo>
            <Quote></Quote>
        </div>
    )
}

export default Signin