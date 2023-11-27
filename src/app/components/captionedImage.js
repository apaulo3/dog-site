'use client';

import styles from '../styles/captionedImage.module.scss';
import commonStyles from '../styles/common.module.scss'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CaptionedImage({
  text,
  subText,
  imgSrc,
  imageLeft = false
}) {
  const [useMobile, setUseMobile] = useState(window.innerWidth <= 750)

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

  const caption = <div className={
    `${styles.captionBox}` //${imageLeft ? styles.rightText : styles.leftText}
  }>
    <h1 className={styles.primaryText}>{text}</h1>
    <p className={styles.secondaryText}>{subText}</p>
  </div>

  const image = <div className={
    `${useMobile ? styles.imgContainerMobile : styles.imgContainer}`
  }>
    <Image
      src={imgSrc}
      alt="Captioned Image"
      layout="responsive"
      className={commonStyles.img}
      placeholder='empty'
      width={100}
      height={66.8}
    />
  </div>

  if (useMobile) {
    return (
      <div className={styles.container}>
        {caption}
        {image}
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        {imageLeft ? image : caption}
        {imageLeft ? caption : image}
      </div>
    )
  }
}