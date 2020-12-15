import React from 'react';
import "./Chart.css";

export default function Chart({month, week1, week2}) {
    const novemberData = [{
        date: 16,
        timeTaken: 0, 
    },
    {
        date: 17,
        timeTaken: 8,
    },
       {
           date: 18,
           timeTaken: 16,
       },
       {
           date: 19,
           timeTaken: 16,
       }, 
       {
           date: 20,
           timeTaken: 24,
       },
       {
            date: 21,
            timeTaken: -1,
       },
       {
           date: 22,
           timeTaken: -1,
        },
        {
            date:23,
            timeTaken: 24,
        },
        {
            date: 24,
            timeTaken: 24,
        },
       {
        date: 25,
        timeTaken: 8
       },
       {
        date: 26,
        timeTaken: 0
       },
       {
        date: 27,
        timeTaken: 0
       },
       {
           date: 28,
           timeTaken: -1
       },
       {
        date: 29,
        timeTaken: -1
       }, {
        date: 30,
        timeTaken: 0
       },
   ]

    const decemberData = [{
            date: 1,
            timeTaken: 0, 
        },{
            date: 2,
            timeTaken: 0,
        },
           {
               date:3,
               timeTaken: 0
           },
           {
                date: 4,
                timeTaken: 0
           },
           {
            date: 5,
            timeTaken: -1
       },
       {
           date: 6,
           timeTaken: -1
       }
        ]
    return (
        <div>
           <table>
               <thead>
                   <tr>
                       <th><h1>{month}</h1></th>
                   </tr>
               </thead>
               
               <tbody>
                  <tr style={{display: "flex"}}>
                      <h3 style={{justifyContent: "flex-start"}}>{week1}</h3>
                      {week2 ? <h3 style={{paddingLeft: "318px" }}>{week2}</h3> : null}
                     </tr>
                   <div>
                    {month === "Nov" ? novemberData.map(row => {
                    return (     
                    <td>
                     <tr>{row.date}</tr>
                    <tr>
                   
                  { row.timeTaken === -1 ? (
                    <div className="noWork">
                       &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   </div>  
                  ) :
                  <div className="efforts" style={{backgroundColor: row.timeTaken === 16 ? "orange": row.timeTaken === 24 ? "violet" : row.timeTaken === 8 ? "yellow" : null}}>
                       &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;
                   </div> }
                   </tr>
                    </td> 
                    )
                   }) :
                   decemberData.map(row => {
                        return (
                            <td>
                     <tr>{row.date}</tr>
                    <tr>
                   
                  { row.timeTaken === -1 ? (
                    <div className="noWork">
                       &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   </div>  
                  ) :
                  <div className="efforts" style={{backgroundColor: row.timeTaken === 16 ? "orange": row.timeTaken === 24 ? "violet" : row.timeTaken === 8 ? "yellow" : null}}>
                       &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;
                   </div> }
                   </tr>
                    </td> 
                        )
               })}
                </div>
               </tbody>
           </table>
        </div>
    )
}
