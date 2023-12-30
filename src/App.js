import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import SingleMovie from "./component/SingleMovie";
import Error from "./component/Error";
import Movie from "./component/Movie";


const App =()=>{
    return(
        <>
          <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />}></Route>
          
          <Route path='/movie/:id' element={<SingleMovie />}></Route>
          <Route path='*' element={<Error />}></Route>
          </Routes>
          
          </BrowserRouter>
        </>
    )
}
export default App;

