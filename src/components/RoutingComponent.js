import React, { useState } from 'react'
import {Switch, Route} from 'react-router-dom'
import App from '../App'
import Details from './Details'
import { v4 as uuidv4 } from 'uuid';


const RoutingComponent = () => {
    const [movies, setMovies] = useState([
		
		{
			id:uuidv4(),
			title: "Toy Story 4",
			description: "Toy Story 4 sees the return of Woody, Buzz and the whole gang, far from home, discovering new friends—and old ones—on an eye-opening road trip that takes them to unexpected places. Before the highly anticipated movie is released in cinemas, find out more about the return of the Toy Story gang and their new friends.",
			posterUrl: "https://wallpapercave.com/dwp1x/wp4401872.jpg" ,
			rate:"5",
      trailer: "https://www.youtube.com/embed/wmiIUN-7qhE"
		},
		{
			id:uuidv4(),
			title: "Captain Marvel",
			description: "Set in 1995, the story follows Danvers as she becomes Captain Marvel after Earth is caught in the center of a galactic conflict between two alien civilizations. Development of the film began by May 2013. It was officially announced in October 2014 as Marvel Studios' first female-led superhero film.",
			posterUrl: "https://cdn.europosters.eu/image/750/posters/captain-marvel-epic-i71851.jpg" ,
			rate:"4",
      trailer: "https://www.youtube.com/embed/Z1BCujX3pw8"

		},
		{
			id:uuidv4(),
			title: "Spider-Man: Far From Home",
			description: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever. Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation",
			posterUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/674b36f0-7771-4188-b382-ade2d495544a/dd8h6td-ea943be7-b2be-4fbd-bacc-e80f3642094f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3NGIzNmYwLTc3NzEtNDE4OC1iMzgyLWFkZTJkNDk1NTQ0YVwvZGQ4aDZ0ZC1lYTk0M2JlNy1iMmJlLTRmYmQtYmFjYy1lODBmMzY0MjA5NGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZXr0_c39iBrZMnZYXZUyBO7QQfSzZ4Wy-uyCBcric88" ,
			rate:"3",
      trailer: "https://www.youtube.com/embed/Nt9L1jCKGnE"
		},	
		{
			id:uuidv4(),
			title: "Alita: Battle Angel",
			description: "Battle Angel Alita tells the story of Alita, an amnesiac female cyborg. ... Alita uses her Panzer Kunst to first become a bounty hunter killing cyborg criminals in the Scrapyard, and then as a star player in the brutal gladiator sport of Motorball. While in combat, Alita awakens memories of her earlier life on Mars.",
			posterUrl: "https://www.joblo.com/wp-content/uploads/2019/01/Alita-character-poster-1-1.jpg" ,
			rate:"5",
      trailer: "https://www.youtube.com/embed/w7pYhpJaJW8"
		},	
		{
			id:uuidv4(),
			title: "Spider-Man: Into the Spider-Verse",
			description: `Set in a shared multiverse called the "Spider-Verse", the film's story follows Miles Morales as he becomes the new Spider-Man and joins other Spider-People from various dimensions to save New York City from the Kingpin.`,
			posterUrl: "https://m.media-amazon.com/images/I/71U93FWDLTS._AC_SY679_.jpg" ,
			rate:"4",
      trailer: "https://www.youtube.com/embed/tg52up16eq0"
		},
		{
			id:uuidv4(),
			title: "Star Wars: Episode IV - A New Hope",
			description: "1977",
			posterUrl : "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			rate:"1",
			trailer: "https://www.youtube.com/embed/tg52up16eq0"
		},
		{
			id:uuidv4(),
			title: "Star Wars: Episode V - The Empire Strikes",
			description: "1980",
			posterUrl: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
			rate: "2",
			trailer: "https://www.youtube.com/embed/wmiIUN-7qhE"
	}
	
	]);
    return (
        <Switch>
            <Route exact path='/' render={()=><App movies={movies} setMovies={setMovies}/>}></Route>
            <Route exact path='/Details/:id' render={(props) => (
                <Details {...props} movies={movies} /> 
            )} />
            
        </Switch>
    )
}

export default RoutingComponent
