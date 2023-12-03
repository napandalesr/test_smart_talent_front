import React from "react";
import { Button, Form, Input } from "antd";

interface LoginFormProps {
  onFinish: (data: any) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onFinish }) => {
  return (
    <Form
    name="basic"
    className="login__form"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
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

    <Form.Item wrapperCol={{ span: 24 }}>
      <Button type="primary" htmlType="submit">
        Iniciar sesión
      </Button>
    </Form.Item>
  </Form>
  );
};

export default LoginForm;
