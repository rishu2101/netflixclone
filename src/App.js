import './App.css';
import Row from './components/Row'
import requests from './requests';
import Banner from './components/Banner'
import Nav from './components/Nav'

import React,{useState} from 'react'
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import CloseIcon from '@material-ui/icons/Close';
import {IconButton} from '@material-ui/core';




function App() {

  const [trailerUrl,setTrailerUrl] = useState('');
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };


  const [modalIsOpen,setIsOpen] = useState(false);
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      width                 : '75%',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


  const closeModal = () => {
    setIsOpen(false);
    setTrailerUrl('');
  }
  const handleClick = (movie_data) => {
    if (trailerUrl) {
        setTrailerUrl('');
    } else {
        movieTrailer(movie_data?.title || movie_data?.name || movie_data?.original_name)
        .then((url) => {
            console.log(url);
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
            setIsOpen(true);
        })         
        .catch((error) => console.log(error));
    }
}

  
  return (
    <div className="App">
      <Nav/>
      <Banner handleClick={handleClick}/>
      <Row title="NetFlix Originals" fetchUrl={requests.fetchNetflixOriginals} handleClick={handleClick}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} handleClick={handleClick}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} handleClick={handleClick}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} handleClick={handleClick}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} handleClick={handleClick}/>
      <Row title="Horror Mobvies " fetchUrl={requests.fetchHorrorMovies} handleClick={handleClick}/>
      <Row title="Romatic Movies" fetchUrl={requests.fetchRomanticMovies} handleClick={handleClick}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} handleClick={handleClick}/>

      <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel=""
        >
          <IconButton onClick={closeModal}><CloseIcon/></IconButton>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </Modal>
    </div>
  );
}

export default App;
