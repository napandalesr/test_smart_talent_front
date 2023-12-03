import React, { useState } from "react";
import { Button, Form, Input } from "antd";

interface FormContactEmergencyProps {
  onFinish: (data: any, setSaved: any) => void
}

const FormContactEmergency: React.FC<FormContactEmergencyProps> = ({ onFinish }) => {
  const [saved, setSaved] = useState<boolean>(false);

  const sendData = (data: any) => {
    onFinish(data, setSaved);
  };
  return (<>
  <h5 className="booking__title">Contacto de emergencia</h5>
  <Form
  onFinish={sendData}>
    <Form.Item
    name="name"
    rules={[{ required: true, message: 'Por favor ingrese el Nombre!' }]}>
      <Input placeholder="Nombres"/>
    </Form.Item>
    <Form.Item
    name="telephone"
    rules={[{ required: true, message: 'Por favor ingrese el Teléfono!' }]}>
      <Input placeholder="Teléfono"/>
    </Form.Item>
    {
      saved
        ? <p style={{ textAlign: 'center', color: 'red' }}>Guardado correctamente</p>
        : <Button className="button-booking" type="primary" htmlType="submit">Guardar</Button>
    }
  </Form>
  </>);
};

export default FormContactEmergency;
