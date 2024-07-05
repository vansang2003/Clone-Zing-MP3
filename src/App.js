import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Home, Public, Login } from "./containers/public/";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";


function App() {
  // const { test } = useSelector(state => state.app)
  // console.log(test)
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>


          <Route path={path.STAR} element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
