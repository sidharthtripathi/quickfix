import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import Error from "./Error";
import Success from "./Success";
import { API_BASE_URL } from '../../config'

/**
 * 
 */


const RegisterPage=()=>{
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [name,setName]= useState("");
 
  const [showPassword, setShowPassword] = useState(false);
  
  //for errors
  const [error,setError] = useState(false);
  const [errorData,setErrorData] = useState('Something went wrong ');
  
  // for success
  const [success,setSuccess] =useState(false);
  const [successData,setSuccessData]=useState("");

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
   

    
  
    //toggle password
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  
    }
    const handleInputChangePassword=(e)=>{
        setPassword(e.target.value);
      }
    
      const handleInputChangeEmail=(e)=>{
      // console.log(e.target.value);
      setEmail(e.target.value);
      }


      const handleInputChangeName=(e)=>{
         setName(e.target.value);
      }

      const handleSubmit=async(e)=>{
          e.preventDefault();
          console.log(emailRegex.test(email));
          if(name.length==0 || password.length==0 || email.length==0){
            setError(true);
            setErrorData("Enter your all details ");
             return ;
          }

          //password 8 to 16
          else if(password.length<8 || password>16){
            setError(true);
            setErrorData("Password must be of length between 8 to 16");
            return;
            
          }
         
          else if(emailRegex.test(email)==false){
            setError(true);
            setErrorData("Enter your valid email address");
            return;
          }

          const URL = `${API_BASE_URL}/auth/register`;

          try{
          const registerResponse = await fetch(`${URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email,name, password }),
          });
          console.log(registerResponse);
          registerResponse.json().then((response)=>{
            if(response.success==false){
            setError(true);
            setErrorData(response.message);
            return ;}

            else{
              setSuccess(true);
              setSuccessData("User register successfully");
              setTimeout(()=>{
                window.location.href = '/login'
            },2000)
            }
          })

        }
        catch(err){
          setError(true);
            setErrorData("Something went wrong !!");
          console.log(err);
          
        }




      }
    return (

        <>
          {error && <Error msg = {errorData}/>}
          {success && <Success msg={successData}/>}

       <div className="flex flex-col md:flex-row ">
       <div className="md:w-[50%] md:min-w-[500px] h-screen grid place-content-center">
   
       {/* <div class="bg-gray-200 p-4">1</div>
     <div class="bg-gray-300 p-4">2</div>
     <div class="bg-gray-400 p-4">3</div>
     <div class="bg-gray-500 p-4">4</div>
     <div class="bg-gray-600 p-4">5</div>
     <div class="bg-gray-700 p-4">6</div> */}
   
     
     <div className="text-[3rem] font-bold text-center">
           Register Your Account
         </div>
         <hr className="h-px mx-7 my-3 ">
      </hr>
   
         <div className="text-[1.8rem] font-normal text-center">
           {/*
          social media button 
          * */}
   
         </div>
   
   
          {/**
           * 
           * for icons
           */}
         <div className="grid  ">
         
             
            
         </div>
   
         {/* <hr className="h-px mx-7 my-3 ">
         </hr> */}
   
   
         <div className="grid place-content-center my-7">
            <div>
            <input className=" p-3 mt-2 w-[32rem] h-[4rem] bg-[#000000] rounded-3xl text-[20px] text-normal" value={name} onChange={handleInputChangeName} placeholder="Name">
             </input>
            </div>
             <div>
             
               <input
                 placeholder="Email"
                // className=" p-3 w-[32rem] h-[4rem] text-grey border border-[#3ebca3ae] bg-[#ECF5F3] rounded-3xl text-[20px] text-normal"
                 className="  p-3 mt-5 w-[32rem] h-[4rem] bg-[#000000] rounded-3xl text-[1.25rem] text-normal " value={email} onChange={handleInputChangeEmail}
               ></input>
             </div>
             <div className="flex"> 
          
               <input
                 placeholder="Password"
                 className=" p-3 mt-5 w-[32rem] h-[4rem] bg-[#000000] rounded-3xl text-[20px] text-normal"
                 value={password} type={showPassword?'password':'text'} onChange={handleInputChangePassword}
               ></input>
              
                <button className="absolute flex inset-y-50% pl-29rem" type="button" onClick={togglePasswordVisibility}>
                {showPassword ?  <FaEye className="w-6 h-6" />:<FaEyeSlash />}
                </button>
               {
                
              
               }
              
   
               
             </div>
   
             <Link href="" className=" text-right text-normal mt-2 hover:text-blue-400 text-[1.3rem] ">
               
             </Link>
           </div>
          
          
          
           <div className="flex justify-center mt-0 ">
             <button onClick={handleSubmit}   className="  hover:bg-[#3ebca3ae] w-[19rem] h-[4.8rem] text-center rounded-[2rem] bg-[#28B498] text-white text-[2rem] text-normal">
              
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