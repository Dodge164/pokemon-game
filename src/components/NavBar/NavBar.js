import React from 'react';
import s from './NavBar.module.css';
import cn from 'classnames';

export default function NavBar({ isOpen, bgActive = false, onClickBurger }) {
  return (
    // <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
    <nav className={cn(s.navbar, { [s.bgActive]: bgActive })}>
      {/* <nav id={s.navbar} className={cn(s.navbar, { [s.bgActive]: bgActive })}> */}
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div
          className={cn(s.menuButton, {
            [s.active]: isOpen,
          })}
          onClick={onClickBurger}
        >
          <span />
        </div>
      </div>
    </nav>
  );
}
