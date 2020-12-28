import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "sandwich",
    image:
      "https://iknowallnews.com/wp-content/uploads/2018/05/nintchdbpict000143036616.jpg",
    rating: 5.0,
  },
  {
    id: 2,
    name: "kimchi",
    image:
      "https://mygutmatters.com/wp-content/uploads/2017/12/sous-kimchi-1.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "bulgogi",
    image:
      "https://barefeetinthekitchen.com/wp-content/uploads/2014/11/bulgogi-4.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "ramen",
    image: "https://i.ytimg.com/vi/B8y3SSmz4sg/maxresdefault.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "bossam",
    image:
      "https://www.seriouseats.com/2018/12/20181204-bossam-vicky-wasik-9-1500x1125.jpg",
    rating: 4.6,
  },
];

function Food({ name, image, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name} width="400" height="400" />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      {foodILike.map((current) => (
        <Food
          key={current.id}
          name={current.name}
          image={current.image}
          rating={current.rating}
        />
      ))}
    </div>
  );
}

export default App;
