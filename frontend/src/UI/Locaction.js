import { useEffect, useState } from "react";
import "./Location.css";
import axios from "axios";

const Location = () => {
    const [selectCity, setSelectCity] = useState("");
    const [cityPlaceholder, setCityPlaceholder] = useState();
    const [selectGoon, setSelectGoon] = useState("군/구");
    const [selectDong, setSelectDong] = useState("동");

    const [cities, setCities] = useState([]);
    const [goon, setGoon] = useState([]);
    const [dong, setDong] = useState([]);
    const [goonCode, setGoonCode] = useState([]);
    const [dongCode, setDongCode] = useState([]);

    const [mount, setMount] = useState(false);
    const [showGoon, setShowGoon] = useState(false);
    const [showDong, setShowDong] = useState(false);

    let Goontemp = [];
    let GoonCodeTemp = [];
    let Dongtemp = [];

    useEffect(() => {
        axios
            .get("https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000")
            .then((response) => {
                setCities([...response.data.regcodes]);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])

    const ClickCityHandler = (e) => {
        setSelectCity((e.target.value).slice(0, 2));
        console.log((e.target.value).slice(0, 2));
    }

    useEffect(() => {
        if (mount === false) {
            axios
                .get("https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=11*00000&is_ignore_zero=true")
                .then((response) => {
                    response.data.regcodes.map((item) => {
                        Goontemp.push(item.name.replace(/^[^ ]* /, ''));
                    })
                    setGoon(Goontemp);
                    setGoonCode(GoonCodeTemp);
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
            setMount(true);
        } else {
            axios
                .get("https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=" + selectCity + "*00000&is_ignore_zero=true")
                .then((response) => {
                    response.data.regcodes.map((item) => {
                        Goontemp.push(item.name.replace(/^[^ ]* /, ''));
                        GoonCodeTemp.push(item.code);
                    })
                    setGoon(Goontemp);
                    setGoonCode(GoonCodeTemp);
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        }
    }, [selectCity])

    const ClickGoonHandler = (value) => {
        // setSelectGoon((e.target.value).slice(0, 4));
        // console.log((e.target.value).slice(0, 4));
        console.log(value);
    }

    useEffect(() => {
        if (mount === false) {
            axios
                .get("https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=1111*&is_ignore_zero=true")
                .then((response) => {
                    console.log(response.data);
                    response.data.regcodes.map((item) => {
                        Dongtemp.push((item.name.replace(/^[^ ]* /, '')).replace(/^[^ ]* /, ''));
                    })
                    setDong(Dongtemp);
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
            setMount(true);
        } else {
            axios
                .get("https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=" + selectGoon + "*&is_ignore_zero=true")
                .then((response) => {
                    console.log(response.data);
                    // response.data.regcodes.map((item) => {
                    //     Dongtemp.push(item.name.replace(/^[^ ]* /, ''));
                    // })
                    // setDong(Dongtemp);
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        }
    }, [selectGoon])

    const ClickDongHandler = (e) => {
        setSelectDong((e.target.value).slice(0, 7));
    }

    return (
        <div className="location">
            <select className="location-first" onChange={ClickCityHandler} >
                {cities.map((item) => (
                    <option value={item.code}>{item.name}</option>
                ))}
            </select>
            <select className="location-first">
                {goon.map((item, index) => (
                    <option value={GoonCodeTemp[index]} onClick={()=>ClickGoonHandler(GoonCodeTemp[index])}>{item}</option>
                ))}
            </select>
            <select className="location-first" onChange={ClickDongHandler}>
                {dong.map((item) => (
                    <option value={item.code}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default Location;