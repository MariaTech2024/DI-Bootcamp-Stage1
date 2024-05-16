import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';
import { useDispatch } from 'react-redux';
import { setSelectedDay } from '../features/taskSlice';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const dispatch = useDispatch();
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
      const formattedDate = date.toISOString().split('T')[0];
      dispatch(setSelectedDay(formattedDate));
    };
  
    return (
      <div className="calendar-container">
        <h2 className="calendar-title">Select a Day</h2>
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