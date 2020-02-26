
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';



class SuccessMessage extends Component {


  componentDidMount(){

    toast.success(this.props.text)

  }

  render(){
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
}
export default SuccessMessage




























// import React from "react";
 
// const SuccessMessage = (props) => (

//   <div className = "alert alert-info alert-dismissible fade show"role="alert">

//        {props.text} 

//        <button type="button" className="close" data-dismiss="alert" aria-label="Close">

//           {/* <span aria-hidden="true">&times;</span> */}

//     </button> 
//   </div>
// );

// export default SuccessMessage;





