import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { useParams, Link } from "react-router-dom";

import { useGetHotelByID } from "../../hooks/queries/use-get-hotel";
import { _Routes, type typeDataHotels } from "../../utils/constans";

import "./style.scss";

const HotelTreveler: React.FC = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState<typeDataHotels>();
  const { data } = useGetHotelByID(parseInt(id ?? '0'));
  useEffect(() => {
    setHotel(data);
    console.log(hotel);
  }, [data]);
  return (
    <>
    <h2 className="hotel-title">{hotel?.name}</h2>
    <Typography><strong>Ciudad: </strong>{hotel?.city}</Typography>
    <Typography><strong>Dirección: </strong>{hotel?.direction}</Typography>
    {
      hotel?.rooms.map((item, index) => <section className="room">
        <h3 className="room__title">Habitación # { index + 1 }</h3>
        <div className="room__feature">
          <p>Tipo: { item.type }</p>
          <p>Precio: { item.price }</p>
          <p>Impuesto: { item.tax }</p>
          <p>Cantidad de personas: { item.amountPerson }</p>
          <p>Fecha de entrada: { item.entryDate }</p>
          <p>Fecha de salida: { item.dapartureDate }</p>
        </div>
        <Link to={`${_Routes.booking}/${item.id}`} className="room__button" type="primary">Reservar</Link>
      </section>)
    }
    </>
  );
};

export default HotelTreveler;
