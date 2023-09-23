import axios from 'axios';
import { useState, useEffect } from 'react';

const Test = () => {
const [memid, setMemID] = useState("ID FROM MEMBERDB IS NOT RECIEVED");
const [memage, setMemAge] = useState("AGE FROM MEMBERDB IS NOT RECIEVED");

const [goid, setGoID] = useState("ID FROM GOLANGDB IS NOT RECIEVED");
const [goname, setGoName] = useState("NAME FROM GOLANGDB IS NOT RECIEVED");

    useEffect(()=>{
        axios.get("http://localhost/member")
        .then((response)=>{
            setMemID(response.data.id);
            setMemAge(response.data.age);
        })
        .catch((error)=> {
            console.log(error);
        })
    }, [])

    useEffect(()=>{
        axios.get("http://localhost/golang")
        .then((response)=>{
            setGoID(response.data.java);
            setGoName(response.data.age);
        })
        .catch((error)=> {
            console.log(error);
        })
    }, [])

    return <div>
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
}

export default Test;