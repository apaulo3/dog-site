import styles from '../styles/captionedImage.module.scss';
import commonStyles from '../styles/common.module.scss'
import Image from 'next/image';

export default function CaptionedImage({
  text, subText, imgSrc, imageLeft = false
}) {
  const caption = <div className={styles.captionBox}>
    <h1 className={styles.primaryText}>{text}</h1>
    <p className={styles.secondaryText}>{subText}</p>
  </div>

  const image = <Image
    src={imgSrc}
    alt="Captioned Image"
    layout="responsive"
    className={`${commonStyles.img} ${styles.img}`}
    width={100}
    height={66.8}
  />

  return (
    <div className={styles.container}>
      {imageLeft ? image : caption}
      {imageLeft ? caption : image}
    </div>
  )
}