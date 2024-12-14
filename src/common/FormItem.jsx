// import React from "react";

// const FormItem = ({label,name,type,placeholder,handleInputChange}) => {
//     <div className="flex flex-col">
//         <label htmlFor="{name}">{label}</label>
//         <input className="border p-2" type={type} name={name} placeholder={placeholder} onChange={(e) => {
//             handleInputChange(e.target.name,e.target.value)
//         }} />
//     </div>
// }
// export default FormItem
const FormInput = ({label, name, type, placeholder, handleInputChange}) => {
    return (
     <div className="flex flex-col">
         <label htmlFor={name}>{label}</label>
         <input onChange={(e)=> {
            handleInputChange(e.target.name, e.target.value)
         }} placeholder={placeholder}
         className="border p-2"
         name={name} type={type} />
     </div>
    )
    }
    
    export default FormInput