import React from "react"


export default function DateTime(props){
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = weekdays[props.date.getDay()]
    let hour = props.date.getHours()
    let minutes = props.date.getMinutes()
        if (minutes < 10) {
    minutes = `0${minutes}`
    } 
        if (hour < 10) {
    hour = `0${hour}`
  }

    return (<span className="DateTime">`${day} ${hour}:${minutes}`</span>)
    
};


