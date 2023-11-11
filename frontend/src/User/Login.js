import Header from "../UI/Header";
import "./Login.css";
import logo from "../Assets/logo.png"
import kakaotalk from "../Assets/kakaotalk-icon.svg"
import naver from "../Assets/naver-icon.svg"
import Footer from "../UI/Footer";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const Login = () => {


    return (
        <div className="page">
            <Header category="SIGN IN" />
            <div className="login">
                <div className="login-container-logo">
                    <img src={logo} alt="logo" className="login-logo" />
                </div>
                <div className="login-buttons">
                    <div className="login-text-info">
                        카카오 / 네이버 아이디로 로그인하기
                    </div>
                    <div className="login-icon">
                        <img src={kakaotalk} alt="space list" className="login-icon-kakaotalk" />
                        <img src={naver} alt="space list" className="login-icon-naver" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Login;