import react, { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = ({ error, className, msg }) => {
  useEffect(() => {
    if (error) {
      toast.error(msg,{
        autoClose: 3000,
        position: 'top-right',
        hideProgressBar: false,
        closeButton:false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        
      });
      return;
    }
    toast.success(msg,{ autoClose: 3000,
      position: 'top-right',
      hideProgressBar: false,
      closeButton:false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,});
  }, [msg, error]);

  return (
    <>
      <ToastContainer />

    </>
  )
}

export default ToastMessage;