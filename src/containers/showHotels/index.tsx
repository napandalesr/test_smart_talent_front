import React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";
import { _Routes, type typeDataHotels } from "../../utils/constans";
import Filters from "../Filters";

import "./style.scss";

interface ShowHotelsProps {
  data: typeDataHotels[]
  buscar: () => void
  filter: any
  setFilter: (data: any) => void
}

const ShowHotels: React.FC<ShowHotelsProps> = ({ data, buscar, filter, setFilter }) => {
  return (
    <section className="show-hotels">
      <List
      itemLayout="vertical"
      size="large"
      className="show-hotels__list"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <Link to={`${_Routes.hotel}/${item.id}`}>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.name}</a>}
              description={<>
              <span>Ciudad: <strong>{item.city}</strong></span>
              <span>Dirección: <strong>{item.direction}</strong></span>
              <span>Habitaciones: <strong>{item.rooms.length}</strong></span>
              </>}
            />
          </Link>
        </List.Item>
      )}>
      </List>
      <Filters buscar={buscar} filter={filter} setFilter={setFilter}/>
    </section>
  );
};

export default ShowHotels;
