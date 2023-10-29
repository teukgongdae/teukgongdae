import "./Space.css";
import Header from "../UI/Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import demoimage1 from "../Assets/space2.jpeg";
import pencilicon from "../Assets/pencil-icon.png"
import empty from "../Assets/empty-img-icon.png"
import NaverMap from "../UI/NaverMap";
import Date from "../UI/Date";
import Days from "../UI/Days";
import FlippedClock from "../UI/FlippedClock";
import Tags from "../UI/Tags";
import Card from "../UI/Card";
import Price from "../UI/Price";
import Footer from "../UI/Footer";

const Space = () => {
    var mapDiv = document.getElementById('map'); // 'map'으로 선언해도 동일
    const navigate = useNavigate();

    let { spaceid } = useParams();
    const [time, setTime] = useState('');
    // const [spaceData, setSpaceData] = useState({});
    // const [relatedSpaceData, setRelatedSpaceData] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get("http://localhost/space/spaces/" + spaceid)
    //         .then((response) => {
    //             setSpaceData({
    //                 title: response.data.title,
    //                 username: response.data.user_name,
    //                 tags: response.data.tags,
    //                 price: response.data.price,
    //                 date: response.data.date,
    //                 days: response.data.days,
    //                 starttime: response.data.start_time,
    //                 endtime: response.data.end_time,
    //                 status: response.data.status
    //             });
    //             setTime(response.data.start_time + response.data.end_time);
    //             setRelatedSpaceData(response.data.relatedid);
    //         })
    //         .catch((error) => {
    //         console.log(error);
    //     })

    // for (let i = 0; i < response.data.relatedid.length; i++) {
    //      axios
    //         .get("http://localhost/space/spaces/" + spaceid)
    //         .then((response) => {
    //             setRelatedSpaceData(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }
    // }, [])

    const [spaceData, setSpaceData] = useState({
        id: 1,
        title: "탐앤탐스",
        user_name: "최고뇩",
        tags: ["카페", "집"],
        price: 1200,
        date: "0000-00-00",
        days: "1101001",
        start_time: "1200",
        end_time: "1530",
        status: "대여 가능",

        address: "서울특별시 종로구 명륜3가 53 성균관대학교",
        specific_address: "학생회관 2층 201호",
        user_image: "image_path",
        body: `모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다. 모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.

        누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지 아니한다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지 아니하다. 타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다.
        
        감사위원은 원장의 제청으로 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다. 국가의 세입·세출의 결산, 국가 및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기 위하여 대통령 소속하에 감사원을 둔다. 법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다. 법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.
        
        모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다. 국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와 권리의 본질적인 내용을 침해할 수 없다. 헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민의 재산권은 보장된다. 그 내용과 한계는 법률로 정한다.
        
        누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다. 체포 또는 구속을 당한 자의 가족등 법률이 정하는 자에게는 그 이유와 일시·장소가 지체없이 통지되어야 한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. 정부는 예산에 변경을 가할 필요가 있을 때에는 추가경정예산안을 편성하여 국회에 제출할 수 있다. 제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.
        
        모든 국민은 직업선택의 자유를 가진다. 국무총리는 국회의 동의를 얻어 대통령이 임명한다. 국회에서 의결된 법률안은 정부에 이송되어 15일 이내에 대통령이 공포한다. 대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 국가원로자문회의의 의장은 직전대통령이 된다. 다만, 직전대통령이 없을 때에는 대통령이 지명한다. 국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다. 군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.
        
        대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 국가는 농업 및 어업을 보호·육성하기 위하여 농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다. 헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.
        
        대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다. 대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다. 제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이 지명하는 자를 임명한다. 전직대통령의 신분과 예우에 관하여는 법률로 정한다. 국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다.`,
        related_3_posts_id: [2, 3]
    }); // TEST

    const [relatedSpaceData, setRelatedSpaceData] = useState([
        {
            id: 2,
            title: "스타벅스 천천점",
            user_name: "조승현",
            tags: ["음식점", "카페", "휴식"],
            price: 24400,
            date: "2023-11-12",
            days: "0000000",
            start_time: "1200",
            end_time: "1430",
            status: "대여 마감"
        },
        {
            id: 3,
            title: "동원고등학교 운동장",
            user_name: "조승현현",
            tags: ["학교", "운동장", "공터"],
            price: 24100,
            date: "0000-00-00",
            days: "1001011",
            start_time: "0900",
            end_time: "1930",
            status: "대여 가능"
        },
    ]); // TEST


    useEffect(() => {
        setTime(spaceData.start_time + spaceData.end_time);
    }, [spaceData])

    const modifyHandler = () => {
        navigate("/space/" + spaceid + "/edit");
    }

    return <div className="page">
        <Header category="SPACE INFO" />
        <div className="spaceinfo">
            <div className="spaceinfo-container-basic">
                <div className="spaceinfo-container-image">
                    <img src={demoimage1} alt="empty img" className="spaceinfo-image" />
                </div>
                <div className="spaceinfo-basic">
                    <div className="spaceinfo-title">
                        {spaceData.title}
                        <img src={pencilicon} alt="modifyicon" className="spaceinfo-icon-pencil"
                            onClick={modifyHandler}
                        />
                    </div>
                    <Tags tags={spaceData.tags} isModify={false} />
                    <div className="space-container-category">
                        <div className="spaceinfo-category">
                            음식점/카페
                        </div>
                    </div>
                    {spaceData.days === "0000000" ? <Date date={spaceData.date} isModify={false} /> : <Days days={spaceData.days} isModify={false} />}
                    <FlippedClock start_time={spaceData.start_time} end_time={spaceData.end_time} />
                    <div className="spaceinfo-price">
                        <Price isModify={false} days={spaceData.days} start_time={spaceData.start_time} end_time={spaceData.end_time} price={spaceData.price} />
                    </div>
                    <div className="space-address">
                        주소 : {spaceData.address} {spaceData.specific_address}
                    </div>
                    <NaverMap isModify={false} address={spaceData.address} />
                </div>
            </div>
            <div className="space-body">
                <div className="space-profile">
                    <img src={empty} alt="empty img" className="space-profile-image" />
                    <div className="space-profile-name">
                        {spaceData.user_name}
                    </div>
                </div>
                <div className="space-body-container-text">
                    <div className="space-body-text">
                        {spaceData.body}
                    </div>
                </div>
            </div>
            <div className="space-related-title">
                {relatedSpaceData.length > 0 ? "- Related Space -" : ""}
            </div>
            <div className="space-container-related">
                {relatedSpaceData.map((item) => (
                    <Card user_name={item.user_name} days={item.days} date={item.date} start_time={item.start_time} end_time={item.end_time} tags={item.tags} price={item.price} title={item.title} status={item.status} id={item.id} />
                ))}
            </div>
        </div>
        <Footer />
    </div>
}

export default Space;