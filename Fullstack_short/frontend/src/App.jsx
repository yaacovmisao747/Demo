import React from 'react'
import {BrowserRouter as Router, Route } from "react-router-dom"
import Register from './Register'
import PostForm from './PostForm'
import Navbar from './components/Navbar'

// const url = 'http://localhost:3001/'
function App() {
  return (
    
    <div>
    <Register/>
    {/* <PostForm/> */}
    </div>
    // <Navbar/>
    // <Router>
    //  <Navbar />

    //  <Route path="/">
    //    //Home
    //  </Route>

    //  <Route path="/notes">
    //   //Notes
    //  </Route>

    //   <Route path="/create"> 
    //   //Create Note
    //   </Route>

    // </Router>

  )
 }

export default App
