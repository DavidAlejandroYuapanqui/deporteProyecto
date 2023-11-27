import React from 'react';

function Header() {
  return (
    <div id='main' style={{ textAlign: 'center' }}>
      <img src='./images/banner.png' alt='Banner' />
      <h2>BUEN EJERCICIO</h2>
      <h1><span>FITNESS</span> SIGAMOS ADELANTE</h1>
      <p className='details'>Construyamos una mejor vida y saludable todos los días</p>
      <div className='header-btns'>
        <a href='#' className='header-btn'>VAMOS</a>
      </div>
    </div>
  );
}

export default Header;