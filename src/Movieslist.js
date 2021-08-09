import React, { useContext } from 'react';
import { Moviesprovider } from './Moviescontext';
function Movieslist() {
    const obj = useContext(Moviesprovider)
    const movieslist = obj.movies.map((movie) => {
        return <div>
            <h1>{movie.moviename}</h1>
            <p>Directed by {movie.directorname}</p>
        </div>
    })
    return (
        <div style={{ backgroundColor: 'green' }}>
            <h1 style={{ backgroundColor: 'blue' }}>Movieslist</h1>
            {movieslist}
        </div>
    );
}

export default Movieslist;