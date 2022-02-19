
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie' ;
import React, { Component } from 'react';
import { Button , Card,CardColumns } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Details from './Details'
import '../App.css';


const MovieList = (props) => {


const search = props.search;
const movies = props.movies; 
const searchStarsValue= props.searchStarsValue;
	

	return (
		<>
		
		<div className='d-flex justify-content-start m-3'>

			{movies.filter((movie) =>{
				if(movie.rate >= searchStarsValue && movie.title.toLowerCase().includes(search.toLowerCase()) ){
				return movie
				} 				
			}).map((movie, index) => (
			<Link  to={`/details/${movie.id}`}>
				<Movie movie={movie} />
		</Link>
	
					))}
					
			
		</div> 
					
		</>
	);
};

export default MovieList;