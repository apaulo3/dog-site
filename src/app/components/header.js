
'use client';

import styles from '../styles/header.module.scss';
import Image from 'next/image';
import { Allison, Wix_Madefor_Text } from 'next/font/google';
import prefix from '../prefix';
import Link from 'next/link';

const allisonFont = Allison({
  subsets: ['latin'],
  weight: '400'
})

const wixFont = Wix_Madefor_Text({
  subsets: ['latin'],
})

export default function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.textContainer}>
          <h1 className={`${styles.title} ${allisonFont.className}`}>PawPaws</h1>
          <p className={`${styles.subTitle} ${wixFont.className}`}>Precious Pups</p>
        </div>

        <Link href="#puppies" className={styles.actionBtnLink} >
          <button className={styles.actionBtn}>view pups</button>
        </Link>

        <div className={styles.imgOverlay} />
        <Image
          src={`${prefix}/landscape.jpeg`}
          alt="Header Photo"
          layout='responsive'
          className={styles.img}
          width={1200}
          height={673}
          placeholder='empty'
        />
      </div>
    </div>
  );
}