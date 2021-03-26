const APIKEY = "c324d60b54cbd3dc174f3a73a9cbf8c2";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    // fetchNetflixOriginals: `/discover/tv/?api_key=${APIKEY}&with_network=213`,
    fetchNetflixOriginals: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default requests;