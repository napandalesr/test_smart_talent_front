import { Table } from 'antd';
import React from 'react';
import { type typeDataHotels } from '../../utils/constans';

type TableHotelProps = {
  columns: any
  data: typeDataHotels[]
}

const TableHotel: React.FC<TableHotelProps> = ({ columns, data }) => {
  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default TableHotel;
