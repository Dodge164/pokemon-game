import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.css';

export default function Header({ title, descr }) {
  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.silhouette}></div>
      <div className={s.moon}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <Link to="/game" className={s.button}>
          Start Game
        </Link>
      </div>
    </header>
  );
}
