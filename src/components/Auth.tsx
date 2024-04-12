import { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignupInput } from '@aj_devs/common-final';
import { BACKEND_URL } from '../config';
import axios from 'axios';

const Auth = () => {
    const navigate = useNavigate();
    const [signupInputs, setSignupInputs] = useState<SignupInput>({
        name: "",
        username: "",
        email: "",
        password: ""
    });

    async function signRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, signupInputs);
            localStorage.setItem("token", response.data.jwt);
            navigate("/blogs");
        }
        catch (e) {

            //alert
        }
    }

    return (
        <div className=' flex flex-col justify-center items-center'>
            <div>
                <div className=' text-center '>
                    <div className='my-1 text-3xl font-bold'>Create an Account</div>
                    <div className=' text-slate-400'>Already have an account? <Link to="/signin"><u>Login</u></Link></div>
                </div>

                <div className=' flex flex-col my-4 items-start'>
                    <LabledInput label='Name' type="text" placeholder='Enter your name' onchange={(e) => { setSignupInputs({ ...signupInputs, name: e.target.value }) }}></LabledInput>
                    <LabledInput label='Username' type="text" placeholder='Enter your username' onchange={(e) => { setSignupInputs({ ...signupInputs, username: e.target.value }) }}></LabledInput>
                    <LabledInput label='Email' type="text" placeholder='m@example.com' onchange={(e) => { setSignupInputs({ ...signupInputs, email: e.target.value }) }}></LabledInput>
                    <LabledInput label='Password' type="password" placeholder='Enter your password' onchange={(e) => { setSignupInputs({ ...signupInputs, password: e.target.value }) }}></LabledInput>
                    <button onClick={signRequest} className=' md:min-w-96 border-2 p-2 bg-black my-4 font-bold rounded-md text-white'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

interface LabledInputTypes {
    label: string,
    placeholder: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void,
    type: string
}

function LabledInput({ label, placeholder, onchange, type }: LabledInputTypes) {
    return <>
        <label className=' text-base font-semibold my-2' >{label}</label>
        <input onChange={onchange} className='md:min-w-96 border-2 p-2 rounded-md text-slate-400' type={type} placeholder={placeholder} />
    </>
}

export default Auth