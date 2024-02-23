import React from "react";
import "./styles.css";

// Refactor the given Card component to accept props
export const Card = (props) => (
  <div className="card">
    <h3>Name: {props.name}</h3>
    <span>About: {props.about}</span>
  </div>
);

export default function App() {
  // Pass name and about as props to the Card component
  return <Card name="Miraj" about="Lern Coding Learn humanity" />;
}
