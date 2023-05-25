import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (type: string, message: string) => {
  const tipoToastMap: Record<string, Function> = {
    success: toast.success,
    error: toast.error,
  };

  tipoToastMap[type](message, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default showToast;
