import React from "react";
import axios from "axios";

//State를 사용하려면 Class component를 써야만 한다.
class App extends React.Component {
  state = {
    isLoading: true,
  };

  getMovies = async () => {
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
  };
  // 처음 render를 할 때 호출되는 life cycle method는 componentDidMount이다.
  // 그래서 componentDidMount에서 data를 fetch하는 것으로써 data를 받아올 수 있다. ex)API를 통해 외부의 데이터 또한 받아올 수 있다.
  // 그런 다음 가져온 데이터를 render하는 등의 작업을 수행
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading " : "we are ready"}</div>;
  }
}

export default App;
