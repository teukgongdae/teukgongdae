import { useState } from "react";
import "./Chat.css";
import icon from "../Assets/chat-icon.png";
import image from "../Assets/profile-icon.png";

const Chat = (props) => {
    // const [chatData, setChatData] = useState({});
    const [chat, setChat] = useState("");

    const [chatData, setChatData] = useState([
        {
            id: 1,
            chatroomt_id: 4,
            user_name: "조띵현",
            image_path: "./",
            writetime: "10/11 12:44",
            body: "안녕하세요 조띵현입니다.",
            my_name: "최윤석"
        },
        {
            id: 1,
            chatroomt_id: 4,
            user_name: "최윤석",
            image_path: "./",
            writetime: "10/11 12:48",
            body: "안녕하세요 최윤석입니다.",
            my_name: "최윤석"
        },
        {
            id: 1,
            chatroomt_id: 4,
            user_name: "최윤석",
            image_path: "./",
            writetime: "10/11 12:48",
            body: "특공대 프로젝트 진행중입니다.",
            my_name: "최윤석"
        },
        {
            id: 1,
            chatroomt_id: 4,
            user_name: "조띵현",
            image_path: "./",
            writetime: "10/11 12:54",
            body: "저도 특공대 프로젝트 진행중입니다.",
            my_name: "최윤석"
        },
        {
            id: 1,
            chatroomt_id: 4,
            user_name: "최윤석",
            image_path: "./",
            writetime: "10/11 12:54",
            body: "파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅파이팅",
            my_name: "최윤석"
        },
        {
            id: 1,
            chatroomt_id: 4,
            user_name: "조띵현",
            image_path: "./",
            writetime: "10/11 12:59",
            body: "네 감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링",
            my_name: "최윤석"
        },
        {
            id: 1,
            chatroomt_id: 4,
            user_name: "조띵현",
            image_path: "./",
            writetime: "10/11 12:59",
            body: "네 감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링",
            my_name: "최윤석"
        },
        {
            id: 1,
            chatroomt_id: 4,
            user_name: "조띵현",
            image_path: "./",
            writetime: "10/11 12:59",
            body: "네 감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링감사링",
            my_name: "최윤석"
        },
    ])// TEST

    const chatHandler = (e) => {
        setChat(e.target.value);
    }

    return (
        <div className="chat-container-temp">
            <div className="chat-container-output">
                {chatData.map((item, index) => (
                    <div>
                        {item.user_name !== item.my_name ?
                            <div className="chat-set">
                                {index === 0 || chatData[index - 1].user_name === chatData[index].my_name ?
                                    <div className="chat-peer-image-name">
                                        <img src={image} alt="empty img" className="chat-output-image-profile" />
                                        {item.user_name}
                                    </div>
                                    :
                                    ""
                                }
                                <div className="chat-peer-container-chat">
                                    <div className="chat-my-peer-chat">
                                        {item.body}
                                    </div>
                                </div>
                                {chatData.length === index + 1 || chatData[index + 1].user_name === chatData[index + 1].my_name ?
                                    <div className="chat-peer-time">
                                        {item.writetime}
                                    </div>
                                    :
                                    ""
                                }
                            </div>
                            :
                            <div className="chat-set">
                                {index === 0 || chatData[index - 1].user_name !== chatData[index].my_name ?
                                    <div className="chat-my-image-name">
                                        <img src={image} alt="empty img" className="chat-output-image-profile" />
                                        {item.user_name}
                                    </div>
                                    :
                                    ""
                                }
                                <div className="chat-my-container-chat">
                                    <div className="chat-my-peer-chat">
                                        {item.body}
                                    </div>
                                </div>
                                {chatData.length === index + 1 || chatData[index + 1].user_name !== chatData[index + 1].my_name ?
                                    <div className="chat-my-time">
                                        {item.writetime}
                                    </div>
                                    :
                                    ""
                                }
                            </div>
                        }
                    </div>
                ))}
            </div>
            <div className="chat-container-input">
                <input type="text" placeholder="채팅을 입력해주세요." value={chat} onChange={chatHandler} className="chat-input" />
                <img src={icon} alt="empty img" className="chat-input-icon" />
            </div>
        </div>
    );
}

export default Chat;