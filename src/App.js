import React from "react";

//State를 사용하려면 Class component를 써야만 한다.
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  sub = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  // component life cycle
  //component가 mount(만들어졌을 때)됐을 때
  componentDidMount() {
    console.log("Component rendered");
  }
  //component가 update(업데이트)됐을 때
  componentDidUpdate() {
    console.log("Component updated");
  }
  //component가 unmount(죽었을 때)됐을 때 ex)다른 페이지로 이동할 때
  componentWillUnmount() {
    console.log("Component unmount");
  }

  render() {
    console.log("I'm redering");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Sub</button>
      </div>
    );
  }
}

export default App;
