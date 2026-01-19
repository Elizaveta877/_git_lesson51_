import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ToastifyIcons = ()  => {

  const notify = () => {
    toast('Welcome to User Admin Panel!');
  }

  return (
    <div>
      <button onClick={notify} style={{ backgroundColor: 'blue', color: 'white' }}>Press me</button>

    </div>
  );
}

export default ToastifyIcons;
