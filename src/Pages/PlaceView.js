import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { talrop } from "../Components/AxiosConfig";
import Navbar from "../Components/Navbar";
import '../Css/homepage.css'

export default function ViewSingle(){
    const {id} = useParams();
    const [singleview, setSingleview] = useState([]);

    useEffect(() =>{
        talrop
            .get(`/places/view/${id}`)
            .then(function(response){
                setSingleview(response.data.data)
            })
            .catch(function(err){
                console.log(err)
            })
            .finally(function(){
                console.log("Completed Buddy!")
            })
    }, [])


    useEffect(() =>{
        document.title = `${singleview.name} | Moke Travels` 
    }, [singleview])

    return(
        <section className="main">
            <section className="wrapper">
                <Navbar />      
                <div className="mainContainer">
                    <div className="top">
                        <h1>{singleview.name}</h1>
                        <div className="row">
                            <a href="#">{singleview.category_name}</a>
                            <span><img src={require('../Images/place.svg').default}/>{singleview.location}</span>
                        </div>
                    </div>
                    <div className="imageContainer">
                        {singleview.gallery?.map((item, index) => (
                            <div key={item.id} className={`galleryItem 
                                    ${index === 0 ? "big" : ""}
                                    ${index === 1 ? "smallone" : ""}
                                    ${index === 2 ? "smalltwo" : ""}
                                    ${index === 3 ? "smallthree" : ""}`}>
                                <img src={item.image} alt={`Gallery ${item.id}`} />
                            </div>
                        ))}
                    </div>
                    <h1 className="details">Place Details</h1>
                    <p>{singleview.description}</p>
                </div>
            </section>
        </section>
    )
}