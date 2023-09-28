import { useEffect } from "react";
//56ba107c

const API_URL = 'http://www.omdbapi.com?apikey=56ba107c';


const App = () => {

    const searchMovies =  async (title) => {
        const response = await fetch('${API_URL}&s=${title}');
    }

    useEffect(() =>  {


    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;
