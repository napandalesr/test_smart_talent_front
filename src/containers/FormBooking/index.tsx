import React, { useState } from "react";
import dayjs from 'dayjs';
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { type RangePickerProps } from "antd/es/date-picker";
import customParseFormat from 'dayjs/plugin/customParseFormat';

import './style.scss';

dayjs.extend(customParseFormat);

interface FormBookingProps {
  i: number
  onFinish: (data: any, setSaved: any) => void
}

const FormBooking: React.FC<FormBookingProps> = ({ i, onFinish }) => {
  const [saved, setSaved] = useState<boolean>(false);
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current > dayjs().endOf('day');
  };

  const sendData = (data: any) => {
    onFinish(data, setSaved);
  };

  return (<section className="form-booking">
  <h5 className="booking__title">Huesped {i + 1}</h5>
  <Form
  onFinish={sendData}>
    <Form.Item
    name='name'
    className="input"
    rules={[{ required: true, message: 'Por favor ingrese el Nombre!' }]}>
      <Input placeholder="Nombres" className="input__value"/>
    </Form.Item>
    <Form.Item
    name='lastName'
    className="input"
    rules={[{ required: true, message: 'Por favor ingrese el Apellido!' }]}>
      <Input placeholder="Apellidos" className="input__value" />
    </Form.Item>
    <Form.Item
    name="birthdate"
    className="input"
    rules={[{ required: true, message: 'Por favor ingrese la fecha de nacimiento!' }]}>
      <DatePicker placeholder="Fecha de nacimiento" className="input__value" disabledDate={disabledDate}/>
    </Form.Item>
    <Form.Item
    name="gender"
    className="input"
    rules={[{ required: true, message: 'Por favor ingrese el género!' }]}>
      <Select placeholder="Género" className="input__value" options={[
        {
          label: "Masculino",
          value: "MALE"
        },
        {
          label: "Femenino",
          value: "FEMALE"
        }
      ]}/>
    </Form.Item>
    <Form.Item
    name="documentType"
    className="input"
    rules={[{ required: true, message: 'Por favor ingrese el tipo de documento!' }]}>
      <Select placeholder="Tipo de documento" className="input__value" options={[
        {
          label: "Cédula de ciudadanía",
          value: "CC"
        },
        {
          label: "Cédula de extranjería",
          value: "CE"
        },
        {
          label: "Tarjeta de identidad",
          value: "TI"
        }
      ]}/>
    </Form.Item>
    <Form.Item
    name="documentNumber"
    className="input"
    rules={[{ required: true, message: 'Por favor ingrese el número de documento!' }]}>
      <InputNumber placeholder="Número de documento" className="input__value"/>
    </Form.Item>
    <Form.Item
    name="email"
    className="input"
    rules={[{ required: true, message: 'Por favor ingrese el Correo!', type: "email" }]}>
      <Input placeholder="Correo" className="input__value"/>
    </Form.Item>
    <Form.Item
    name="telephone"
    className="input"
    rules={[{ required: true, message: 'Por favor ingrese el Número de teléfono!' }]}>
      <InputNumber placeholder="Teléfono" className="input__value"/>
    </Form.Item>
    {
      saved
        ? <p style={{ textAlign: 'center', color: 'red' }}>Guardado correctamente</p>
        : <Button className="button-booking" type="primary" htmlType="submit">Guardar</Button>
    }
  </Form>
  </section>);
};

export default FormBooking;
