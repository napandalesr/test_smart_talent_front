import React, { useState } from "react";
import { notification } from "antd";
import { useDispatch } from "react-redux";

import LoginForm from "../../containers/LoginForm";
import { useAuth } from "../../hooks/mutations/use-auth";
import FormRegister from "../../containers/FormRegister";
import { useCreateUser } from "../../hooks/mutations/use-create-user";
import { RoleEnum } from "../../utils/constans";
import { _user } from "../../redux/actions/user";

import './style.scss';

const Login: React.FC = () => {
  const { authentication } = useAuth();
  const { createUser } = useCreateUser();
  const dispach = useDispatch();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [agency, setAgency] = useState<boolean>(false);

  const authUser = (data: any) => {
    authentication({
      requestData: {
        ...data
      }
    },
    {
      onSuccess: (response) => {
        if (response.hasOwnProperty('accessToken')) {
          dispach(_user({
            id: response.id,
            name: response.name,
            lastName: response.lastName,
            email: response.email,
            role: response.role
          }));
          localStorage.setItem("accessToken", response.accessToken);
          localStorage.setItem("idUser", response.id);
          localStorage.setItem("name", response.name);
          localStorage.setItem("lastName", response.lastName);
          localStorage.setItem("email", response.email);
          localStorage.setItem("role", response.role);
          location.reload();
          notification.success({
            message: 'Bienvenido',
            duration: 2
          });
        } else {
          notification.error({
            message: 'Error',
            description: 'Usuario o contraseña incorrecto',
            duration: 2
          });
        }
      },
      onError: (error) => {
        console.log(error, "Error de autenticación");
      }
    });
  };

  const saveUser = (data: any) => {
    if (data.password === data.confirmPassword) {
      const requestData = {
        ...data,
        role: agency ? RoleEnum.AGENCY : RoleEnum.TRAVELER
      };
      createUser({
        requestData
      },
      {
        onSuccess: response => {
          if (response.hasOwnProperty('id')) {
            notification.success({
              message: 'Exito',
              description: 'Usuario guardado correctamente',
              duration: 2
            });
          } else {
            notification.error({
              message: 'Error',
              description: 'Ocurrión un error al intentar guardar el usuario',
              duration: 2
            });
          }
        },
        onError: () => {
          console.log("Error Al guardar");
        }
      });
    } else {
      notification.error({
        message: 'Error',
        description: 'Las contraseñas no coinciden',
        duration: 2
      });
    }
  };
  return <section className="login">
    <div className="login__header">
      <span className={`login__header__sesion ${isLogin ? 'active' : ''}`} onClick={ () => { setIsLogin(true); }}>Inciar sesión</span>
      <span className={`login__header__sesion ${isLogin ? '' : 'active'}`} onClick={ () => { setIsLogin(false); }}>Registrarme</span>
    </div>
    {
      isLogin
        ? <LoginForm onFinish={authUser}/>
        : <FormRegister onFinish={saveUser} setAgency={setAgency}/>
    }
  </section>;
};

export default Login;
