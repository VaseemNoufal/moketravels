import React, {useContext} from "react";
import '../Css/navbar.css'
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const userData = useContext(UserContext);
    const navigation = useNavigate()
    return(
        <div className="topper">
            <img src={require('../Images/logo.svg').default}/>
            <div className="right">
                {userData ? (<button style={{cursor: "pointer"}} className="button">Logout</button>):(<button style={{cursor:"pointer"}} onClick={() =>{
                    navigation('/auth/login')
                }} className="button">
                    Login
                </button>)}
            </div>
        </div>
    )
}