import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.root}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <ul>
        <li>
          <Link to={"/product-list"}>Product List Page</Link>
        </li>
        <li>
          <Link to={"/error"}>Not Found Page</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
