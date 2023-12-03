import { Button, Form, Input, Switch } from "antd";
import React from "react";

interface FormHotelProps {
  onFinish: (data: any) => void
}

const FormHotel: React.FC<FormHotelProps> = ({ onFinish }) => {
  return (
    <>
    <h2>Registra hotel</h2><Button>Volver</Button>
    <hr />
      <Form
      onFinish={onFinish}>
        <Form.Item
        name='name'
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Por favor ingrese el Nombre!' }]}
        >
          <Input placeholder="Nombre"/>
        </Form.Item>
        <Form.Item
        name='direction'
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Por favor ingrese la Dirección!' }]}
        >
          <Input placeholder="Dirección"/>
        </Form.Item>
        <Form.Item
        name='telephone'
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Por favor ingrese el Teléfono!' }]}
        >
          <Input placeholder="Teléfono"/>
        </Form.Item>
        <Form.Item
        name='city'
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Por favor ingrese la Ciudad!' }]}
        >
          <Input placeholder="Ciudad"/>
        </Form.Item>
        <Form.Item
        name='disable'
        label='Deshabilitar'
        >
          <Switch />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
          <Button type="primary" htmlType="submit">Guardar</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormHotel;
