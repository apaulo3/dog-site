
'use client';

import styles from '../styles/header.module.scss';
import commonStyles from '../styles/common.module.scss'
import prefix from '../prefix';
import Link from 'next/link';
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';
import { useState } from 'react';

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
  const [showWord, setShowWord] = useState(true)
  function showCarousel() {
    setShowWord(true)
  }

  function hideCarousel() {
    setShowWord(false)
  }

  let carousel = <Carousel
    className={styles.carousel}
    showArrows={false}
    showIndicators={false}
    infiniteLoop={true}
    showThumbs={false}
    dynamicHeight={false}
    stopOnHover={false}
    autoPlay={true}
    transitionTime={500}
    swipeable={false}
    onChange={(index) => {
      if (index == phrases.length - 1) {
        setTimeout(hideCarousel, 500)
      }
    }}
    axis="vertical"
    statusFormatter={(current, total) => ``}
  >
    {phrases.map((phrase, index) => (
      <p key={index} className={styles.heroWord}>{phrase}</p>
    ))}
  </Carousel>

  let heroWord = carousel

  if (!showWord) {
    heroWord = <p className={styles.heroWord}>
      {phrases[phrases.length - 1]}
    </p>

    setTimeout(showCarousel, 3000)
  } else {
    heroWord = carousel
  }

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
            {heroWord}
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