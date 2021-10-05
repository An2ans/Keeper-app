import React from 'react';

function Footer(){
  const year = new Date().getFullYear()
  return (
  <footer>
  <p> Copyright © {year} by Antonio Beltrán</p>
  </footer>);
}

export default Footer;
