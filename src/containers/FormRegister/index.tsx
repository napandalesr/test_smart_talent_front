import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

interface LoginFormProps {
  onFinish: (data: any) => void
  setAgency: (value: boolean) => void
}

const FormRegister: React.FC<LoginFormProps> = ({ onFinish, setAgency }) => {
  return (
    <Form
      name="basic"
      className="login__form__register"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="name"
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Por favor ingrese su Nombre!' }]}
      >
        <Input placeholder="Nombre" />
      </Form.Item>

      <Form.Item
        name="lastName"
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Por favor ingrese su Apellido!' }]}
      >
        <Input placeholder="Apellido" />
      </Form.Item>

      <Form.Item
        name="email"
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Por favor ingrese su Correo!', type: 'email' }]}
      >
        <Input placeholder="Correo" />
      </Form.Item>

      <Form.Item
        name="password"
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}
      >
        <Input.Password placeholder="Contraseña"/>
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        className="confirmPassword"
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'Por favor confirme su contraseña!' }]}
      >
        <Input.Password placeholder="Confirmar contraseña"/>
      </Form.Item>

      <Form.Item
        name="remember"
        className="checkbox"
      >
        <Checkbox onChange={e => { setAgency(e.target.checked); }}>Soy agencia de viajes</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }} className="registerButton">
        <Button type="primary" htmlType="submit">
          Registrarme
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormRegister;
