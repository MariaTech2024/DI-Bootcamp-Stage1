import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';
import { useDispatch } from 'react-redux';
import { setSelectedDay } from '../features/taskSlice';

//Functional component for the calendar
const Calendar = () => {
  //State to manage the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());
  //useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  //Function to handle date change
  const handleDateChange = (date) => {
    //Update selectedDate state with the new date
    setSelectedDate(date);
    //Format the date to yyyy-MM-dd format
    const formattedDate = date.toISOString().split('T')[0];
    //Dispatch action to set the selected day in Redux store
    dispatch(setSelectedDay(formattedDate));
  };

  //JSX to render the calendar component
  return (
    <div className="calendar-container">
      {/* Title */}
      <h2 className="calendar-title">Select a Day</h2>
      {/* Date picker component */}
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        className="date-picker"
      />
    </div>
  );
};


export default Calendar;