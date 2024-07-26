import React from "react";
import { Outlet } from "react-router-dom";
import SidebarLeft from "../../components/SidebarLeft";
import SidebarRight from "../../components/SidebarRight";
import { Player, Header } from "../../components";

const Public = () => {
  return (
    <div className="w-full relative h-screen flex flex-col bg-main-300">
      <div className="w-full h-full flex flex-auto" >
        <div className="w-[240px] h-full flex-none ">
          <SidebarLeft />
        </div>
        <div className="flex-auto ">
          <div className='h-[70px] px-[59px] flex items-center mb-5'>
            <Header/>
          </div>
          <Outlet />
        </div>
        <div className="w-[329px] flex-none hidden 1600:flex animate-slide-left">
          <SidebarRight />
        </div>
      </div>
      <div className=" w-full h-[90px] fixed bottom-0 left-0 right-0">
        <Player/>
      </div>
    </div>
  );
};

export default Public;
