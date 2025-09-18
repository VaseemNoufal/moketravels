import React, { useEffect, useState } from "react";
import '../Css/homepage.css'
import Navbar from "../Components/Navbar";
import axios from "axios";
import { talrop } from "../Components/AxiosConfig";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function HomePage(){

    const hi = useNavigate()
    const [places, setPlaces] = useState([]);

    useEffect(() =>{
        talrop
            .get('/places')
            .then(function(response){
                setPlaces(response.data.data)
            })
            .catch(function(err){
                console.log(err)
            })
            .finally(function(){
                console.log("Completed")
            })

            document.title = "Home Page | Moke Travels"
    }, [])

    return(
        <section className="main">
            <section className="wrapper">
                <Navbar />
                <div className="bottom">
                    <h1 className="maaain">Welcome</h1>
                    <p>Explore the world around you</p>
                    <div className="listbody">
                        {places.map((place) =>{
                            return(
                                <div className="item" key={place.id} onClick={() => hi(`/places/${place.id}`)}>
                                    <div className="top">
                                        <img src={place.image}  className="imgtop"/>
                                    </div>
                                    <div className="bottom">
                                        <h1>{place.name}</h1>
                                        <span><img src={require('../Images/place.svg').default}/>{place.location}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </section>
    )
}