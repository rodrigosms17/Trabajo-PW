import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Calendario/calendario.css'; // Cambiado a minúsculas

const Calendario = ({ selectedDate, onDateChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onDateChange}
      inline
    />
  );
};

export default Calendario;
