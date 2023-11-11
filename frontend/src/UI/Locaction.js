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
    const [mount2, setMount2] = useState(false);
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
    }

    useEffect(() => {
        if (mount === false) {
            axios
                .get("https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=11*0000&is_ignore_zero=true")
                .then((response) => {
                    response.data.regcodes.map((item) => {
                        Goontemp.push({ name: item.name.replace(/^[^ ]* /, ''), code: item.code });
                    })
                    setGoon(Goontemp);
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
                        Goontemp.push({ name: item.name.replace(/^[^ ]* /, ''), code: item.code });
                    })
                    setGoon(Goontemp);

                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        }
    }, [selectCity])

    const ClickGoonHandler = (e) => {
        setSelectGoon((e.target.value).slice(0, 5));
    }

    useEffect(() => {
        if (mount === false) {
            axios
                .get("https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=11110*&is_ignore_zero=true")
                .then((response) => {
                    console.log(response.data);
                    response.data.regcodes.map((item) => {
                        Dongtemp.push({ name: (item.name.replace(/^[^ ]* /, '')).replace(/^[^ ]* /, ''), code: item.code });
                    })
                    setDong(Dongtemp);
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
            setMount(true);
        } else {
            axios
                .get("https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=" + selectGoon + "*00&is_ignore_zero=true")
                .then((response) => {
                    console.log(response.data);
                    response.data.regcodes.map((item) => {
                        Dongtemp.push({ name: (item.name.replace(/^[^ ]* /, '')).replace(/^[^ ]* /, ''), code: item.code });
                    })
                    setDong(Dongtemp);
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        }
    }, [selectGoon])

    const ClickDongHandler = (e) => {
        setSelectDong((e.target.value).slice(0, 6));
    }

    console.log("SELECT CITY: ", selectCity);
    console.log("SELECT GOON: ", selectGoon);
    console.log("SELECT DONG: ", selectDong);

    return (
        <div className="location">
            <select className="location-first" onChange={ClickCityHandler} >
                {cities.map((item) => (
                    <option value={item.code}>{item.name}</option>
                ))}
            </select>
            <select className="location-first" onChange={ClickGoonHandler}>
                {goon.map((item, index) => (
                    <option value={item.code}>{item.name}</option>
                ))}
            </select>
            <select className="location-first" onChange={ClickDongHandler}>
                {dong.map((item) => (
                    <option value={item.code}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Location;