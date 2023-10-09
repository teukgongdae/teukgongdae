import Header from "../UI/Header";
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./Home.css";

const Home = () => {

    const [memid, setMemID] = useState("ID FROM MEMBERDB IS NOT RECIEVED");
    const [memage, setMemAge] = useState("AGE FROM MEMBERDB IS NOT RECIEVED");

    const [goid, setGoID] = useState("ID FROM GOLANGDB IS NOT RECIEVED");
    const [goname, setGoName] = useState("NAME FROM GOLANGDB IS NOT RECIEVED");

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

    useEffect(() => {
        axios.get("http://localhost/golang")
            .then((response) => {
                setGoID(response.data.java);
                setGoName(response.data.age);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className="home">
            <div>
            <Header category="SIGN UP" />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <div>
                    {memid}
                </div>
                <div>
                    {memage}
                </div>
                <div>
                    {goid}
                </div>
                <div>
                    {goname}
                </div>
            </div>
        </div>
    );
};
export default Home;