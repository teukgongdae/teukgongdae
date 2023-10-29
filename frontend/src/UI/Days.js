import "./Days.css";
import { useEffect, useState } from "react";

const Days = (props) => {
    const [days, setDays] = useState(props.days);
    const [mount, setMount] = useState(false);

    const daysClickHandler = (index) => {
        if (props.isModify === false) {
            return;
        }
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

    useEffect(() => {
        if (mount === false) {
            setMount(true);
            return;
        }
        props.onDaysChange(days);
    }, [days])

    return (
        <div className="days">
            <div className="date-container">
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
            </div>
        </div>);
};

export default Days;

// props : days(string), isModify(bool)
// example : <Days days="1100111" isModify={true}/>

