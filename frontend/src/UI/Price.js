import "./Price.css";
import { useEffect, useState } from "react";

const Price = (props) => {
    const [price, setPrice] = useState(0.0);
    const [times, setTimes] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [daysCount, setDaysCount] = useState(0);

    useEffect(() => {
        setStartTime(parseInt(props.start_time));
        setEndTime(parseInt(props.end_time));
        setPrice(parseFloat(props.price));
    }, [])

    useEffect(() => {
        if (props.days !== "0000000") {
            let count = 0;
            for (let i = 0; i < props.days.length; i++) {
                if (props.days[i] === "1") {
                    count = count + 1;
                    setDaysCount(count);
                }
            }
        }
    }, [props.days])

    useEffect(() => {
        let subTime = String(endTime - startTime);

        if (subTime.match(/^[0-9][0-9]30$/)) {
            setTimes(parseFloat(subTime.charAt(1) + ".5"));
        } else if (subTime.match(/^[0-9][0-9]00$/)) {
            setTimes(parseFloat(subTime.charAt(1)));
        } else if (subTime.match(/^[0-9]30$/)) {
            setTimes(parseFloat(subTime.charAt(0)) + ".5");
        } else if (subTime.match(/^[0-9]00$/)) {
            setTimes(parseFloat(subTime.charAt(0)));
        }
        if (props.isModify === false) {
            return;
        }
        props.onTimeChange(String(startTime).replace(":", ""), String(endTime).replace(":", ""));
    }, [startTime, endTime])

    const startSelectHandler = (e) => {
        setStartTime(e.target.value.replace(":", ""));
    }

    const endSelectHandler = (e) => {
        setEndTime(e.target.value.replace(":", ""));
    }

    const priceHandler = (e) => {
        setPrice(e.target.value);
    }
    return (
        <div>
            {props.isModify === true ?
                <div className="price-container-input">
                    <div className="price-container-input-time">
                        <select onChange={startSelectHandler} value={startTime}>
                            <option selected>시작시간</option>
                            <option value="0000">00:00</option>
                            <option value="0030">00:30</option>
                            <option value="0100">01:00</option>
                            <option value="0130">01:30</option>
                            <option value="0200">02:00</option>
                            <option value="0230">02:30</option>
                            <option value="0300">03:00</option>
                            <option value="0330">03:30</option>
                            <option value="0400">04:00</option>
                            <option value="0430">04:30</option>
                            <option value="0500">05:00</option>
                            <option value="0530">05:30</option>
                            <option value="0600">06:00</option>
                            <option value="0630">06:30</option>
                            <option value="0700">07:00</option>
                            <option value="0730">07:30</option>
                            <option value="0800">08:00</option>
                            <option value="0830">08:30</option>
                            <option value="0900">09:00</option>
                            <option value="0930">09:30</option>
                            <option value="1000">10:00</option>
                            <option value="1030">10:30</option>
                            <option value="1100">11:00</option>
                            <option value="1130">11:30</option>
                            <option value="1200">12:00</option>
                            <option value="1230">12:30</option>
                            <option value="1300">13:00</option>
                            <option value="1330">13:30</option>
                            <option value="1400">14:00</option>
                            <option value="1430">14:30</option>
                            <option value="1500">15:00</option>
                            <option value="1530">15:30</option>
                            <option value="1600">16:00</option>
                            <option value="1630">16:30</option>
                            <option value="1700">17:00</option>
                            <option value="1730">17:30</option>
                            <option value="1800">18:00</option>
                            <option value="1830">18:30</option>
                            <option value="1900">19:00</option>
                            <option value="1930">19:30</option>
                            <option value="2000">20:00</option>
                            <option value="2030">20:30</option>
                            <option value="2100">21:00</option>
                            <option value="2130">21:30</option>
                            <option value="2200">22:00</option>
                            <option value="2230">22:30</option>
                            <option value="2300">23:00</option>
                            <option value="2330">23:30</option>
                        </select>
                        <div className="spacewrite-time-input">
                            -
                        </div>
                        <select onChange={endSelectHandler} value={endTime}>
                            <option selected>종료시간</option>
                            <option value="0000">00:00</option>
                            <option value="0030">00:30</option>
                            <option value="0100">01:00</option>
                            <option value="0130">01:30</option>
                            <option value="0200">02:00</option>
                            <option value="0230">02:30</option>
                            <option value="0300">03:00</option>
                            <option value="0330">03:30</option>
                            <option value="0400">04:00</option>
                            <option value="0430">04:30</option>
                            <option value="0500">05:00</option>
                            <option value="0530">05:30</option>
                            <option value="0600">06:00</option>
                            <option value="0630">06:30</option>
                            <option value="0700">07:00</option>
                            <option value="0730">07:30</option>
                            <option value="0800">08:00</option>
                            <option value="0830">08:30</option>
                            <option value="0900">09:00</option>
                            <option value="0930">09:30</option>
                            <option value="1000">10:00</option>
                            <option value="1030">10:30</option>
                            <option value="1100">11:00</option>
                            <option value="1130">11:30</option>
                            <option value="1200">12:00</option>
                            <option value="1230">12:30</option>
                            <option value="1300">13:00</option>
                            <option value="1330">13:30</option>
                            <option value="1400">14:00</option>
                            <option value="1430">14:30</option>
                            <option value="1500">15:00</option>
                            <option value="1530">15:30</option>
                            <option value="1600">16:00</option>
                            <option value="1630">16:30</option>
                            <option value="1700">17:00</option>
                            <option value="1730">17:30</option>
                            <option value="1800">18:00</option>
                            <option value="1830">18:30</option>
                            <option value="1900">19:00</option>
                            <option value="1930">19:30</option>
                            <option value="2000">20:00</option>
                            <option value="2030">20:30</option>
                            <option value="2100">21:00</option>
                            <option value="2130">21:30</option>
                            <option value="2200">22:00</option>
                            <option value="2230">22:30</option>
                            <option value="2300">23:00</option>
                            <option value="2330">23:30</option>
                        </select>
                    </div>
                    <input type="text" placeholder="시간 당 대여비용" value={price} onChange={priceHandler} className="spacewrite-price-input" />
                </div>
                :
                ""
            }
            <div className="spacewrite-price">
                {price !== 0.0 &&
                    <div className="spacewrite-container-price-calc">
                        <div className="price-calc">
                            시간당 대여 비용 : {price}원
                        </div>
                        <div className="price-calc">
                            {props.days !== "0000000" && props.periodic === 1 ?
                                "한 주당 대여비용 : " + String(daysCount * price * times) + "원"
                                :
                                "총합 대여비용 : " + String(times * price) + "원"
                            }
                        </div>
                    </div>}
            </div>
        </div>
    );
}

export default Price;

// props : isModify(bool), days(string), start_time(string), end_time(string), price(int)
// example : <Price isModify={false} days={spaceData.days} start_time={spaceData.start_time} end_time={spaceData.end_time} price={spaceData.price}/>