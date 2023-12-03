import React from "react";
import { notification } from "antd";

import FormHotel from "../../containers/FormHotel";
import { useCreatHotel } from "../../hooks/mutations/use-create-hotel";

import "./style.scss";

const Hotel: React.FC = () => {
  const { createHotel } = useCreatHotel();
  const saveHotel = (data: any) => {
    createHotel(
      {
        requestData: {
          ...data,
          user: {
            id: localStorage.getItem('idUser')
          }
        }
      },
      {
        onSuccess: () => {
          notification.success({
            message: 'Exito',
            description: 'Hotel guardado correctamente',
            duration: 2
          });
        },
        onError: () => {
          console.log("Error");
        }
      }
    );
  };
  return (
    <FormHotel onFinish={ saveHotel }/>
  );
};

export default Hotel;
