import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from 'react-toastify';

// Import Antd  library
import "antd/dist/antd.css";
import { Popconfirm, message } from "antd";

// confirm on click or error on cancel
// function confirm(e) {
//   console.log(e);
//   message.success("Added successfuly..");
// }

class SuccessMessage extends Component {
  componentDidMount() {
    message.success(this.props.text);
    // toast.success(this.props.text)
  }

  render() {
    return (
      <div>
        {/* <ToastContainer autoClose={1500}/> */}
        <Popconfirm />
      </div>
    );
  }
}
export default SuccessMessage;

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
