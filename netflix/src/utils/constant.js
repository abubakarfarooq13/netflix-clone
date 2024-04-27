export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWFhYjUxYjE0YjY1Y2JkYTU5MGQ5Nzc5ZTI0MzY5ZiIsInN1YiI6IjY2MjhmMmVkNjNkOTM3MDE0YTcyM2FjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cBHoRqAMazV8Hqb7HJNzgrUP3Jw8u7v9DPfrCJdfmho",
  },
};

export const Now_Playing_Movies =
  "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
export const SEARCH_MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?query=";
