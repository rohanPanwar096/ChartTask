import React from 'react'
import Chart from "./Chart";
import Resources from "./Resources"

export default function App() {
    return (
        <div style={{backgroundColor: "whitesmoke"}} >
            <Resources colors={["yellow", "purple", "violet", "white", "red"]}/>
        </div>
    )
}
