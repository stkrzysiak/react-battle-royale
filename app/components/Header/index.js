/**
*
* Header
*
*/

import React from 'react';

import styles from './styles.css';

function Header() {
  return (
    <div className={'header'}>
      <article>
        <div>
          <section className={`${styles.logo} ${styles.centered}`}>
            React Battle Royale
          </section>
        </div>
      </article>
    </div>
  );
}

export default Header;
