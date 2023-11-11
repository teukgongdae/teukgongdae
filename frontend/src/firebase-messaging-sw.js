// firebase-messaging-sw.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import axios from "axios";


const firebaseConfig = {
  apiKey: "AIzaSyCArs_mR2Gzf1rO8XHih0OzICrlJjRecGI",
  authDomain: "teukgongdae-e0b48.firebaseapp.com",
  projectId: "teukgongdae-e0b48",
  storageBucket: "teukgongdae-e0b48.appspot.com",
  messagingSenderId: "216509332692",
  appId: "1:216509332692:web:84d85c6752d83eb6fa0f41",
  measurementId: "G-9SJHCDTJNV"
};

function SendToken(value) {

  const token = ({
    token: value,
  });

  axios
    .post(process.env.REACT_APP_HOST + "/member/send-notification", token)
    .then((response) => {
      console.log("푸시 준비 완료");
    })
    .catch((error) => {
      console.log(error.response.data);
    })
}
function requestPermission() {


  console.log('푸시 허가 받는 중 ...')

  void Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('푸시 알림이 허용되었습니다.')
    } else {
      console.log('푸시 알림이 허용되지 않았습니다')
    }
  })

  const app = initializeApp(firebaseConfig)
  const messaging = getMessaging(app)

  getToken(messaging, { vapidKey: 'BHU9_uveOY9NbUkfyYG2rOHLBiVmXTaca_vE4g8TpXAlWkN-OcTqE_8tmpRFPfN6sGTR4nMWdCpigb5PE5qkKdI' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      console.log(currentToken);
      SendToken(currentToken);
    } else {
      // Show permission request UI
      console.log('토큰 획득을 위한 알람 허용이 꺼져있습니다.');
    }
  }).catch((err) => {
    console.log('오류 발생', err);
  });

  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });

}
requestPermission()