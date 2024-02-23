// AnimeCard.js
import React, { Component } from "react";

class AnimeCard extends Component {
  render() {
    const { name, image } = this.props;

    return (
      <div className="anime-card">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    );
  }
}

export default AnimeCard;
