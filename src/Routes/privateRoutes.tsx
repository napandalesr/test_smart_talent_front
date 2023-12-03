import React from "react";
import { Route, Routes } from "react-router-dom";

import { _Routes } from "../utils/constans";
import Home from "../Pages/Home";
import Hotel from "../Pages/Hotel";
import Room from "../Pages/Room";
import HomeTreveler from "../Pages/Home/traveler";
import HotelTreveler from "../Pages/Hotel/treveler";
import Booking from "../Pages/Booking";

const RouterPrivate: React.FC = () => {
  return <>
    <Routes>
      {
        localStorage.getItem('role') === 'AGENCY'
          ? <Route path={_Routes.home} element={<Home/>}/>
          : <Route path={_Routes.home} element={<HomeTreveler/>}/>
      }

      <Route path={_Routes.hotel} element={<Hotel/>}/>
      {
        localStorage.getItem('role') === 'AGENCY'
          ? <Route path={`${_Routes.hotel}/:id`} element={<Hotel/>}/>
          : <Route path={`${_Routes.hotel}/:id`} element={<HotelTreveler/>}/>
      }
      <Route path={`${_Routes.booking}/:id`} element={<Booking/>}/>
      <Route path={`${_Routes.room}`} element={<Room/>}/>
    </Routes>
  </>;
};

export default RouterPrivate;
