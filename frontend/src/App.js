import './App.css';
import Login from './User/Login';
import SpaceList from './Space/SpaceList';
import Space from './Space/Space';
import SpaceEdit from './Space/SpaceEdit';
import User from './User/User';
import ChatList from './Chat/ChatList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './firebase-messaging-sw'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/space" element={<SpaceList />} />
        <Route path="/space/:spaceid" element={<Space />} />
        <Route path="/space/:spaceid/edit" element={<SpaceEdit />} />
        <Route path="/user/:userid" element={<User />} />
        <Route path="/chat" element={<ChatList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
