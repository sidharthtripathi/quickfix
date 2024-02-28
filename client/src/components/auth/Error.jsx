import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Error = ({ className, msg }) => {
  useEffect(() => {
    toast.error(msg);
  }, [msg]);

  return (

    <>
      <ToastContainer />
    </>
  )
}

export default Error;