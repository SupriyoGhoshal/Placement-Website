import { useState } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home"
import Clubs from "./Dasshboard/Clubs"
import Faculty from "./Dasshboard/Faculty"
import CourseCurriculum from "./Dasshboard/CourseCurriculum"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/faculty" element={<Faculty/>}></Route>
          <Route path="/clubs" element={<Clubs/>}></Route>
          <Route path="/courses" element={<CourseCurriculum/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
