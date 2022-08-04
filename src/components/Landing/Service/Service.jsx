import React from 'react';
import styles from './Service.module.css';
import ServiceBox from './ServiceBox';
import { FaPaintBrush, FaDatabase, FaDesktop } from 'react-icons/fa';
function Service() {
  return (
    <div className={styles.serviceContainer}>
      <div className={styles.serviceLeft}>
        <ServiceBox
          bgColor='#2D6663'
          icon={<FaPaintBrush />}
          skill='Website Design'
        />
        <ServiceBox
          bgColor='#E9B946'
          icon={<FaDesktop />}
          skill='Web Development'
        />
        <ServiceBox
          bgColor='#E95938'
          icon={<FaDatabase />}
          skill="Database & API's"
        />
      </div>
      <div className={styles.serviceRight}>
        <h1>What do I help?</h1>
        <div>
          <p>
            I can help your business grow by using the latest technologies also
            find a solution and solve problem.
          </p>
          <p>
            I can also contribute in web designing and development either short
            or long term projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
