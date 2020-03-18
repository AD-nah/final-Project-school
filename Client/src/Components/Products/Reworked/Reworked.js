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


// import React, { Component } from 'react';
// import './secondhand.css';

// export default class Outfits extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="overlay-slide col-md-12">
//           <img src="https://via.placeholder.com/220x280" />
//           <div>
//             <h2>Awesome Title</h2>
//             <p>This hover effect is totally awesome.</p>
//           </div>

//         </div>

//       </div>
//     )
//   }
// }
