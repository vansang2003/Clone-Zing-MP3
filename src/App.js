import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Home, Public, Login, Personal} from "./containers/public/";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";
import { useEffect } from "react";
import * as actions from "./store/actions";


function App() {
  const dispatch = useDispatch();
  // const { test } = useSelector(state => state.app)
  // console.log(test)
  useEffect(() => {
    dispatch(actions.getHome());
  }, [])
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.MY_MUSIC} element={<Personal/>}/>

          <Route path={path.STAR} element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
