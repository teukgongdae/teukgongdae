import { useEffect, useState } from "react";
import "./Days.css";

const Days = (props) => {
    const [days, setDays] = useState("0000000");

    useEffect(() => {
        setDays(props.days);
    }, [])

    const daysClickHandler = (index) => {
        let tempDaysString = days.split("");
        let dayOfDaysString = days[index];

        if (dayOfDaysString === "1") {
            dayOfDaysString = "0";
        } else {
            dayOfDaysString = "1";
        }
        tempDaysString[index] = dayOfDaysString;
        setDays(tempDaysString.join(""));
    }

    return (
        <div className="days-container">
            <div className={days[0] === '1' ? "days-red" : "days-white"} onClick={() => daysClickHandler(0)}>
                월
            </div>
            <div className={days[1] === '1' ? "days-red" : "days-white"} onClick={() => daysClickHandler(1)}>
                화
            </div>
            <div className={days[2] === '1' ? "days-red" : "days-white"} onClick={() => daysClickHandler(2)}>
                수
            </div>
            <div className={days[3] === '1' ? "days-red" : "days-white"} onClick={() => daysClickHandler(3)}>
                목
            </div>
            <div className={days[4] === '1' ? "days-red" : "days-white"} onClick={() => daysClickHandler(4)}>
                금
            </div>
            <div className={days[5] === '1' ? "days-red" : "days-white"} onClick={() => daysClickHandler(5)}>
                토
            </div>
            <div className={days[6] === '1' ? "days-red" : "days-white"} onClick={() => daysClickHandler(6)}>
                일
            </div>
        </div>);
};

export default Days;

// props : days
// example : <Days days="1100111"/>

