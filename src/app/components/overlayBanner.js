import styles from '../styles/page.module.scss'
import Image from 'next/image'

export default function OverlayBanner() {
  return (
    <div
      style={{
        alignItems: 'center',
        height: 430,
        backgroundColor: 'white',
        position: 'relative'
      }}
    >
      <div
        style={{
          height: 350,
          backgroundColor: 'var(--brand-color)',
          marginTop: '200px',
          marginBottom: '200px'
        }}
      ></div>
      <div className='row'>
        <Image
          src="/golden.png"
          alt="Golden"
          layout="fit"
          width={430}
          height={430}
          className={styles.img}
          style={{
            zIndex: 0.5,
            position: 'absolute',
            bottom: 40,
          }}
        />
        <h2
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 155,
            fontSize: '130px'
          }}
        >
          Our Dogs
        </h2>
      </div>
    </div>
  );
}