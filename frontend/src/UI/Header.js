import "./Header.css";
import profileicon from "../Assets/profile-icon.png";
import chaticon from "../Assets/chat-icon.png";
import documentsicon from "../Assets/documents-icon.png";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigator = useNavigate();

    const spaceClickHandler = () => {
        navigator("/space");
    }
    const  profileClickHandler = () => {
        navigator("/");
    }
    const  chatClickHandler = () => {
        navigator("/chat");
    }

    return (
        <div className="header-container">
            <div className="header">
                <div className="header-category">
                    {props.category}
                </div>
                <div className="header-container-name">
                    <div className="header-name">
                        <div className="header-name-upper">
                            특
                        </div>
                        <div>
                            별한&nbsp;
                        </div>
                        <div className="header-name-upper">
                            공
                        </div>
                        <div>
                            간&nbsp;
                        </div>
                        <div className="header-name-upper">
                            대
                        </div>
                        <div>
                            여
                        </div>
                    </div>
                </div>
                <div className="header-container-icon">
                    <img src={documentsicon} alt="space list" className="header-icon" onClick={spaceClickHandler}/>
                    <img src={chaticon} alt="chat list" className="header-icon" onClick={chatClickHandler}/>
                    <img src={profileicon} alt="my profile" className="header-icon" onClick={profileClickHandler}/>
                </div>
            </div>
        </div>
    );
};
export default Header;