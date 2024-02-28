import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Input = ({ value, type, onChange,placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        console.log('')
        setShowPassword(!showPassword);
    }
    console.log("TYPE", type)

    return (
        <div className="flex">
            <input
                placeholder={placeholder}
                name={placeholder}
                className=" p-3 mt-5 w-[32rem] h-[4rem] bg-[#000000] rounded-3xl text-[20px] text-normal"
                value={value || null} type={showPassword ? 'password' : type} onChange={onChange}
            ></input>
            {type === 'password' ?
                <button className="absolute flex inset-y-50% pl-29rem" type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEye className="w-6 h-6" /> : <FaEyeSlash />}
                </button>
                : ''
            }
        </div>
    )
}

export default Input