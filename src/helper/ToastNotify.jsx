import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastWarnNotify = (msg) => {
    toast.warn(msg, {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
      draggablePercent: 60,
      theme: "colored",
    });
  };
  
  export const toastSuccessNotify = (msg) => {
    toast.success(msg, {
      icon: "🚀",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
      draggablePercent: 60,
      theme: "light",
      progressStyle: {
        background: "#00345b",
        height: "5px",
      },
    });
  };
  