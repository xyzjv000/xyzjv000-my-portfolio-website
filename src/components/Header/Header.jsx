import React, { useState } from 'react';
import styles from './Header.module.css';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import NavItem from './NavItem';
function Header(props) {
  const [active, setActive] = useState('home');
  const navigationHandler = (event) => {
    const id = event.target.id;
    console.log(id);
    setActive(id);
    props.selectItem(id);
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Jesvir</h1>
      <NavItem
        className={styles.navigation}
        navigationHandler={navigationHandler}
        active={active}
      />
      <div className={styles.contact}>
        <p>+63 946 542 1802 </p>
        <CallSharpIcon />
      </div>
    </header>
  );
}

export default Header;
