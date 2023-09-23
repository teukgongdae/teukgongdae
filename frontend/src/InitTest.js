import axios from 'axios';
import { useState, useEffect } from 'react';

const Test = () => {
const [id, setID] = useState("ID IS NOT RECIEVED");
const [age, setAGE] = useState("AGE IS NOT RECIEVED");

    useEffect(()=>{
        axios.get("http://localhost/member")
        .then((response)=>{
            setID(response.data.id);
            setAGE(response.data.age);
        })
        .catch((error)=> {
            console.log(error);
        })
    }, [])

    return <div>
        <div>
            {id}
        </div>
        <div>
            {age}
        </div>
    </div>
}

export default Test;