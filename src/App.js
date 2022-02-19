import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import NavigationBar from './components/NavigationBar'
import { Router } from 'react-router';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Details from './components/Details';


function App({movies,setMovies}) {



    const [search, setSearch] = useState("");
	const [searchStarsValue, setSearchStarsValue] = useState("");
	
	const handleSearchChange=(value)=>{
		setSearch(value)
		
	}

	const handleFilterRatingChanged=(newRating) => {
		setSearchStarsValue(newRating)
	};
	
	const handleAddMovie = (newMovie) => {
		setMovies([...movies,newMovie])
	}


    return (

	<>
 <div>
					<NavigationBar 
					handleSearchChange={handleSearchChange} 
					movies={movies}
					handleFilterRatingChanged={handleFilterRatingChanged}
					handleAddMovie={handleAddMovie}
					/>

			</div>
		<div className=' container-fluid movie-app'>

			<div className='row '>
			<MovieList
					movies={movies}
					search={search}
					searchStarsValue={searchStarsValue}
				/>
			</div>
      
      
		</div>
	</>

    );
}

export default App;
