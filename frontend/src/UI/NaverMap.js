import "./NaverMap.css";
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const NaverMap = (props) => {
  const { naver } = window;
  const [addr, setAddr] = useState('');
  const [pickedAddrX, setPickedAddrX] = useState('126.9769');
  const [pickedAddrY, setPickedAddrY] = useState('37.5656');
  const [roadAddresses, setRoadAddresses] = useState([]);
  const mapElement = useRef(null);
  const [location, setLocation] = useState(new naver.maps.LatLng(0, 0));
  const [specificAddr, setSpecificAddr] = useState("");
  const [showList, setShowList] = useState(0);

  useEffect (()=>{
    selectAddressHandler(props.address);
  },[])
  
  useEffect(() => {
    if (!mapElement.current || !naver) return;

    let mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
    };

    let map = new naver.maps.Map(mapElement.current, mapOptions);

    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [location]);

  const addrHandler = (e) => {
    setAddr(e.target.value);
  }

  const addrSearchHandler = () => {
    axios
    .post("https://business.juso.go.kr/addrlink/addrLinkApiJsonp.do?confmKey=	"+process.env.REACT_APP_ROADNAME_ADDRESS_KEY+"&currentPage=1&countPerPage=5&resultType=json&hstryYn=Y&keyword="+addr)
    .then((response)=>{
      let jsonString = response.data.slice(1, -1);
      setRoadAddresses(JSON.parse(jsonString).results.juso);
      setShowList(1);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  const selectAddressHandler = (item) => {
    const geocode = naver.maps.Service.geocode({ query: item }, function (status, response) {
      if (status === naver.maps.Service.Status.ERROR) {
        return alert('Something wrong!');
      }
        setPickedAddrX(response.v2.addresses[0].x);
        setPickedAddrY(response.v2.addresses[0].y);
        setShowList(0);
        setAddr(item);
    });
  }

  useEffect(() => {
    setLocation(new naver.maps.LatLng(pickedAddrY, pickedAddrX));
  }, [pickedAddrY])

  const specificAddrHandler = (e) => {
    setSpecificAddr(e.target.value)
}
  return (
    <div className='map'>
      {props.isModify === true && 
      <div className='map-container-address'>
        <div className='map-container-address-input'>
        <input type="text" placeholder="도로명 주소" value={addr} onChange={addrHandler} className='map-address-input'/>
      <input
        type="button"
        className="map-address-button"
        value="검색"
        onClick={addrSearchHandler}
      />
      </div>
    
        <input type="text" placeholder="세부 주소" value={specificAddr} className='map-specific' onChange={specificAddrHandler} />
          </div>}
          <div className={showList === 0 ? '' : "map-address-list"}>
      {showList === 1 && roadAddresses.map((item, index) => (
        <div onClick={() => selectAddressHandler(item.jibunAddr)} className="map-address">
          {item.jibunAddr}
        </div>
      ))}
      </div>
      <div ref={mapElement} className="spaceinfo-map" />
    </div>
  );
};

export default NaverMap;


// //특수문자, 특정문자열(sql예약어의 앞뒤공백포함) 제거
// function checkSearchedWord(obj){
// 	if(obj.value.length >0){
// 		//특수문자 제거
// 		var expText = /[%=><]/ ;
// 		if(expText.test(obj.value) == true){
// 			alert("특수문자를 입력 할수 없습니다.") ;
// 			obj.value = obj.value.split(expText).join(""); 
// 			return false;
// 		}
		
// 		//특정문자열(sql예약어의 앞뒤공백포함) 제거
// 		var sqlArray = new Array(
// 			//sql 예약어
// 			"OR", "SELECT", "INSERT", "DELETE", "UPDATE", "CREATE", "DROP", "EXEC",
//              		 "UNION",  "FETCH", "DECLARE", "TRUNCATE" 
// 		);
		
// 		var regex;
// 		for(var i=0; i<sqlArray.length; i++){
// 			regex = new RegExp( sqlArray[i] ,"gi") ;
			
// 			if (regex.test(obj.value) ) {
// 			    alert("\"" + sqlArray[i]+"\"와(과) 같은 특정문자로 검색할 수 없습니다.");
// 				obj.value =obj.value.replace(regex, "");
// 				return false;
// 			}
// 		}
// 	}
// 	return true ;
// }

// // 적용예 (api 호출 전에 검색어 체크) 
// function searchJuso(){
// 	if (!checkSearchedWord(document.form.keyword)) {
// 		return ;
// 	}
// }