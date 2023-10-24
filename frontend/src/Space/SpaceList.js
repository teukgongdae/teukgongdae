import "./SpaceList.css";
import Header from "../UI/Header";
import { useState } from "react";
import axios from "axios";
import imgicon from "../Assets/space2.jpeg";
import Card from "../UI/Card";
import Footer from "../UI/Footer";


const SpaceList = () => {
    // const [spacesInfo, setSpacesInfo] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get("http://localhost/spaces/space")
    //         .then((response) => {
    //             setSpacesInfo(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [])

    const [spacesInfo, setSpacesInfo] = useState([
        {
            id: 1,
            title: "탐앤탐스",
            user_name: "최고뇩",
            tags: ["카페", "집"],
            price: 1200,
            date: "0000-00-00",
            days: "1101001",
            start_time: "1200",
            end_time: "1530",
            status: "대여 가능"
        },
        {
            id: 2,
            title: "스타벅스 천천점",
            user_name: "조승현",
            tags: ["음식점", "카페", "휴식"],
            price: 24400,
            date: "2023-11-12",
            days: "0000000",
            start_time: "0900",
            end_time: "1930",
            status: "대여 마감"
        },
    ]); // TEST

    return <div className="page">
        <Header category="SPACE" />
        <div className="space">
            {spacesInfo.map((item, index) => (
                <Card user_name={item.user_name} days={item.days} date={item.date} start_time={item.start_time} end_time={item.end_time} tags={item.tags} price={item.price} title={item.title} status={item.status} id={item.id} />
            ))}
        </div>
        <Footer />
    </div>
}

export default SpaceList;