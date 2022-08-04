import React from 'react';
import styles from './Service.module.css';
function ServiceBox(props) {
  return (
    <div className={styles.serviceBox}>
      <div className={styles.__left}>
        <div style={{ backgroundColor: props.bgColor }}>{props.icon}</div>
      </div>
      <div className={`${styles.__right} ${styles.__center}`}>
        <p>{props.skill}</p>
      </div>
    </div>
  );
}

export default ServiceBox;
