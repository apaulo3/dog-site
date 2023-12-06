
'use client';

import styles from '../styles/navigation.module.scss';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className={styles.navMain}>
      <div className={styles.logoTitleSection}>
        <p>PawPaws Pups</p>
      </div>
      <ol className={styles.navItemList}>
        <Link href="#puppies" className={styles.actionBtnLink} >
          <p className={styles.navItem}>home</p>
        </Link>
        <Link href="#puppies" className={styles.actionBtnLink} >
          <p className={styles.navItem}>about</p>
        </Link>
        <Link href="#puppies" className={styles.actionBtnLink} >
          <p className={styles.navItem}>lineage</p>
        </Link>
        <Link href="#puppies" className={styles.actionBtnLink} >
          <p className={styles.navItem}>pups</p>
        </Link>
      </ol>
    </div>
  );
}