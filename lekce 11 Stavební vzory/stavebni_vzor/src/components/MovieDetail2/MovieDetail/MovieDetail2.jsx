import { useEffect, useState } from 'react';
import './style.css';

export const MovieDetail2 = ({opened, id}) => {

    const [movieDetail, setMovieDetail] = useState([]);

    useEffect(() =>{
        const loadData = async () =>{
        const res = await fetch(`http://localhost:3000/movie-details/1`);
        const data = await res.json();
        setMovieDetail(data);
        };
if (opened) {
    loadData();
}        
    }, [opened]);


    if (!movieDetail) {
        return <div>Loading...</div>
    }
    return (
        <div className="detail-container">
            <img src={movieDetail.thumbnail} alt="Movie Thumbnail"></img>
            <div>{movieDetail.extract}</div>
        </div>
    )
};