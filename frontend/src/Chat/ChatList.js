import Header from "../UI/Header";
import "./ChatList.css";
import img_user from "../Assets/profile-icon.png"
import img_star from "../Assets/star-icon.png"
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Footer from "../UI/Footer";

const ChatList = () => {
    const [click, setClick] = useState(0);
    // const [chatListData, setChatListData] = useState([]);

    const [chatListData, setChatListData] = useState([
        {
            id: 1,
            peer_user_name: "최고뇩",
            new_chat_count: 12,
            peer_user_profilr_image_path: "./",
            most_recent_chat_body: "제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 국토와 자원은 국가의 보호를 받으며, 국가는 그 균형있는 개발과 이용을 위하여 필요한 계획을 수립한다.",
            most_recen_chat_date: "10/02 22:14"
        },
        {
            id: 2,
            peer_user_name: "최윤석",
            new_chat_count: 23,
            peer_user_profilr_image_path: "./",
            most_recent_chat_body: "일반사면을 명하려면 국회의 동의를 얻어야 한다. 대통령은 국민의 보통·평등·직접·비밀선거에 의하여 선출한다.",
            most_recen_chat_date: "10/15 04:14"
        },
        {
            id: 3,
            peer_user_name: "조승현",
            new_chat_count: 0,
            peer_user_profilr_image_path: "./",
            most_recent_chat_body: "국토와 자원은 국가의 보호를 받으며, 국가는 그 균형있는 개발과 이용을 위하여 필요한 계획을 수립한다.",
            most_recen_chat_date: "10/05 14:14"
        },
        {
            id: 4,
            peer_user_name: "조띵현",
            new_chat_count: 4,
            peer_user_profilr_image_path: "./",
            most_recent_chat_body: "공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다.",
            most_recen_chat_date: "10/15 17:01"
        },
    ]); // TEST

    useEffect(()=>{
    
    },chatListData)

    const selectChatHandler = (chatID) => {
        setClick(chatID);
    }

    useEffect(() => {
        // GET Request based on chatID, setChatData();
    }, [click])

    return (
        <div className="chat-container">
            <Header category="CHAT" />
            <div className="chat">
                <div className="chat-list">
                    {chatListData.map((item) => (
                        <div className="chat-container-chat" onClick={() => selectChatHandler(item.id)}>
                            <img src={img_user} alt="user" className="chat-image-user" />
                            <div className="chat-container-userdata">
                                <div className="chat-userdata-name">
                                    {item.peer_user_name}
                                </div>
                                <div className="chat-userdata-body">
                                    {item.most_recent_chat_body.length > 30 ? item.most_recent_chat_body.slice(0,29)+"..." : item.most_recent_chat_body}
                                    
                                </div>
                            </div>
                            <div className="chat-container-new">
                                <div className="chat-new">
                                    {item.new_chat_count}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="chat-chat">
                    {click !== 0 ?
                        <Chat id={click}/>
                        :
                        ""}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ChatList;