import React from 'react';
import "./Chart.css";

export default function Chart({month, week1, week2, colourDetermination}) {
    const novemberData = [{
        date: 16,
        timeTaken: 0, 
        // colorCode: colourDetermination(this.timeTaken),
    },
    {
        date: 17,
        timeTaken: 8,
        // colorCode: colourDetermination(this.timeTaken)
    },
       {
           date: 18,
           timeTaken: 16,
        //    colorCode: colourDetermination(this.timeTaken)
       },
       {
           date: 19,
           timeTaken: 16,
        //    colorCode: colourDetermination(this.timeTaken)
       }, 
       {
           date: 20,
           timeTaken: 24,
        //    colorCode: colourDetermination(this.timeTaken)
       },
       {
            date: 21,
            timeTaken: -1,
            // colorCode: colourDetermination(this.timeTaken)
       },
       {
           date: 22,
           timeTaken: -1,
        //    colorCode: colourDetermination(this.timeTaken)
        },
        {
            date:23,
            timeTaken: 24,
            // colorCode: colourDetermination(this.timeTaken)
        },
        {
            date: 24,
            timeTaken: 24,
            // colorCode: colourDetermination(this.timeTaken)
        },
       {
        date: 25,
        timeTaken: 8,
        // colorCode: colourDetermination(this.timeTaken)
       },
       {
        date: 26,
        timeTaken: 0,
        // colorCode: colourDetermination(this.timeTaken)
       },
       {
        date: 27,
        timeTaken: 0,
        // colorCode: colourDetermination(this.timeTaken)
       },
       {
           date: 28,
           timeTaken: -1,
        //    colorCode: colourDetermination(this.timeTaken)
       },
       {
        date: 29,
        timeTaken: -1,
        // colorCode: colourDetermination(this.timeTaken)
       }, {
        date: 30,
        timeTaken: 0,
        // colorCode: colourDetermination(this.timeTaken)
       },
   ]

    const decemberData = [{
            date: 1,
            timeTaken: 0, 
            // colorCode: colourDetermination(this.timeTaken)
        },{
            date: 2,
            timeTaken: 0,
            // colorCode: colourDetermination(this.timeTaken)
        },
           {
               date:3,
               timeTaken: 0,
            //    colorCode: colourDetermination(this.timeTaken)
           },
           {
                date: 4,
                timeTaken: 0,
                // colorCode: colourDetermination(this.timeTaken)
           },
           {
            date: 5,
            timeTaken: -1,
            // colorCode: colourDetermination(this.timeTaken)
       },
       {
           date: 6,
           timeTaken: -1,
        //    colorCode: colourDetermination(this.timeTaken)
       }
        ]

    return (
        <div>
           <table>
               <thead>
                   <tr>
                       <th><h1>{month === 1 ? "Jan" : month === 2 ? "Feb" : month === 3 ? "March" :
                       month === 4 ? "April" : month === 5 ? "May" : month === 6 ? "June" : month === 7 ? "July"
                    : month === 8 ? "Aug" : month === 9 ? "Sept" : month === 10 ? "Oct" : month === 11 ? "Nov"
                : month === 12 ? "Dec": null}</h1></th>
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
                  <div className="efforts" style={{backgroundColor: colourDetermination(row.date)}}>
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
