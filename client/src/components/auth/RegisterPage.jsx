import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Error from "./Error";
import Success from "./Success";
import { API_BASE_URL } from '../../config'

/**
 * 
 */


const RegisterPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    name: "",
  })

  const [showPassword, setShowPassword] = useState(false);

  //for errors
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState('Something went wrong ');

  // for success
  const [success, setSuccess] = useState(false);
  const [successData, setSuccessData] = useState("");

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


  if (localStorage.getItem('auth-token')) return window.location = '/';


  //toggle password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    console.log(name + " => " + value)
    setInputData(prevData => ({ ...prevData, [name]: value }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRegex.test(inputData.email));
    if (inputData.name.length === 0 || inputData.password.length === 0 || inputData.email.length === 0) {
      setError(true);
      setErrorData("All the fields are required");
      return;
    }

    //password 8 to 16
    else if (inputData.password.length < 8 || inputData.password > 16) {
      setError(true);
      setErrorData("Password must be of length between 8 to 16");
      return;

    }

    else if (emailRegex.test(inputData.email) == false) {
      setError(true);
      setErrorData("Enter your valid email address");
      return;
    }

    const URL = `${API_BASE_URL}/auth/register`;

    try {
      const registerResponse = await fetch(`${URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });
      console.log(registerResponse);
      registerResponse.json().then((response) => {
        if (response.success === false) {
          setError(true);
          setErrorData(response.message);
          return;
        }

        else {
          setSuccess(true);
          setSuccessData("User register successfully");
          setTimeout(() => {
            window.location.href = '/login'
          }, 2000)
        }
      })

    }
    catch (err) {
      setError(true);
      setErrorData("Something went wrong !!");
      console.log(err);

    }
  }

  return (

    <>
      {error && <Error msg={errorData} />}
      {success && <Success msg={successData} />}

      <div className="flex flex-col md:flex-row ">
        <div className="md:w-[50%] md:min-w-[500px] h-screen grid place-content-center">

          <div className="text-[3rem] font-bold text-center">
            Register Your Account
          </div>

          <div className="grid place-content-center my-7">
            <div>
              <input className=" p-3 mt-2 w-[32rem] h-[4rem] bg-[#000000] rounded-3xl text-[20px] text-normal"
                placeholder="Name"
                name="name"
                value={inputData.name}
                onChange={inputChangeHandler}
              >
              </input>
            </div>
            <div>

              <input
                placeholder="Email"
                name="email"
                className="  p-3 mt-5 w-[32rem] h-[4rem] bg-[#000000] rounded-3xl text-[1.25rem] text-normal "
                value={inputData.email} onChange={inputChangeHandler}
              ></input>
            </div>
            <div className="flex">

              <input
                placeholder="Password"
                name="password"
                className=" p-3 mt-5 w-[32rem] h-[4rem] bg-[#000000] rounded-3xl text-[20px] text-normal"
                value={inputData.password} type={showPassword ? 'password' : 'text'} onChange={inputChangeHandler}
              ></input>
              <button className="absolute flex inset-y-50% pl-29rem" type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEye className="w-6 h-6" /> : <FaEyeSlash />}
              </button>
            </div>
          </div>



          <div className="flex justify-center mt-0 ">
            <button onClick={handleSubmit} className="  hover:bg-[#3ebca3ae] w-[19rem] h-[4.8rem] text-center rounded-[2rem] bg-[#28B498] text-white text-[2rem] text-normal">

              Sign Up
            </button>
          </div>



        </div>

        {
          /**
           * 
           *Right side
           */
        }


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