import React, { useEffect } from 'react';
import styles from './Home.module.css';
import Typed from 'typed.js';
import { Button } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
function Home() {
  // Create reference to store the DOM element containing the animation
  const typedContent = React.useRef(null);
  const typed = React.useRef(null);
  useEffect(() => {
    const options = {
      strings: ['Front End Development', 'Backend Development', 'Web Design'],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 3000,
      loop: true,
    };

    typed.current = new Typed(typedContent.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className={`${styles._container} container`}>
      <div className={styles.left}>
        <img
          src='./pngwing.com.png'
          alt='background paint'
          className={styles.bakcgroundPaint}
        />
        <img
          className={styles.picture}
          src='./portfolio-pic.png'
          alt='Jesvir Subang portfolio pciture'
        />
      </div>
      <div className={styles.right}>
        <div className={styles.greetings}>
          <p>Hi my name is</p>
          <h1>Jesvir </h1>
          <h1>&nbsp;&nbsp;Subang </h1>
          <p className={styles.sub}>
            I'm an independent creative Web Developer, Web Designer based in
            Philippines.
          </p>

          <div>
            <p className={styles.aboutMe}>
              I have experience in <span ref={typedContent}> </span>
            </p>
            <p className={styles.email}>
              <EmailOutlinedIcon />
              xyzjv000@gmail.com
            </p>
          </div>
        </div>
        <div className={styles.box}></div>
        <img src='./skills.png' alt='Skills list' className={styles.skills} />

        <Button variant='contained' className={styles.hireMe} disableElevation>
          Contact me
        </Button>
      </div>
    </div>
  );
}

export default Home;
