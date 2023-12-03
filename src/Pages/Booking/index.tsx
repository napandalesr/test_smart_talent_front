import React, { useState } from "react";

import FormBooking from "../../containers/FormBooking";

import './style.scss';
import { Button, InputNumber, notification } from "antd";
import FormContactEmergency from "../../containers/FormContactEmergency";
import { useCreateBooking } from "../../hooks/mutations/use-create-booking";
import { useParams } from "react-router-dom";
import { useCreateContact } from "../../hooks/mutations/use-create-contact";

const Booking: React.FC = () => {
  const { id } = useParams();
  const [accountPerson, setAccountPerson] = useState<number>(1);
  const [idBooking, setBooking] = useState<number>(1);
  const [showFormContact, setShowFormContact] = useState<boolean>(false);
  const { createBooking } = useCreateBooking();
  const { createContact } = useCreateContact();

  const saveBooking = async (data: any, setSaved: any) => {
    createBooking({
      requestData: {
        name: data.name,
        lastName: data.lastName,
        birthdate: data.birthdate,
        gender: data.gender,
        documentType: data.documentType,
        documentNumber: data.documentNumber,
        email: data.email,
        telephone: data.telephone,
        roomId: id,
        userId: parseInt(localStorage.getItem('idUser') ?? '2')
      }
    },
    {
      onSuccess: response => {
        setBooking(response.id);
        notification.success({
          message: 'Exito',
          description: 'Huésped guardado correctamente',
          duration: 2
        });
        setSaved(true);
        setShowFormContact(true);
      },
      onError: () => {
        console.log("Error");
      }
    });
  };

  const saveContactEmergency = (data: any, setSaved: any) => {
    createContact({
      requestData: {
        ...data,
        bookingId: idBooking
      }
    },
    {
      onSuccess: () => {
        notification.success({
          message: 'Exito',
          description: 'Contácto de emergencia guardado correctamente',
          duration: 2
        });
        setSaved(true);
      }
    });
  };

  const getFormBooking = () => {
    const form = [];
    for (let i = 0; i < accountPerson; i++) {
      form.push(<FormBooking i={i} onFinish={saveBooking}/>);
    }
    return form;
  };
  return (<section className="booking">
    <p style={{ float: 'right', marginTop: '50px' }}>Cuantas personas: <InputNumber
    style={{ maxWidth: '180px' }}
      addonBefore={<Button onClick={() => { accountPerson > 1 && setAccountPerson(accountPerson - 1); }} type="link">-</Button>}
      addonAfter={<Button onClick={() => { setAccountPerson(accountPerson + 1); }} type="link">+</Button>}
      value={accountPerson} /></p>
    <h2 className="booking__title">Reserva</h2>
    {getFormBooking()}
    {
      showFormContact && <FormContactEmergency onFinish={saveContactEmergency}/>
    }
  </section>);
};

export default Booking;
