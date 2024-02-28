import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ToastMessage from "./ToastMessage";
import { API_BASE_URL } from '../../config'
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";


const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const RegisterPage = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    name: "",
  })


  //for errors
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState('Something went wrong ');

  const navigate = useNavigate()


  if (localStorage.getItem('auth-token')) return window.location = '/';


  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setInputData(prevData => ({ ...prevData, [name]: value }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (Object.values(inputData).some(input => input.trim() === "")) {
        const error = "All the fields are required"
        throw error
      }

      //password 8 to 16
      else if (inputData.password.length < 8 || inputData.password.length > 16) {
        const error = "Password must be of length between 8 to 16"
        throw error

      }

      else if (emailRegex.test(inputData.email) === false) {
        const error = "Enter your valid email address"
        throw error
      }


      const response = await postData('/auth/register', inputData)

      if (response.data.success === true) {
        setSuccess(true);
        setToastMessage("User register successfully");
        navigate('/login')
      }

      else {
        throw response.message
      }
    }
    catch (err) {
      setError(true);
      setToastMessage(err || "Something went wrong !!");
      console.log(err);
    }
  }

  return (

    <>
      {error && <ToastMessage error msg={toastMessage} />}
      {success && <ToastMessage msg={toastMessage} />}

      <div className="flex flex-col md:flex-row ">
        <div className="md:w-[50%] md:min-w-[500px] h-screen grid place-content-center">

          <div className="text-[3rem] font-bold text-center">
            Register Your Account
          </div>

          <div className="grid place-content-center my-7">

            <Input
              placeholder="Name"
              name="name"
              value={inputData.name}
              onChange={inputChangeHandler}
            />

            <Input placeholder="Email"
              name="email"
              value={inputData.email}
              onChange={inputChangeHandler}
            />

            <Input
              placeholder="Password"
              name="password"
              value={inputData.password} type='password' onChange={inputChangeHandler}
            />
          </div>

          <div className="flex justify-center mt-0 ">
            <button onClick={handleSubmit} className="  hover:bg-[#3ebca3ae] w-[19rem] h-[4.8rem] text-center rounded-[2rem] bg-[#28B498] text-white text-[2rem] text-normal">
              Sign Up
            </button>
          </div>
        </div>

        <div className="md:w-[50%] h-screen bg-gradient-to-r from-[#3FAAA8F2] to-[#39B792] flex justify-center">
          <div className="w-[498px] h-screen grid place-content-center">
            <div className="text-center text-white font-bold text-[4rem]">
              Already There?
            </div>

            <div className="text-center text-white font-medium text-[1.5rem]">
              Sign In and discover a great amount of new opportunities!
            </div>

            <div className="flex justify-center">
              <button className="mt-10 w-[322px] h-[77px] bg-white rounded-[30px] text-center text-[32px] font-semibold text-teal-600 hover:text-white hover:bg-teal-600 transition duration-300">
                <a href="/login">
                  Sign In
                </a>

              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );

}

export default RegisterPage;