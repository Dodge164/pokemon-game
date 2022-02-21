import React from 'react';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={s.wrapper}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2022 #ReactMarathon.</p>
      </div>
    </footer>
  );
}
