const API_KEY = "c222f584e1ab52458a2d98de8a4ff6e7";

const requests = {
  fetchTrendings: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10789`,
  fetcDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  fetchAnime: `/discover/tv?api_key=${API_KEY}&language=en-US&with_keywords=210024`,
};

export default requests;
