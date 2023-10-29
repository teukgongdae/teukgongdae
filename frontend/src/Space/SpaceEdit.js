import "./Space.css";
import "./SpaceEdit.css";
import Header from "../UI/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import imgicon from "../Assets/empty-img-icon.png";
import NaverMap from "../UI/NaverMap";
import Price from "../UI/Price";
import Footer from "../UI/Footer";
import FlippedClock from "../UI/FlippedClock";
import Date from "../UI/Date";
import Days from "../UI/Days";
import Tags from "../UI/Tags";

const SpaceWrite = () => {
    let { spaceid } = useParams();
    // const [spaceData, setspaceData] = useState({});
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [isPeriodic, setIsPeriodic] = useState(1);
    const [endTime, setEndTime] = useState("0000");
    const [startTime, setStartTime] = useState("0000");
    const [spaceData, setSpaceData] = useState({
        id: 1,
        title: "탐앤탐스",
        user_name: "최고뇩",
        tags: ["카페", "집"],
        price: 1200,
        date: "0000/00/00",
        days: "1101001",
        start_time: "1200",
        end_time: "1530",
        status: "대여 가능",

        address: "서울특별시 종로구 명륜3가 53 성균관대학교",
        specific_address: "학생회관 2층 201호",
        user_image: "image_path",
        related_3_posts_id: [2, 3],
        body: `모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다. 모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.

        누구든지 병역의무의 이행으로 인하여 불이익한 처우를 받지 아니한다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로 폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지 아니하다. 타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다.
        
        감사위원은 원장의 제청으로 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다. 국가의 세입·세출의 결산, 국가 및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기 위하여 대통령 소속하에 감사원을 둔다. 법률이 헌법에 위반되는 여부가 재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다. 법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.
        
        모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다. 국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와 권리의 본질적인 내용을 침해할 수 없다. 헌법재판소의 장은 국회의 동의를 얻어 재판관중에서 대통령이 임명한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민의 재산권은 보장된다. 그 내용과 한계는 법률로 정한다.
        
        누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다. 체포 또는 구속을 당한 자의 가족등 법률이 정하는 자에게는 그 이유와 일시·장소가 지체없이 통지되어야 한다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. 정부는 예산에 변경을 가할 필요가 있을 때에는 추가경정예산안을 편성하여 국회에 제출할 수 있다. 제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.
        
        모든 국민은 직업선택의 자유를 가진다. 국무총리는 국회의 동의를 얻어 대통령이 임명한다. 국회에서 의결된 법률안은 정부에 이송되어 15일 이내에 대통령이 공포한다. 대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 국가원로자문회의의 의장은 직전대통령이 된다. 다만, 직전대통령이 없을 때에는 대통령이 지명한다. 국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다. 군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.
        
        대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 국가는 농업 및 어업을 보호·육성하기 위하여 농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다. 헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.
        
        대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다. 대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다. 제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이 지명하는 자를 임명한다. 전직대통령의 신분과 예우에 관하여는 법률로 정한다. 국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다.`
    }); // TEST

    const [days, setDays] = useState(spaceData.days);
    const [clickedImage, setClickedImage] = useState(0);

    // useEffect(() => {
    //     axios
    //         .get("http://localhost/golang/spaces/" + spaceid)
    //         .then((response) => {
    //             setspaceData({
    //                 title: response.data.TITLE,
    //                 username: response.data.USER_NAME,
    //                 tag1: response.data.TAG1,
    //                 tag2: response.data.TAG2,
    //                 tag3: response.data.TAG3,
    //                 price: response.data.PRICE,
    //                 isperiodic: response.data.IS_PERIODIC,
    //                 date: response.data.DATE,
    //                 days: response.data.DAYS,
    //                 starttime: response.data.START_TIME,
    //                 endtime: response.data.END_TIME,
    //                 status: response.data.STATUS
    //             });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [])

    useEffect(() => {
        setTitle(spaceData.title);
        setTags(spaceData.tags);
        setStartTime(spaceData.start_time);
        setEndTime(spaceData.end_time);
    }, [spaceData])

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }

    const periodicHandler = (value) => {
        setIsPeriodic(value);
    }

    const changeTimeHandler = (start_time, end_time) => {
        setStartTime(start_time);
        setEndTime(end_time);
    }

    const changeDaysHandler = (days) => {
        setDays(days);
    }

    const selectImageHandler = (index) => {
        setClickedImage(index);
    }

    return <div className="page">
        <Header category="SPACE INFO" />
        <div className="spaceinfo">
            <div className="spaceedit-container-basic">
                <div className="spaceedit-column">
                    <div className="spaceedit-container-image">
                        <img src={imgicon} alt="empty img" className="spaceedit-image" />
                    </div>
                    <div className="spaceedit-image-candidate">
                        <div className={clickedImage === 1 ? "spaceedit-images-clicked" : "spaceedit-images"} onClick={() => selectImageHandler(1)}>
                        </div>
                        <div className={clickedImage === 2 ? "spaceedit-images-clicked" : "spaceedit-images"} onClick={() => selectImageHandler(2)}>
                        </div>
                        <div className={clickedImage === 3 ? "spaceedit-images-clicked" : "spaceedit-images"} onClick={() => selectImageHandler(3)}>
                        </div>
                        <div className={clickedImage === 4 ? "spaceedit-images-clicked" : "spaceedit-images"} onClick={() => selectImageHandler(4)}>
                        </div>
                    </div>
                    <div>
                        <input
                            type="button"
                            className="spaceedit-button"
                            value="사진 추가하기"
                        // onClick={addrSearchHandler}
                        />
                    </div>
                </div>

                <div className="spaceinfo-basic">
                    <div className="spaceinfo-title">
                        <input type="text" placeholder="공간 이름" value={title} onChange={titleHandler} className="spacewrite-title-input" />
                    </div>
                    <Tags tags={spaceData.tags} isModify={true} />
                    <div className="spacewrite-container-isperiodic">
                        <div className={isPeriodic === 1 ? "spacewrite-isperiodic-clicked" : "spacewrite-isperiodic-nonclicked"} onClick={() => periodicHandler(1)}>
                            정기
                        </div>
                        <div className={isPeriodic === 0 ? "spacewrite-isperiodic-clicked" : "spacewrite-isperiodic-nonclicked"} onClick={() => periodicHandler(0)}>
                            비정기
                        </div>
                    </div>
                    {isPeriodic === 0 ? <Date date={spaceData.date} isModify={true} /> : <Days days={days} isModify={true} onDaysChange={changeDaysHandler} />}
                    <FlippedClock start_time={startTime} end_time={endTime} isModify={false} />
                    <Price isModify={true} days={days} start_time={spaceData.start_time} end_time={spaceData.end_time} price={spaceData.price} onTimeChange={changeTimeHandler} periodic={isPeriodic} />
                    {/* <div className="spaceinfo-category">
                        category
                    </div> */}
                    <NaverMap isModify={true} address={spaceData.address} />
                </div>
            </div>
            <div className="spaceinfo-container-explain">
            </div>
            <div className="spaceinfo-container-similar">
            </div>
            <input
                type="button"
                className="spacewrite-save"
                value="등록/수정하기"
            // onClick={addrSearchHandler}
            />
        </div>
        <Footer />
    </div>
}

export default SpaceWrite;