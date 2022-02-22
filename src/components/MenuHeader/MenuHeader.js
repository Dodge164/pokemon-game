import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import NavBar from '../NavBar/NavBar';

export default function MenuHeader({ bgActive }) {
  const [isOpen, setOpen] = useState(null);

  const handleClickBurger = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <Menu isOpen={isOpen} />
      <NavBar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickBurger={handleClickBurger}
      />
    </>
  );
}
