import styles from '../styles/header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <Image
        src="/pawPrint.png"
        alt="Logo"
        layout="contain"
        className={styles.logo}
        width={400}
        height={400}
      />

      <div className={styles.header}>

        <h1 className={styles.title}>PawPaws</h1>

        <Image
          src="/doodleInLeaves.png"
          alt="Header Photo"
          layout="responsive"
          width={1200}
          height={673}
        />
        <div className={styles.imgOverlay} />
      </div>
    </div>
  );
}