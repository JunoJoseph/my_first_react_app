import { useEffect } from "react";

import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=56ba107c';


const App = () => {

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
             />
             </div>   
        </div>
    );
}

export default App;
