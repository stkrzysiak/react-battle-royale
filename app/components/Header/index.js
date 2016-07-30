/**
*
* Header
*
*/

import React from 'react';

import styles from './styles.css';

function Header() {
  return (
    <div className={styles.header}>
      <article>
        <div>
          <section className={`${styles.logo} ${styles.centered}`}>
            React Battle Royale
          </section>
          <section className={`${styles.textSection} ${styles.centered}`}>
            <p>A quick way to compare react components side by side</p>
          </section>
        </div>
      </article>
    </div>
  );
}

export default Header;
