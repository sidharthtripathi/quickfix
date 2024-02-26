import react, { useEffect } from "react";
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Success=({className,msg})=>{
    useEffect(() => {
        toast.success(msg);
      }, [msg]);
    
    return(
     <>
      <ToastContainer  />
     
     </>    
    )
}

export default Success;