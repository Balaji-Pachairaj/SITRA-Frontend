import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
     const master = useSelector((state) => {
          return state.master;
     });
     return (
          <div className=" text-center">
               <h1 className=" font-poppins"> Poppins : {master.auth.email}</h1>
               <h1 className=" font-inter"> Inter : {master.auth.email}</h1>
               <h1 className=" font-montserrat">
                    Montserrat : {master.auth.email}
               </h1>
               <h1 className="  font-roboto ">Roboto : {master.auth.email}</h1>
          </div>
     );
};

export default Home;
