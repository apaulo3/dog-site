
'use client';

import styles from '../styles/header.module.scss';
import commonStyles from '../styles/common.module.scss'
import { Allison, Wix_Madefor_Text } from 'next/font/google';
import prefix from '../prefix';
import Link from 'next/link';
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';

const allisonFont = Allison({
  subsets: ['latin'],
  weight: '400'
})

const wixFont = Wix_Madefor_Text({
  subsets: ['latin'],
})

let phrases = [
  "Puppy",
  "Companion",
  "Best friend",
  "Hunting buddy",
  "Roommate",
  "Loyal confidant",
  "Playmate",
  "Guardian angel",
  "Cuddle buddy",
  "Faithful sidekick",
  "Adventurous partner",
  "Devoted ally",
  "Lifetime friend",
  "Joyful spirit",
  "Inseparable bond",
]

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.heroInfoBlock}>
        <div className={styles.title}>
          <h1>Local breeders you can trust.</h1>
        </div>
        <div className={styles.subtext}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className={styles.dynamicText}>
            <p>
              {"Let us help you find your next"}
            </p>
            <Carousel
              className={styles.carousel}
              showArrows={false}
              showIndicators={false}
              infiniteLoop={true}
              showThumbs={false}
              dynamicHeight={false}
              stopOnHover={false}
              autoPlay={true}
              axis="vertical"
              statusFormatter={(current, total) => ``}
            >
              {phrases.map((phrase, index) => (
                <p key={index} className={styles.heroWord}>{phrase}</p>
              ))}
            </Carousel>
          </div>
        </div>

        <Link href="#puppies" className={styles.actionBtnLink} >
          <button className={styles.actionBtn}>view pups</button>
        </Link>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={`${prefix}/goldenHeadshot.png`}
          alt="Captioned Image"
          layout="responsive"
          className={commonStyles.img}
          placeholder='empty'
          width={100}
          height={66.8}
        />
      </div>
    </div>
  );
}