import "./principal.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

export const Principal = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleButtonClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <>
      <div className="muestra">
        <header>
          <p>Dashboard</p>
          <button onClick={handleButtonClick}>
            <p>Cambiar Fecha o Periodo</p>
          </button>
        </header>

        <div className="dashboard">
          <div>
            <h2>68</h2>
            <p>Ordenes del día de hoy</p>
          </div>
          <div>
            <h2>12</h2>
            <p>Usuarios nuevos</p>
          </div>
          <div>
            <h2>S/ 13,500.00</h2>
            <p>Ingresos de hoy</p>
          </div>
        </div>

        {showCalendar && (
          <div className="calendar-container">
            <DatePicker
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
            />
          </div>
        )}
      </div>
    </>
  );
};
