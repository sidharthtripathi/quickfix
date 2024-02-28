import react, { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = ({ error, className, msg }) => {
  useEffect(() => {
    if (error) {
      toast.error(msg);
      return 
    }
    toast.success(msg);
  }, [msg, error]);

  return (
    <>
      <ToastContainer />

    </>
  )
}

export default ToastMessage;