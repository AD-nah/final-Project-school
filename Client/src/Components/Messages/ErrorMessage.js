
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';



class ErrorMessage extends Component {


  componentDidMount(){

    toast.error(this.props.text)

  }

  render(){
    return (
      <div>
         <ToastContainer/>
      </div>
    )
  }
}
export default ErrorMessage
