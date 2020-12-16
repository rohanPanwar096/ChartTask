import React, {useState, useEffect} from 'react';
import moment from "moment";
import ReactCalendar from "react-scroll-calendar";
// import ReactCalendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./calendar.css"
import "react-scroll-calendar/build/react-scroll-calendar.css";

export default function Calendar(props) {
    console.log(props.date)
    const day = props.date.split("-")[2]
    console.log(day);
    const month = props.date.split("-")[1]
    const year = props.date.split("-")[0]
    console.log(props.color)
    const [value, onChange] = useState(new Date());

    return (
        <div style={{display: "flex" , justifyContent: "between"}}>
            <ReactCalendar style={{backgroundColor: `${props.color}`}} minDate={moment('2019-01-01', 'YYYY-MM-DD')}
    selectedDate={moment(`${props.date}`, 'YYYY-MM-DD')}
    maxDate={moment('2019-12-31', 'YYYY-MM-DD')}/>

    <ReactCalendar minDate={moment('2020-01-01', 'YYYY-MM-DD')}
    selectedDate={moment(`${props.date}`, 'YYYY-MM-DD')}
    maxDate={moment('2020-12-31', 'YYYY-MM-DD')}/>
        </div>
    )
}




