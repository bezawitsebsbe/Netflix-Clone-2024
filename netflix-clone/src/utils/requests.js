// const API_KEY = process.env.REACT_APP_API_KEY;

// const requests = {
//     fetchTrending: '/trending/all/week?api_key=${API_KEY}&language=en-US',
//     fetchNetflixOriginals:'/discover/tv?api_key=${API_KEY}&with_networks=213',
//     fetchTopRatedMovies:'/movie/top_rated?api_key=${API_KEY}&language=en-US',
//     fetchActionMovies:'/discover/movie?api_key=${API_KEY}&with_genres=28',
//     fetchComedyMovies:'/discover/movie?api_key=${API_KEY}&with_genres=35',
//     fetchHorrorMovies:'/discover/movie?api_key=${API_KEY}&with_genres=27',
//     fetchRomanceMovies:'/discover/movie?api_key=${API_KEY}&with_genres=10749',
//     fetchDocumentaries:'/discover/movie?api_key=${API_KEY}&with_genres=99',
//     fetchTvShow:'/tv/popular?api_key=${API_KEY}&language=en-US&page=1',
    

// };
// console.log(requests);

// export default requests;

let API_KEY;

try {
    API_KEY = process.env.REACT_APP_API_KEY;

    if (!API_KEY) {
        throw new Error("API Key is not defined. Please check your environment variables.");
    }
} catch (error) {
    console.error("Error retrieving API Key:", error.message);
    // Optionally set API_KEY to a default value or handle the error as needed
}

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

console.log(requests);

export default requests;
