import React, { Component } from 'react';
import '../App.css';
import { Button , Card,CardColumns } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import StarRatingComponent from 'react-star-rating-component';
import {BrowserRouter, Link, Switch, Route,useLocation} from 'react-router-dom';
import NavigationBar from './NavigationBar'; 
import { useState, useEffect } from 'react';

const Details = (props) => {
    
    //const location = useLocation()
    const movie  = props.movies.find(el=>el.id===props.match.params.id)

    return (
        <div style={{textAlign:"center"}}>
            <NavigationBar></NavigationBar>
            {/* {props.match.params.id} */}
            <h1>  </h1>
            <br/>
            <iframe width="560" height="315" src={movie.trailer} 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                
            </iframe>
            <p>
            {movie.description} 
            </p>
        </div>
    )
}

export default Details
