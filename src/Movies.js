import react from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, poster, summary, yt_trailer_code }) {
  return (
    <div>
      <h4>{title}</h4>
      <h5>{year}</h5>
      <img src={poster}></img>
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
