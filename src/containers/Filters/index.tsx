import { DatePicker, Input } from "antd";
import React from "react";

interface FiltersProps {
  buscar: () => void
  filter: any
  setFilter: (data: any) => void
}

const Filters: React.FC<FiltersProps> = ({ filter, setFilter }) => {
  return (<section className="show-hotels__filters">
    <h3>Filtros</h3>
    <DatePicker className="input" placeholder="Fecha de entrada" onChange={(date, dateString) => {
      console.log(dateString);
      setFilter({
        ...filter,
        entryDate: dateString
      });
    }} />
    <DatePicker className="input" placeholder="Fecha de salida" onChange={(date, dateString) => {
      setFilter({
        ...filter,
        dapartureDate: dateString
      });
    }}/>
    <Input className="input" placeholder="Cantidad de persona" onChange={e => {
      setFilter({
        ...filter,
        accountPerson: e.target.value
      });
    }}/>
    <Input className="input" placeholder="Ciudad de destino" onChange={e => {
      setFilter({
        ...filter,
        city: e.target.value
      });
    }}/>
  </section>);
};

export default Filters;
