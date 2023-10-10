import "./Space.css";
import Header from "../UI/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import imgicon from "../Assets/empty-img-icon.png";

const Space = () => {
    const [spacesInfo, setSpacesInfo] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost/golang/spaces")
            .then((response) => {
                setSpacesInfo(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return <div className="page">
        <Header category="SPACE" />
        <div className="space">
            {spacesInfo.map((item, index) => (
                <div className="space-card">
                    <div className={item.STATUS === 1 ? "space-status-red" : "space-status-gray"}>
                        {item.STATUS === 1 ? "대여 가능" : "대여 마감"}
                    </div>
                    <div className="space-container-price">
                        <div className="space-price">
                            {item.PRICE}원 / 시간
                        </div>
                    </div>
                    <div>
                        <img src={imgicon} alt="empty img" className="space-card-image" />
                    </div>
                    <div className="space-card-title">
                        {item.TITLE}
                    </div>
                    <div className="space-card-tags">
                        #{item.TAG1} #{item.TAG2} #{item.TAG3}
                    </div>
                    <div className="space-card-container-periodic">
                        <div className={item.IS_PERIODIC ? "space-card-periodic" : "space-card-not-periodic"}>
                            {item.IS_PERIODIC ? "정기" : "비정기"}
                        </div>
                        {item.IS_PERIODIC ? <div className="space-card-container-days">
                            <div className={parseInt(item.DAYS / 64) === 1 ? "space-card-days-red" : "space-card-days-white"}>
                                월
                            </div>
                            <div className={parseInt((item.DAYS % 64) / 32) === 1 ? "space-card-days-red" : "space-card-days-white"}>
                                화
                            </div>
                            <div className={parseInt((item.DAYS % 32) / 16) === 1 ? "space-card-days-red" : "space-card-days-white"}>
                                수
                            </div>
                            <div className={parseInt((item.DAYS % 16) / 8) === 1 ? "space-card-days-red" : "space-card-days-white"}>
                                목
                            </div>
                            <div className={parseInt((item.DAYS % 8) / 4) === 1 ? "space-card-days-red" : "space-card-days-white"}>
                                금
                            </div>
                            <div className={parseInt((item.DAYS % 4) / 2) === 1 ? "space-card-days-red" : "space-card-days-white"}>
                                토
                            </div>
                            <div className={parseInt((item.DAYS % 2) / 1) === 1 ? "space-card-days-red" : "space-card-days-white"}>
                                일
                            </div>
                        </div> :
                            <div className="space-card-date">
                                {item.DATE}
                            </div>}
                    </div>
                    <div className="space-card-container-time-writer">
                        <div className="space-card-time">
                            {item.START_TIME} - {item.END_TIME}
                        </div>
                        <div className="space-card-writer">
                            {item.USER_NAME}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Space;