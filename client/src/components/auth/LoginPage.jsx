import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// import Error from "./Error";
// import Success from "./Success";

import { API_BASE_URL } from '../../config'
import AuthRightSection from "../UI/AuthRightSection";
import Button from "../UI/Button";
import { postData } from "../../utils/api";

/** Some contraints for inputs
 * 1.email : should be email 
 * 2.password : 
 *   a).at least one uppercase letter , lowercase letter, numeric letter,special_case
 *   b). character 8 to 16 
 */



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()
  // for success
  const [success, setSuccess] = useState(false);
  const [successData, setSuccessData] = useState("");


  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState('Something went wrong');


  if (localStorage.getItem('auth-token')) return <Navigate to="/" />


  //toggle password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

  }
  const URL = `${API_BASE_URL}/auth/login`;


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length === 0 || email.length === 0) {
      setError(true);
      setErrorData("Enter all your details");
      return;
    }
  
    try {
      const response = await postData('/auth/login', { email, password });
      console.log("RESPONSE", response);
  
      if (response.success === false) {
        setError(true);
        setErrorData(response.message);
      } else {
        console.log(response);
        setSuccess(true);
        setSuccessData("Login successful");
        setTimeout(() => {
          // window.location.href = '/login';
          navigate('/')
          localStorage.setItem('auth-token', response.data.token);
          localStorage.setItem('userId', response.data.user._id);
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(true); 
      setErrorData("Something went wrong with the request");
    }
  }
  

  const handleInputChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleInputChangeEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  }
  return (

    <>
      {/* {error && <Error msg = {errorData}/>}
        {success && <Success msg={successData}/>} */}
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-[50%] md:min-w-[500px] h-screen grid place-content-center">


          <div className="text-[3rem] font-bold text-center">
            Login To Your Account
          </div>

          <div className="text-[1.8rem] font-normal text-center">
            Login using social networks{" "}
          </div>

          <div className="grid  ">
          </div>

          <hr className="h-px mx-7 my-3 ">
          </hr>


          <div className="grid place-content-center my-7">
            <div>
              <input
                placeholder="Email"
                // className=" p-3 w-[32rem] h-[4rem] text-grey border border-[#3ebca3ae] bg-[#ECF5F3] rounded-3xl text-[20px] text-normal"
                className="  p-3 w-[32rem] h-[4rem] bg-[#000000] rounded-3xl text-[1.25rem] text-normal " value={email} onChange={handleInputChangeEmail}
              ></input>
            </div>
            <div className="flex">
              <input
                placeholder="Password"
                className=" p-3 mt-5 w-[32rem] h-[4rem] bg-[#000000] rounded-3xl text-[20px] text-normal"
                value={password} type={showPassword ? 'password' : 'text'} onChange={handleInputChangePassword}
              ></input>

              <button className="absolute flex inset-y-50% pl-29rem" type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEye className="w-6 h-6" /> : <FaEyeSlash />}
              </button>
            </div>

            <Link href="" className=" text-right text-normal mt-2 hover:text-blue-400 text-[1.3rem] ">
              Forgot Password?
            </Link>
          </div>


          <Button buttonTitle="Sign In" onClick={handleSubmit} buttonClasses="hover:bg-[#3ebca3ae] bg-[#28B498] text-white" />
        </div>

        <AuthRightSection heading="New Here?" content="Sign up and discover a great amount of new opportunities!" buttonTitle="Sign Up" />

      </div>

    </>
  );
};

export default Login;