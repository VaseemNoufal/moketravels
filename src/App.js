import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Undefined from './Pages/Undefined';
import ViewSingle from './Pages/PlaceView';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import React,{useState,useEffect} from 'react';

export const UserContext = React.createContext()

function App() {
  const [userdata, setUserdata] = useState({});
  useEffect(() =>{
      setUserdata(JSON.parse(localStorage.getItem("user_data")))
  },[])
  return (
    <UserContext.Provider value={userdata}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/places/:id' element={<ViewSingle />}/>
          <Route path='/auth/login' element={<Login />}/>
          <Route path='/auth/create' element={<Signup />}/>
          <Route path='*' element={<Undefined />}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
