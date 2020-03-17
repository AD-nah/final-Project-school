import React, { Component } from "react";
import { Link } from 'react-router-dom';


// ----------------------------------------------------------------------

// Import Antd  library
import "antd/dist/antd.css";
import { Popconfirm, message } from "antd";

// confirm on click or error on cancel
function confirm(e) {
  console.log(e);
  message.success("Added successfuly..");
}
function cancel(e) {
  console.log(e);
  message.error("Item deleted..");
}
// ----------------------------------------------------------------------





export default class Reworked extends React.Component {


  render() {


    return (

      <div className="container">
        Reworked
      </div>

    );
  }
}
