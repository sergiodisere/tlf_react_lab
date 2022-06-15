import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import { useState } from 'react';


const ProtectedRouter = ({children})=>{
  if (!localStorage.getItem('token')){
    return <Navigate to='/'/>
  }
  return children;
}


function App() {
  const [userAuth, setUserAuth] = useState(localStorage.getItem('token') ? true : false);
  return (
    <div className="App">
      <Header userAuth={userAuth}/>
      <Routes>
        <Route path="/" element={<Login setUserAuth={setUserAuth}/>} />
        <Route path="/home" element={<ProtectedRouter ><Home/></ProtectedRouter>} />
        <Route path="/profile" element={<ProtectedRouter><Profile/></ProtectedRouter>} />
      </Routes>
    </div>
  );
}

export default App;
