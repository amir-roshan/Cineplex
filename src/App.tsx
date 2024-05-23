import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// API key
const API_URL = import.meta.env.VITE_API_URL;

interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  imdbID: string;
  Year: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}s=${title}`);
    const data = await response.json();
    console.log(data);
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>Cineplex</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie: Movie) => (
            <MovieCard
              key={movie.imdbID}
              Year={movie.Year}
              Poster={movie.Poster}
              Title={movie.Title}
              Type={movie.Type}
            />
          ))}
        </div>
      ) : (
        <h2>No movies found</h2>
      )}
    </div>
  );
}

export default App;
