import React from "react";
import axios from "axios";
import Movie from "./Movies";
import "./App.css";

//State를 사용하려면 Class component를 써야만 한다.
class App extends React.Component {
  state = {
    isLoading: true,
  };

  getMovies = async () => {
    //axios를 통해 API를 가져오고
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    // setState를 통해 state에 값을 추가 및 loading상태 변경
    this.setState({ movies, isLoading: false });
  };
  // 처음 render를 할 때 호출되는 life cycle method는 componentDidMount이다.
  // 그래서 componentDidMount에서 data를 fetch하는 것으로써 data를 받아올 수 있다. ex)API를 통해 외부의 데이터 또한 받아올 수 있다.
  // 그런 다음 가져온 데이터를 render하는 등의 작업을 수행
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                trailer={movie.yt_trailer_code}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
