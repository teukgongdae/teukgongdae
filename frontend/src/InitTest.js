import axios from 'axios';
import { useState, useEffect } from 'react';

const Test = () => {
const [data, setData] = useState("aaaa!!");
    // useEffect(()=>{
    //     axios.get("http://localhost/api/hello")
    //     .then((response)=>{
    //         setData(response.data.java);
    //     })
    //     .catch((error)=> {
    //         console.log(error);
    //     })
    // }, [])

    return <div>
        {data}
        {data}
        {data}
    </div>
}

export default Test;