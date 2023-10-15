import { useEffect, useState } from "react";
import "./Date.css";

const Date = (props) => {
    const [date, setDate] = useState("YYYY/MM/DD");
    const [inputAlert, setInputAlert] = useState(false);

    useEffect(() => {
        setDate(props.date);
    }, [])

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }

    useEffect(() => {
        if (date.match(/^(20[2-9][0-9])[/](1[0-2]|0[1-9])[/]([0-2][1-9]|[1-3]0|31)$/)) {
            setInputAlert(false);
        } else {
            setInputAlert(true);
        }
    }, [date])

    return (
        <div className="date">
            {props.isModify === true ?
                <div className="date-container">
                    <input type="text" placeholder="ex) 2023/10/31" value={date} onChange={dateChangeHandler} className={inputAlert === false ? "date-input" : "date-input-wrong"} />
                    {inputAlert === true ?
                        <div className="date-container-alert">
                            <div className="date-alert">
                                올바른 날짜 형식이 아닙니다.
                            </div>
                            <div className="date-alert">
                                2020년 1월 1일부터 입력 가능합니다. ex) 2020/01/01
                            </div>
                        </div>
                        :
                        ""
                    }
                </div>
                :
                <div className="date-date">
                    {date}
                </div>
            }
        </div>
    );
};

export default Date;

// props : date(string), isModify(bool)
// example : <Date date="2017/10/13" isModify={true}/>