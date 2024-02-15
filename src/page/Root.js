import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { routes } from "../config/routesConfigs";

const Root = () => {
     return (
          <div className=" w-full h-fit  ">
               <div className=" w-full h-[70px] border-b-2 border-gray-600 flex flex-row justify-between ps-8 pe-8">
                    <h1 className=" w-fit h-full flex flex-col justify-center font-poppins text-[24px] font-bold">
                         SITRA MOTOR MANAGEMENT
                    </h1>
                    <div className=" w-fit h-full flex flex-row gap-[2rem]  items-center ">
                         <NavLink
                              to={routes.home.route}
                              className=" w-fit h-fit font-poppins text-[18px] font-[600] "
                         >
                              HOME
                         </NavLink>
                         <NavLink
                              to={routes.about.route}
                              className=" w-fit h-fit font-poppins text-[18px] font-[600] "
                         >
                              About us
                         </NavLink>
                         <NavLink
                              to={routes.signin.route}
                              className=" w-fit h-fit font-poppins text-[18px] font-[600] "
                         >
                              Sign in
                         </NavLink>
                    </div>
               </div>
               <div className=" w-full ">
                    <Outlet />
               </div>
          </div>
     );
};

export default Root;
