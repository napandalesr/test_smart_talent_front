import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import React from "react";
import { RoomEnum, RoomEnumValue, type typeDataHotels, type selectType } from "../../utils/constans";

interface FormRoomProps {
  onFinish: (data: any) => void
  hotels: typeDataHotels[]
}

const roomTypeOptions: selectType[] = [
  {
    label: RoomEnumValue.SIMPLE,
    value: RoomEnum.SIMPLE
  },
  {
    label: RoomEnumValue.DOUBLE,
    value: RoomEnum.DOUBLE
  }
];

const { RangePicker } = DatePicker;

const RoomForm: React.FC<FormRoomProps> = ({ onFinish, hotels }) => {
  return (
    <>
      <h2>Registrar habitación</h2>
      <Form
      onFinish={onFinish}>
        <Form.Item
        name="price"
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Por favor ingrese el Precio!' }]}>
          <InputNumber placeholder="Precio" style={{ width: '100%' }}/>
        </Form.Item>
        <Form.Item
        name='type'
        rules={[{ required: true, message: 'Por favor ingrese el Tipo!' }]}>
          <Select
          placeholder="Tipo"
          options={roomTypeOptions}
          />
        </Form.Item>
        <Form.Item
        name="tax"
        rules={[{ required: true, message: 'Por favor ingrese el Impuesto!' }]}>
          <Input placeholder="Impuesto"/>
        </Form.Item>
        <Form.Item
        name="amountPerson"
        rules={[{ required: true, message: 'Por favor ingrese la cantiodad de persona!' }]}>
          <InputNumber placeholder="Cantidad de personas" style={{ width: '100%' }}/>
        </Form.Item>
        <Form.Item
        name="entryDate"
        rules={[{ required: true, message: 'Por favor ingrese la fecha de entrada y salida!' }]}>
          <RangePicker style={{ width: '100%' }}/>
        </Form.Item>
        <Form.Item
        name="hotel"
        rules={[{ required: true, message: 'Por favor ingrese el Hotel!' }]}>
          <Select
          placeholder="Hotel"
          options={hotels.map(item => {
            return {
              label: item.name,
              value: item.id
            };
          })}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
          <Button type="primary" htmlType="submit">Guardar</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RoomForm;
