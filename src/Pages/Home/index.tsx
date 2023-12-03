import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";

import TableHotel from "../../containers/TableHotel";
import { useGetHotelsId } from "../../hooks/queries/use-get-hotels-id";
import { type ColumnTableType, _Routes, type typeDataHotels } from "../../utils/constans";

import './style.scss';

const columns: ColumnTableType[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Dirección',
    dataIndex: 'direction',
    key: 'direction'
  },
  {
    title: 'Ciudad',
    dataIndex: 'city',
    key: 'city'
  },
  {
    title: 'Estado',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Acciones',
    key: 'name',
    render: (_, record) => (
      <Space size="middle">
        <Button>Ver {record.id}</Button>
        <Button>Asignar habitación</Button>
      </Space>
    )
  }
];

const Home: React.FC = () => {
  const [hotels, setHotels] = useState<typeDataHotels[]>([]);
  const navigate = useNavigate();
  const { data } = useGetHotelsId(parseInt(localStorage.getItem('idUser') ?? '1'));
  useEffect(() => {
    setHotels(data);
  }, [data]);
  return <section className="hotel">
    <h2>Hoteles</h2>
    <hr />
    <Button type="primary" onClick={() => { navigate(_Routes.hotel); }}>Agregar nuevo hotel</Button>
    <TableHotel columns={columns} data={hotels}/>
  </section>;
};

export default Home;
