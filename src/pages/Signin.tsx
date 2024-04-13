import { SigninCompo } from "../components/SignInCompo"
import { Quote } from "../components/Quote"

const Signin = () => {
    return (
        <div className=" grid md:grid-cols-2">
            <SigninCompo></SigninCompo>
            <Quote></Quote>
        </div>
    )
}

export default Signin