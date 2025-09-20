import React, {useContext} from "react";
import '../Css/navbar.css'
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
   const { userData, setUserdata } = useContext(UserContext);
   const idk = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("user_data");
        setUserdata(null);
        idk('/auth/login')
        
    };
    const navigation = useNavigate()
    return(
        <div className="topper">
            <img src={require('../Images/logo.svg').default}/>
            <div className="right">
                {userData ? (
    <button className="button" onClick={handleLogout}>Logout</button>
) : (
    <button className="button" onClick={() => navigation('/auth/login')}>Login</button>
)}

            </div>
        </div>
    )
}