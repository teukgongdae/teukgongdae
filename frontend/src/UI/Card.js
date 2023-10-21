import "../Space/Space.css";
import imgicon1 from "../Assets/space1.jpeg"
import imgicon2 from "../Assets/space2.jpeg"
import Days from "./Days";
import Date from "./Date";
import Tags from "./Tags";
import FlippedClock from "./FlippedClock";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Card = (props) => {
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);

    useEffect(() => {
        setTags(props.tags);
    }, [])

    const redirectToSpaceHandler = (id) => {
        navigate("/space/" + id);
    }

    return (
        <div className="card">
            <div className="space-card" onClick={() => { redirectToSpaceHandler(props.id) }}>
                <div className={props.status === "대여 가능" ? "space-status-red" : "space-status-gray"}>
                    {props.status}
                </div>
                <div className="space-container-price">
                    <div className="space-price">
                        {props.price}원 / 시간
                    </div>
                </div>
                {props.id === 1 ? <img src={imgicon1} alt="empty img" className="space-card-image" /> : <img src={imgicon2} alt="empty img" className="space-card-image" />}
                <div className="space-card-title">
                    {props.title}
                </div>
                <Tags tags={props.tags} isModify={false}/>
                <div className="space-card-container-periodic">
                    {props.days === "0000000" ? <Date date={props.date} isModify="false" /> : <Days days={props.days} isModify="false" />}
                </div>
                <div className="space-card-container-time-writer">
                    <FlippedClock start_time={props.start_time} end_time={props.end_time} />
                    <div className="space-card-writer">
                        {props.user_name}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

// props : user_name(string), days(string), date(string), start_time(string), end_time(string), tags([]string), price(int), title(string), status(string), id(int)
// example : <Card user_name="최고뇩" days="0001100" date="2023/12/12" start_time="1730" end_time="2200" tags={["tag1", "tag2"]} price={1200} title="탐앤탐스 율전점" status="대여 마감" id={1} />