import { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SigninInput } from '@aj_devs/common-final';
import { BACKEND_URL } from '../config';
import axios, { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const SigninCompo = () => {
    const navigate = useNavigate();
    const [signinInputs, setsigninInputs] = useState<SigninInput>({
        username: "",
        password: ""
    });

    async function signRequest() {
        try {
            axios.post(`${BACKEND_URL}/api/v1/user/signin`, signinInputs).then((response)=>{
                const jwt=response.data.jwt;
                if(jwt){
                    localStorage.setItem("token",jwt );
                    navigate("/blogs");
                }    
            }).catch((e:AxiosError<{error:string}>)=>{
                toast.error(e.response?.data.error)
            });
        }
        catch (e) {
            console.log(e);
            toast("Error While Logging in")
        }
    }

    return (
        <div className=' h-screen flex flex-col justify-center items-center'>
            <div>
                <div className=' text-center '>
                    <div className='my-1 text-3xl font-bold'>Create an Account</div>
                    <div className=' text-slate-400'>Don't have an account? <Link to="/signup"><u>Signup</u></Link></div>
                </div>

                <div className=' m-w-md flex flex-col my-4 items-start'>
                    <LabledInput label='Username' type="text" placeholder='Enter your username' onchange={(e) => { setsigninInputs({ ...signinInputs, username: e.target.value }) }}></LabledInput>
                    <LabledInput label='Password' type="password" placeholder='Enter your password' onchange={(e) => { setsigninInputs({ ...signinInputs, password: e.target.value }) }}></LabledInput>
                    <button onClick={signRequest} className=' w-full md:min-w-80 lg:min-w-96 border-2 p-2 bg-black my-4 font-bold rounded-md text-white'>Sign In</button>
                    <ToastContainer position="bottom-right"></ToastContainer>
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
        <input onChange={onchange} className=' w-full lg:min-w-96 md:min-w-80 border-2 p-2 rounded-md text-slate-400' type={type} placeholder={placeholder} />
    </>
}
