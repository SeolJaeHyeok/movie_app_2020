import react from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, poster, summary, yt_trailer_code }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title}></img>
      <div class="moive__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
};

export default Movie;
