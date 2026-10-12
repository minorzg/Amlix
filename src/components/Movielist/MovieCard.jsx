import "../../CSS/MovieCard.css"

const MovieCard = ({movie}) => {
  return (
    <a href="#" className="movie_card">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="movie_poster"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="movie_poster movie_poster_empty" aria-hidden="true"></div>
      )}

        <div className="movie_details">
            <h3 className="movie_details__heading">{movie.original_title}</h3>
            <div className="movie_date_rate">
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
            </div>
            <p className="movie_description">{(movie.overview ?? "").slice(0, 100)}{movie.overview ? "..." : ""}</p>
        </div>
    </a>
  )
}

export default MovieCard
