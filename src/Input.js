import React, {useState} from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar} from "react-modern-calendar-datepicker";

export default function Input({color}) {
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("date is submitted as", date);
    }
    
    console.log("Color", color)
    const handleDateChange = (e) => {
        setDate(e.target.value)
        console.log(date)
    }

    // const handleColorUpdate = (color) => {
        
    // }

    const defaultFrom = {
        year: 2019,
        month: 4,
        day: 16,
      };
      const defaultTo = {
        year: 2019,
        month: 4,
        day: 19,
      };
      const defaultValue = {
        from: defaultFrom,
        to: defaultTo,
      };
      const [selectedDayRange, setSelectedDayRange] = useState(
        defaultValue
      );
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input type="text" value={date} onChange={handleDateChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      colorPrimary={color} // added this
      colorPrimaryLight={"black"} // and this
      shouldHighlightWeekends
    />
        </div>
    )
}
