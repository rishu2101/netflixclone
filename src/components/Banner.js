import React,{useState,useEffect} from 'react'
import axios from '../axios'
import requests from '../requests'
import './Banner.css'

function Banner(props) {
    const [movie,setMovie] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/original/';
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length)
            ]);
            return request;
        }
        fetchData();
    }, [])

    

    const truncate = (str,n) => {
        return str?.length> n ? str.substr(0,n-1) + "..." : str;
    }
    // console.log(movie);
    // console.log(`url(${baseURL}/${movie?.backdrop_path})`);

    return (
        <header className="banner" style={
        {
            backgroundSize:'cover',
            backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
            backgroundPosition: "center center",
        }
        }>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name } </h1>
                <div className="banner_buttons">
                    <button className="banner_button" onClick={() => props.handleClick(movie)}>Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie.overview, 500)}
                </h1>
                
            </div>
            <div className="banner_fade">
                
            </div>
        </header>
    )
}

export default Banner
