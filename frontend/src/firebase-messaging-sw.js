// firebase-messaging-sw.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
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

  getToken(messaging, { vapidKey: 'BLcHsK6oZa8IOHES5hapiUeYGiI0eg1vSW60C3hYBgcr0LdbAesgS5Pai9dcZpxuRAS8AA3rvE5s3gtDpwwfaiw' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      console.log("토큰 성공 : ", currentToken);
    } else {
      // Show permission request UI
      console.log('토큰 획득을 위한 알람 허용이 꺼져있습니다.');
    }
  }).catch((err) => {
    console.log('오류 발생', err);
  });
}
requestPermission()