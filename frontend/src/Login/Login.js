import Header from "../UI/Header";
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./Login.css";
import logo from "../Assets/logo.png"
import kakaotalk from "../Assets/kakaotalk-icon.svg"
import naver from "../Assets/naver-icon.svg"

const Login = () => {

    const [memid, setMemID] = useState("ID FROM MEMBERDB IS NOT RECIEVED");
    const [memage, setMemAge] = useState("AGE FROM MEMBERDB IS NOT RECIEVED");

    useEffect(() => {
        axios.get("http://localhost/member")
            .then((response) => {
                setMemID(response.data.id);
                setMemAge(response.data.age);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className="page">
            <div>
                <Header category="SIGN IN" />
            </div>
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
        </div>
    );
};
export default Login;