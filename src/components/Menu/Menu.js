import React from 'react';
import { Link } from 'react-router-dom';
import s from './Menu.module.css';
import cn from 'classnames';

const MENU = [
  { to: 'welcome', title: 'HOME' },
  { to: 'game', title: 'GAME' },
  { to: 'about', title: 'ABOUT' },
  { to: 'contact', title: 'CONTACT' },
];

export default function Menu({ isOpen }) {
  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isOpen === true,
        [s.deactive]: isOpen === false,
      })}
    >
      <div className={s.overlay} />
      {/* <div className={s.menuItems}> */}
      <div>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index}>
              <Link to={to}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
