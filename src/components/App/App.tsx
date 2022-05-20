import "./styles/App.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";

const firebaseConfig = {
  apiKey: "AIzaSyDg7sViTD5xwyp0CPqfDzbgG496X5AmWAg",
  authDomain: "unichat-ffff3.firebaseapp.com",
  projectId: "unichat-ffff3",
  storageBucket: "unichat-ffff3.appspot.com",
  messagingSenderId: "396037837884",
  appId: "1:396037837884:web:3d7e76b26bc1dd48e7df39",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/chats" component={<Chats />} /> */}
      </Routes>
    </div>
  );
}

export default App;
