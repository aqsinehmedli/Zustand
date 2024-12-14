// import React from "react";
// import FormItem from "../common/FormItem";
// import Form from "../common/Form"
// import { useNavigate } from "react-router"
// const Register = () => {
//     const navigate = useNavigate()
//     const formItem = [
//         {
//             name:"firstname",
//             type:"text",
//             label:"Firstname",
//             placeholder:"Enter your Firstname"
//         },
//         {
//             name:"lastname",
//             type:"text",
//             label:"Lastname",
//             placeholder:"Enter your Lastname"
//         },
//         {
//            name:"email",
//            type:"email",
//            label:"Email",
//            placeholder:"Enter your Email" 
//         },
//         {
//             name:"password",
//             type:"password",
//             label:"Password",
//             placeholder:"Enter your Password"
//         }
//     ]
//     const handleInputSubmit = (e) => {
//         e.preventDefault()
//         console.log(formData)
//     }

//     const formButton = [
//         {
//         title:"Register",
//         style:"bg-blue-700 text-white py-3 rounded-md",
//         action:handleInputSubmit
//         },
//         {
//             title:"Already have an account?",
//             style:"text-blue-700",
//             action:() => {
//                 navigate("/Login")
//             }
//         }
//     ]
//     return (
//         <Form
//             containerStyle='w-[850px] mt-12 mx-auto'
//             formStyle="w-[400px] flex flex-col gap-5 border p-10 rounded-md"
//             formInput={formInput} formButton={formButton} />
//     )
// }
// export default Register

import Form from "../common/Form"
import { useNavigate } from "react-router"

const Register = () => {
    const navigate = useNavigate()

    const formItems = [
        {
            label: "Firstname",
            name: "firstname",
            type: "text",
            placeholder: "Enter your firstname"
        },
        {
            label: "Lastname",
            name: "lastname",
            type: "text",
            placeholder: "Enter your lastname"
        },
        {
            label: "Phone",
            name: "phone",
            type: "tel",
            placeholder: "Enter your phone number"
        },
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
            title: "Register",
            style: "bg-violet-700 text-white py-3 rounded-md",
            action: () => { }
        },
        {
            title: "Already have an account?",
            style: "text-sm",
            action: () => {
                navigate("/login")
            }
        },
    ]

    return (
        <Form formItems={formItems} formButtons={formButtons} />
    )
}

export default Register