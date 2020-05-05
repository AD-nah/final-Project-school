import React, { Component } from 'react'
import './App.css';
import Nav from './Components/Nav';
import Footer from "./Components/Footer/Footer";


import { BackTop } from 'antd';



export default class App extends Component {
  render() {
    return (
      <div className="App" style={{ marginTop: '35px' }} >
        <Nav />
   
          {/* Back to top btn */}
          <BackTop style={{ backgroundColor: 'grey', opacity: '0.8', color: 'white', fontSize: '18px', width: "7%", height: "5%", textAlign: 'center', fontWeight: '700',borderRadius:"2px" }}>
          <span>Top</span>
        </BackTop>
      
        <Footer />
      </div>
    )
  }
}