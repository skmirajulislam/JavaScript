// Item.js

import React from "react";
import styles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className={styles.image} />
      <p>
        <strong className={styles.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
