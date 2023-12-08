
'use client';

import styles from '../styles/navigation.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [useMobile, setUseMobile] = useState(window.innerWidth <= 750)
  const [navState, setNavState] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (useMobile && window.innerWidth > 750) {
        setUseMobile(false)
      } else if (!useMobile && window.innerWidth <= 750) {
        setUseMobile(true)
      }
    }

    window.addEventListener('resize', handleResize)
  })

  function openNav() {
    setNavState(true)
  }

  function closeNav() {
    setNavState(false)
  }

  const openButton = <button className={styles.hamburgerButton} onClick={() => openNav()}>☰</button>
  const closeButton = <button className={styles.closeButton} onClick={() => closeNav()}>×</button>

  const navLinks = <ol className={styles.navItemList}>
    <Link href="#puppies" onClick={closeNav}>
      <p className={styles.navItem}>home</p>
    </Link>
    <Link href="#puppies" onClick={closeNav}>
      <p className={styles.navItem}>about</p>
    </Link>
    <Link href="#puppies" onClick={closeNav}>
      <p className={styles.navItem}>lineage</p>
    </Link>
    <Link href="#puppies" onClick={closeNav}>
      <p className={styles.navItem}>pups</p>
    </Link>
  </ol>

  const sidebar = <div className={styles.sidebar}>
    {closeButton}
    {navLinks}
  </div>

  const stickyHeader = <div className={styles.stickyNav}>
    <p className={styles.title}>PawPaws Pups</p>
    {openButton}
  </div>

  if (useMobile) {
    return (
      <div>
        {navState ? sidebar : stickyHeader}
      </div>
    )
  } else {
    return (
      <div className={styles.navMain}>
        <div className={styles.logoTitleSection}>
          <p>PawPaws Pups</p>
        </div>
        {navLinks}
      </div>
    );
  }
}