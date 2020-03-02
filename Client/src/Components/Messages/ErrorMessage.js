
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




class ErrorMessage extends Component {


  componentDidMount(){
    toast.error(this.props.text)
  
  }

  render(){
    return (
      <div>
         <ToastContainer autoClose={200}/>
      </div>
    )
  }
}
export default ErrorMessage
