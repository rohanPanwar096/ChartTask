import React, {useState} from 'react'
import Chart from "./Chart";
import Input from "./Input";

export default function Resources(props) {
    const [color, setColor] = useState("blue")
    const colourDetermination = (color) => {
        switch(color) {
            case "white":
            return {colorCode: "white", };
            
            case 17:
                return "orange";

            case 18:
                return "gray";
            
            case 19:
                return "gray";
            
            case 20:
                return "purple";

            case 21:
                return "red";
            
            case 22:
                return "red";
            
            case 23:
                return ""
            default:
                return null;
        }
    }

    console.log(props.colors)

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{flexDirection: "column"}}>
                <h3>Resources</h3>
                {props.colors.map((color, index) => {
                    return (<h5 onClick={() => {
                        setColor(color)
                    }}>R{index + 1}<span style={{backgroundColor: `${color}`, marginLeft: "10px", cursor: "pointer"}}>&nbsp;&nbsp;&nbsp;&nbsp;</span></h5>)
                }) }
            </div>
            <Input color={color}/>
            {/* <Chart month="Nov" week1="Week 1" week2="Week 2" colourDetermination={colourDetermination}/>
            <Chart month="Dec" week1="Week 3" colourDetermination={colourDetermination}/> */}
        </div>
    )
}
