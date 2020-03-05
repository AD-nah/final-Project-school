import React, { Component } from 'react'
import './App.css';
import Nav from '../src/Components/Nav';
import Footer from "./Components/Footer/Footer"
export default class App extends Component {
  render() {
    return (
        <div className="App">
          <Nav/>
          
          <Footer/>
        </div>
    )
  }
}