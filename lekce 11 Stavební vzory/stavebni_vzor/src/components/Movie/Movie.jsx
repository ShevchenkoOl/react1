import { useEffect, useState } from 'react';
import './style.css'
// import { MovieDetail } from '../MovieDetail/MovieDetail';
import { MovieDetail2 } from '../MovieDetail2/MovieDetail/MovieDetail2';

export const Movies = ({title}) => {

    // const [movie, setMovie] = useState(null);
    const [movies, setMovies] = useState([]);
    const [opened, setOpened] = useState(false);

    useEffect(() =>{
        const loadData = async () =>{
        const res = await fetch(`http://localhost:3000/movies`);
        const data = await res.json();
        setMovies(data);
        };

        loadData();
    }, []);

    if(!movies){
        return <h2>Loading...</h2>
    }

    return (
        <div className="movie-conteiner">
            <h1>{title}</h1>
           {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
            <h2 className='movie-title'>{movie.title}</h2>
            <p className='movie-genres'>
                {movie.genres.map(genre => <span key={genre}>{genre}</span>)}
            </p>
            <p className='movie-genre'>{movie.genre}</p>
            <button onClick={() => setOpened(!opened)}>Show/Hide detail</button>
            {/* <MovieDetail extract={movie.extract} image={movie.thumbnail} opened={opened} /> */}
            <MovieDetail2 opened={opened} id={movie.id}/>
            </div>
           ))}
        {/* </div> */}

    {/* //     <div className="movie-container">
    //         <h1>{title}</h1>
    //   <span className="movie-title">{movie.title}</span>
    //   <span>{movie.year}</span>
    //   <div className="movie-genres">
    //     {movie.genres.map(genre => <span key={genre} className="movie-genre">{genre}</span>)}
    //   </div> */}
      {/* <button onClick={() => setOpened(!opened)}>Show/Hide detail</button> */}
      {/* <MovieDetail extract={movies.extract} image={movies.thumbnail} opened={opened} /> */}
    </div>
    )
};

