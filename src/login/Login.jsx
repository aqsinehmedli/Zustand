// import React from "react";
// import FormItem from "../common/FormItem";
// import Form from "../common/Form"
// import { useNavigate } from "react-router";

// const Login = () => {
//     const navigate = useNavigate()
//     const formItem = [{
//         email:"email",
//         label:"Label",
//         type:"email",
//         placeholder:"Enter your email"
//     },
//     {
//         email:"password",
//         label:"Password",
//         type:"password",
//         placeholder:"Enter your password"
//     },]
//     const handleInputSubmit = (e) => {
//         e.preventDefault()
//     }

//     const formButton = [
//         {
//         title:"Login",
//         style:"bg-blue-700 text-white py-3 rounded-md",
//         action:handleInputSubmit
//         },
//         {
//             title:"Don't have an account?",
//             style:"text-blue-700",
//             action:()=>{
//                 navigate("/register");
//             }
//         },
//         {
//             title:"Forgot Password?",
//             style:"text-red-700",
//             action:()=>{}
//         }
//     ]
//     return(
//         <Form containerStyle='w-[850px] mt-12 mx-auto' formStyle="w-[400px] flex flex-col gap-5 border p-10 rounded-md" formItem={formItem} formButton={formButton}/> 
//     )

// }
// export default Login

import Form from "../common/Form"
import { useNavigate } from "react-router";
import { useStore } from "zustand";
import { themeStore } from "../common/Store";
import { useContext } from "react";
import { ThemeContext } from "../App";
const Login = () => {
    const navigate = useNavigate()
    const { theme, toggle } = useStore(themeStore)
    const formItems = [
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter your email"
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "Enter a password"
        },
    ]

    const formButtons = [
        {
            title: "Login",
            style: "bg-green-700 text-white py-3",
            action: () => {}
        },
        {
            title: "Don't have an account?",
            style: "",
            action: () => {
                navigate("/register");
            }
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => {}
        },
    ]

    return (
        <Form formItems={formItems} formButtons={formButtons}/>
    )
}

export default Login