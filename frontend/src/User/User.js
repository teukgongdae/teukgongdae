import "./User.css";
import userimage from "../Assets/profile-icon.png"
import img_star from "../Assets/star-icon.png"
import Header from "../UI/Header";
import Card from "../UI/Card";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Footer from "../UI/Footer";

const User = () => {
    let { spaceid } = useParams();
    // const [userData, setUserData] = useState({});
    // const [favoriteData, setFavoriteData] = useState([]);
    // const [reviewData, setReviewData] = useState([]);
    const [click, setClick] = useState("reviews");

    const [userData, setUserData] = useState(
        {
            id: 2,
            name: "조승현",
            rate: 4.3,
            rate_count: 5,
            email: "abc123@naver.com",
            body: "안녕하세요. 율전동에서 카페를 운영하고있는 조승현이라고 합니다.",
            favorites: ["1", "2"]
        }); // TEST

    const [favoriteData, setFavoriteData] = useState([
        {
            id: 1,
            title: "스타벅스 천천점",
            user_name: "조승현",
            tags: ["음식점", "카페", "휴식"],
            price: 24400,
            date: "2023-11-12",
            days: "0000000",
            start_time: "1200",
            end_time: "1430",
            status: "대여 가능",
        },
        {
            id: 2,
            title: "탐앤탐스 율전점",
            user_name: "최윤석",
            tags: ["카페", "커피"],
            price: 2180,
            date: "2023-11-12",
            days: "1101001",
            start_time: "1400",
            end_time: "1630",
            status: "대여 마감",
        },
    ]); // TEST

    const [reviewData, setReviewData] = useState([
        {
            id: 1,
            user_id: 2,
            space_id: 2,
            writer: "최고뇩",
            rate: 4,
            date: "2023/12/11",
            body: `새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다. 국회에서 의결된 법률안은 정부에 이송되어 15일 이내에 대통령이 공포한다. 모든 국민은 보건에 관하여 국가의 보호를 받는다. 탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다. 대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다.

            정당의 설립은 자유이며, 복수정당제는 보장된다. 대법원과 각급법원의 조직은 법률로 정한다. 대통령으로 선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다. 군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다. 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다.`,
        },
        {
            id: 2,
            user_id: 2,
            space_id: 2,
            writer: "조짱맨",
            rate: 2,
            date: "2023/12/08",
            body: `모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다. 지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다. 모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다. 계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다.`,
        },
    ]); // TEST

    const changeImageHandler = () => {
        console.log("CHANGE");
    }

    const changeClickHandler = (category) => {
        if (category === "reviews" && click === "favorites") {
            setClick("reviews");
        } else if (category === "favorites" && click === "reviews") {
            setClick("favorites");
        } else {
            return;
        }
    }

    return (
        <div className="user">
            <Header category="PROFILE" />
            <div className="user-container-profile">
                <div className="user-container-image">
                    <img src={userimage} alt="user" className="user-image-profile" />
                    <input
                        type="button"
                        className="user-button-image"
                        value="프로필사진 변경"
                        onClick={changeImageHandler}
                    />
                </div>
                <div className="user-profile">
                    <div className="user-profile-without-body">
                        <div className="user-profile-name">
                            {userData.name}
                        </div>
                        <div className="user-profile-rate">
                            <img src={img_star} alt="star" className="user-image-star" />
                            {userData.rate}
                            <div className="user-profile-rate-count">
                                &nbsp; 총 {userData.rate_count}명
                            </div>
                        </div>
                        <div className="user-profile-email">
                            {userData.email}
                        </div>
                    </div>
                    <div className="user-profile-body">
                        {userData.body}
                    </div>
                </div>
            </div>
            <div className="user-container-review-favorite">
                <div className="user-container-category">
                    <div className={click === "reviews" ? "user-category-clicked" : "user-category"} onClick={() => changeClickHandler("reviews")}>
                        최근 {userData.name}님이 받은 후기
                    </div>
                    <div className={click === "favorites" ? "user-category-clicked" : "user-category"} onClick={() => changeClickHandler("favorites")}>
                        {userData.name}님의 관심공간
                    </div>
                </div>
                {click === "favorites"
                    ?
                    <div className="user-container-favorites">
                        {favoriteData.map((item) => (
                            <Card user_name={item.user_name} days={item.days} date={item.date} start_time={item.start_time} end_time={item.end_time} tags={item.tags} price={item.price} title={item.title} status={item.status} id={item.id} />
                        ))}
                    </div>
                    :
                    <div className="user-container-reviews">
                        {reviewData.map((item) => (
                            <div className="user-review">
                                <div className="user-container-review-top">
                                    <div className="user-container-review-topleft">
                                        <div className="user-review-writer">
                                            {item.writer}
                                        </div>
                                        <div className="user-review-writer">
                                            <img src={img_star} alt="star" className="user-image-star" /> {item.rate}
                                        </div>
                                    </div>
                                    <div className="user-container-review-topright">
                                        <div className="user-review-date">
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                                <div className="user-review-review">
                                    {item.body}
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
            <Footer/>
        </div>
    );
}

export default User;