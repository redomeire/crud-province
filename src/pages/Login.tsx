import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../components/button";
import Input from "../components/input";
import LoginImage from "../images/login.svg";

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        
        axios.post('https://reqres.in/api/login', {
            email : email,
            password : password
        })
        .then((res) => {
            localStorage.setItem('authorization', res.data.token);

            Swal.fire({
                title: 'Success login',
                icon: 'success'
            })

            setTimeout(() => {
                navigate('/')
            }, 1500);
        })
        .catch((err) => {
            Swal.fire({
                title: 'Error login ' + err.message,
                text:  `
                username : eve.holt@reqres.in
                password : cc
                `,
                icon: 'error'
            })
        })
    }

    return (
        <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center font-poppins md:p-0 p-10">
            <div className="shadow-lg flex md:w-[80%] w-[95%] md:flex-row flex-col-reverse">
                <div className="md:w-[50%] bg-white p-10 md:rounded-tl-lg md:rounded-bl-lg md:rounded-b-none rounded-b-lg">
                    <h1 className="font-bold text-2xl mb-2">Login</h1>
                    <p>Login untuk mengakses dashboard</p>
                    <form onSubmit={handleSubmit} className="mt-10">
                        <div className="mb-5">
                            <label className="text-md font-medium">Email*</label>
                            <Input
                                endIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                }
                                className="mt-2 w-full"
                                placeholder="eve.holt@reqres.in"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="text-md font-medium">Password*</label>
                            <Input
                                className="mt-2 w-full"
                                type="password"
                                required
                                placeholder="password goes here"
                                endIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                    </svg>
                                }
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center mt-5 md:flex-row flex-col">
                            <Button type="submit" className="bg-purple-500 text-white text-sm md:w-fit w-full">Submit</Button>
                            <p className="ml-5 md:mt-0 mt-3">Belum punya akun? <span className="font-semibold text-purple-300 cursor-pointer" onClick={() => navigate('/register')}>Register</span></p>
                        </div>
                    </form>
                </div>
                <div className="md:w-[50%] bg-purple-500 md:p-3 p-4 rounded-tr-lg rounded-tl-lg md:rounded-tl-none md:rounded-br-lg flex items-center justify-center">
                    <div className="flex flex-col justify-center items-center">
                        <img src={LoginImage} className="md:w-[200px] w-[150px] mb-5" alt=""/>
                        <div className="text-white text-justify w-[80%]">
                            <h3 className="font-bold text-center text-xl">CRUD Provinsi</h3>
                            <p className="text-sm">CRUD Provinsi membantu anda dalam pengelolaan data provinsi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;