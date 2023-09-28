import { useState,useEffect } from "react";

import './App.css';
import searchIcon from './search.svg';

import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=56ba107c';

const movie1 = 
    {
        "Title": "Spiderman and Grandma",
        "Year": "2009",
        "imdbID": "tt1433184",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
    }


const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies =  async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.search);
    }

    useEffect(() =>  {
          searchMovies('Spiderman');

    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search"> 
            <input
             placeholder="Search for movies"
             value="Superman"
             onChange={() => {}}
             />
             <img
             src={searchIcon}
             alt="search"
             onClick={() => {}}
             />
             </div>   

         <div className="container">
          <MovieCard movie1={movie1} />
          </div>
          </div>
    );
}

export default App;
