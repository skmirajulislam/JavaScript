// AnimeList.js
import React, { Component } from "react";
import AnimeCard from "./AnimeCard";

class AnimeList extends Component {
  render() {
    const { anime } = this.props;

    return (
      <div className="anime-list">
        {anime.map((animeItem, index) => (
          <AnimeCard key={index} name={animeItem.name} image={animeItem.image} />
        ))}
      </div>
    );
  }
}

export default AnimeList;
