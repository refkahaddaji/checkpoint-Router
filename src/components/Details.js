import React, { Component } from 'react';
import '../App.css';
import { Button , Card,CardColumns } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import StarRatingComponent from 'react-star-rating-component';
import {BrowserRouter, Link, Switch, Route,useLocation} from 'react-router-dom';
import NavigationBar from './NavigationBar'; 
import { useState, useEffect } from 'react';

const Details = (props) => {
    
    const location = useLocation()
    const { movie } = location.state
    return (
        <div style={{textAlign:"center"}}>
            <NavigationBar></NavigationBar>
            {/* {props.match.params.id} */}
            <h1>  {props.location.state.movie.movie.title} </h1>
            <br/>
            <iframe width="560" height="315" src={props.location.state.movie.movie.trailer} 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                
            </iframe>
            <p>
            {props.location.state.movie.movie.description} 
            </p>
        </div>
    )
}

export default Details
