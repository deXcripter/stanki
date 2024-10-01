import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Success toast
export const showSuccessToast = (message: string, options = {}) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    ...options,
  });
};

// Error toast
export const showErrorToast = (message: string, options = {}) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    ...options,
  });
};

// Info toast
export const showInfoToast = (message: string, options = {}) => {
  toast.info(message, {
    position: 'top-right',
    autoClose: 3000,
    ...options,
  });
};

// Warning toast
export const showWarningToast = (message: string, options = {}) => {
  toast.warn(message, {
    position: 'top-right',
    autoClose: 3000,
    ...options,
  });
};

// Custom styled toast
export const showCustomToast = (message: string, style = {}, options = {}) => {
  toast(message, {
    style: {
      backgroundColor: '#282c34',
      color: '#61dafb',
      fontSize: '20px',
      borderRadius: '10px',
      ...style,
    },
    position: 'top-right',
    autoClose: 3000,
    ...options,
  });
};
