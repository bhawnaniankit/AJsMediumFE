import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SigninInput } from '@aj_devs/common-final';
import { BACKEND_URL } from '../config';
import axios, { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const SigninCompo = () => {
    console.log("hello from signin compo");
    let userTimer:ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);
    let passwordTimer:ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);
    const navigate = useNavigate();
    const [signinInputs, setsigninInputs] = useState<SigninInput>({
        username: "",
        password: ""
    });
    let signinBtn=useRef<HTMLButtonElement>(null);
    async function signRequest() {
        try {
            const id = toast.loading("Logging in...",{autoClose: 1500});
            axios.post(`${BACKEND_URL}/api/v1/user/signin`, signinInputs).then((response)=>{
                const jwt=response.data.jwt;
                if(jwt){
                    localStorage.setItem("token",jwt );
                    navigate("/blogs");
                }    
                toast.update(id,{render:"Logged In",type:"success" , isLoading:false})
            }).catch((e:AxiosError<{error:string}>)=>{
                console.log(e);
                toast.update(id,{render:e.response?.data.error,type:"error",autoClose:500 , isLoading:false})
            });
        }
        catch (e) {
            toast.error("Error While Logging in")
        }
    }
    let clickTimer:ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);
    useEffect(()=>{
        window.addEventListener("keydown",(e)=>{     
            clearTimeout(clickTimer);
            clickTimer=setTimeout(()=>{
                if(e.key==='Enter'){
                    if(signinBtn.current){
                        signinBtn.current.click()
                    }
                }
            },1000)
        })
        return window.removeEventListener("keydown",(e)=>{     
            clearTimeout(clickTimer);
            clickTimer=setTimeout(()=>{
                if(e.key==='Enter'){
                    if(signinBtn.current){
                        signinBtn.current.click()
                    }
                }
            },1000)
        })
    },[]);
    return (
        <div className=' h-screen flex flex-col justify-center items-center'>
            <div>
                <div className=' text-center '>
                    <div className='my-1 text-3xl font-bold'>Create an Account</div>
                    <div className=' text-slate-400'>Don't have an account? <Link to="/signup"><u>Signup</u></Link></div>
                </div>

                <div className=' m-w-md flex flex-col my-4 items-start'>
                    <LabledInput label='Username' type="text" placeholder='Enter your username' onchange={(e) => {
                        clearTimeout(userTimer);
                        userTimer=setTimeout(()=>{
                            setsigninInputs({ ...signinInputs, username: e.target.value })
                        },250)
                          }}></LabledInput>
                    <LabledInput label='Password' type="password" placeholder='Enter your password' onchange={(e) => {
                        clearTimeout(passwordTimer);
                        passwordTimer=setTimeout(()=>{
                            setsigninInputs({ ...signinInputs, password: e.target.value })
                        },250)
                          }}></LabledInput>
                    <button ref={signinBtn} onClick={signRequest} className=' w-full md:min-w-80 lg:min-w-96 border-2 p-2 bg-black my-4 font-bold rounded-md text-white'>Sign In</button>
                    <ToastContainer stacked position="bottom-right"></ToastContainer>
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
        <Lable label={label}></Lable>
        <input onChange={onchange} className=' w-full lg:min-w-96 md:min-w-80 border-2 p-2 rounded-md text-slate-400' type={type} placeholder={placeholder} />
    </>
}
const Lable=React.memo(({label}:{label:string})=>{
    return<label className=' text-base font-semibold my-2' >{label}</label>
})