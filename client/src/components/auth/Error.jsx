import React, { useEffect } from 'react'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Error({className,msg}) {
  useEffect(() => {
    toast.success(msg);
  }, [msg]);

  return (
   
    <>
    
    <div className={className}>{msg}</div>
  
          <ToastContainer  />
    </>
  )
}

export default Error;