import React,{useState,useEffect} from 'react'
import axios from '../axios'
// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer'

import './Row.css'

function Row({title,fetchUrl,handleClick}) {
    const [movies,setMovies] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/original/';
    // const [trailerUrl,setTrailerUrl] = useState('');
    // const opts = {
    //     height: '390',
    //     width: '100%',
    //     playerVars: {
    //       autoplay: 1,
    //     },
    //   };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData(); 
    }, [fetchUrl,movies])

    // const handleClick = (movie_data) => {
    //     if (trailerUrl) {
    //         setTrailerUrl('');
    //     } else {
    //         movieTrailer(movie_data?.title || movie_data?.name || movie_data?.original_name)
    //         .then((url) => {
    //             console.log(url);
    //             const urlParams = new URLSearchParams(new URL(url).search);
    //             setTrailerUrl(urlParams.get('v'));
    //         })         
    //         .catch((error) => console.log(error));
    //     }
    // }
    // console.log(movies);

    const updateUrl = (url) => {
        return url.replace('http://','https://');

    }
    return (
        <div className="Row">
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                {movies.map(movie => {
                    return <img key={movie.id} className="row_poster" src={updateUrl(`${baseURL}${movie.poster_path}`)} alt={movie.original_title} onClick={() => handleClick(movie)}/>;
                })}
            </div>
            {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>} */}
        </div>
    )
}

export default Row
