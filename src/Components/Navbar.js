import React, {useContext} from "react";
import '../Css/navbar.css'
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const {userdata, updateUserData} = useContext(UserContext);
    const handleLogout = () =>{
        updateUserData({type: "LOGOUT"})
    }
    const navigation = useNavigate()
    return(
        <div className="topper">
            <img src={require('../Images/logo.svg').default}/>
            <div className="right">
                {userdata ? (<button style={{cursor: "pointer"}} onClick={() => handleLogout()} className="button">Logout</button>):(<button style={{cursor:"pointer"}} onClick={() =>{
                    navigation('/auth/login')
                }} className="button">
                    Login
                </button>)}
            </div>
        </div>
    )
}