import React, { useEffect, useState } from "react";
import { Input } from "antd";

import ShowHotels from "../../containers/showHotels";
import { useGetHotels } from "../../hooks/queries/use-get-hotels";

import './style.scss';
import { type typeDataHotels } from "../../utils/constans";

const HomeTreveler: React.FC = () => {
  const [hotels, setHotels] = useState<typeDataHotels[]>([]);
  const [search, setSeach] = useState<typeDataHotels[]>([]);
  const [filter, setFilter] = useState({
    palabra: '',
    entryDate: '',
    dapartureDate: '',
    accountPerson: '',
    city: ''
  });
  const { data } = useGetHotels();

  useEffect(() => {
    buscar();
  }, [filter]);

  const buscar = () => {
    if (filter.palabra !== '') {
      buscarDateEntry(hotels.filter(item => item.name.includes(filter.palabra)));
    } else {
      buscarDateEntry(hotels);
    }
  };

  const buscarDateEntry = (dataFilter: typeDataHotels[]) => {
    if (filter.entryDate !== "") {
      buscarDateOut(dataFilter.filter(item => {
        const res = item.rooms.filter(itemRoom => itemRoom.entryDate === filter.entryDate);
        return res.length > 0;
      }));
    } else {
      buscarDateOut(dataFilter);
    }
  };

  const buscarDateOut = (dataFilter: typeDataHotels[]) => {
    if (filter.dapartureDate !== "") {
      buscarAccountPerson(dataFilter.filter(item => {
        const res = item.rooms.filter(itemRoom => itemRoom.dapartureDate === filter.dapartureDate);
        return res.length > 0;
      }));
    } else {
      buscarAccountPerson(dataFilter);
    }
  };

  const buscarAccountPerson = (dataFilter: typeDataHotels[]) => {
    if (filter.accountPerson !== "") {
      buscarCity(dataFilter.filter(item => {
        const res = item.rooms.filter(itemRoom => itemRoom.amountPerson === parseInt(filter.accountPerson));
        return res.length > 0;
      }));
    } else {
      buscarCity(dataFilter);
    }
  };

  const buscarCity = (dataFilter: typeDataHotels[]) => {
    if (filter.city !== '') {
      setSeach(dataFilter.filter(item => item.city.toLocaleLowerCase() === filter.city.toLocaleLowerCase()));
    } else {
      setSeach(dataFilter);
    }
  };
  useEffect(() => {
    setHotels(data);
    setSeach(data);
  }, [data]);
  return <section className="hotel">
    <h2>Bienvenido</h2>
    <hr />
    <Input placeholder="Buscar..." onChange={e => {
      setFilter({
        ...filter,
        palabra: e.target.value
      });
      buscar();
    }}/>
    <ShowHotels data={search} buscar={buscar} filter={filter} setFilter={setFilter}/>
  </section>;
};

export default HomeTreveler;
