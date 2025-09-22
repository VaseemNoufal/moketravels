import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Undefined from './Pages/Undefined';
import ViewSingle from './Pages/PlaceView';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import React,{useState,useEffect, act} from 'react';
import PrivateRoute from './Components/PrivateRoute';

export const UserContext = React.createContext()

function App() {
  const [userdata, setUserdata] = useState({});
  const [loading, setLoading] = useState(true)
  const updateUserData = (action) =>{
      switch(action.type){
        case "LOGOUT":
          setUserdata(null);
          localStorage.clear()
          break;
        case "LOGIN":
          setUserdata(action.payload);
          break;
        default:
          break;
      }
  }
  useEffect(() =>{
      setUserdata(JSON.parse(localStorage.getItem("user_data")))
      setLoading(false)
  },[])
  return loading ? (<h1>Loading</h1>):(
    <UserContext.Provider value={{userdata, updateUserData}}>
      <Router>
        <Routes>
          <Route path='/' element={<PrivateRoute element={<HomePage />}/>}/>
          <Route path='/places/:id' element={<PrivateRoute element={<ViewSingle />}/>}/>
          <Route path='/auth/login' element={<Login />}/>
          <Route path='/auth/create' element={<Signup />}/>
          <Route path='*' element={<Undefined />}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
