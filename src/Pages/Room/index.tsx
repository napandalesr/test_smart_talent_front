import React, { useEffect, useState } from 'react';

import RoomForm from '../../containers/RoomForm';
import { useCreatRoom } from '../../hooks/mutations/use-create-room';
import { notification } from 'antd';
import { useGetHotelsId } from '../../hooks/queries/use-get-hotels-id';
import { type typeDataHotels } from '../../utils/constans';

const Room: React.FC = () => {
  const [hotels, setHotels] = useState<typeDataHotels[]>([]);
  const { createRoom } = useCreatRoom();
  const { data } = useGetHotelsId(parseInt(localStorage.getItem('idUser') ?? '1'));

  useEffect(() => {
    setHotels(data);
  }, [data]);

  const saveRoom = (requestData: any) => {
    createRoom(
      {
        requestData: {
          ...requestData,
          entryDate: requestData.entryDate[0],
          dapartureDate: requestData.entryDate[1]
        }
      },
      {
        onSuccess: () => {
          notification.success({
            message: 'Exito',
            description: 'Habitación guardada correctamente',
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
    <RoomForm onFinish={saveRoom} hotels={hotels}/>
  );
};

export default Room;
