import React from 'react'
import Chart from "./Chart";

export default function App() {
    return (
        <div style={{display: "flex", justifyContent: "center", backgroundColor: "whitesmoke"}}>
            <Chart month="Nov" week1="Week 1" week2="Week 2"/>
            <Chart month="Dec" week1="Week 3"/>
        </div>
    )
}
