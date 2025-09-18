import React from "react";
import '../Css/navbar.css'

export default function Navbar(){
    return(
        <div className="topper">
            <img src={require('../Images/logo.svg').default}/>
            <div className="right">
                <button className="button">
                    Login
                </button>
            </div>
        </div>
    )
}