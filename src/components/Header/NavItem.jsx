import React from 'react';
import styles from './Header.module.css';
function NavItem(props) {
  const navlist = ['home', 'service', 'works', 'experience'];
  return (
    <div className={props.className}>
      <ul>
        {navlist.map((item) => (
          <li
            onClick={props.navigationHandler}
            id={item}
            className={props.active === item ? styles.active : ''}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavItem;
