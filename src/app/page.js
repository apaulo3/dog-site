import styles from './styles/page.module.scss'
import PuppyGrid from './components/grid'
import Header from './components/header'
import CaptionedImage from './components/captionedImage'
import prefix from './prefix'
import dynamic from 'next/dynamic'

const CaptionedImageNoSSR = dynamic(
  () => import('./components/captionedImage'),
  { ssr: false }
)


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.aboutSection}>
        <h2 className={styles.aboutHeading}>About Us</h2>
        <p className={styles.aboutText}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>

      <CaptionedImageNoSSR
        text={"Our Dam"}
        subText={"Nala, F1 Golden Doodle"}
        imgSrc={`${prefix}/doodlePup.jpg`}
      />

      <div name="spacer" style={{ height: 70 }} />

      <CaptionedImageNoSSR
        text={"Our Sire"}
        subText={"Bilbo, F1 Golden Doodle"}
        imgSrc={`${prefix}/doodlePup.jpg`}
        imageLeft={true}
      />

      <div name="spacer" style={{ height: 70 }} />

      <h1 className={styles.sectionTitle}>Our Puppies</h1>
      <p className={styles.sectionSubtitle}>F2 Golden Doodles</p>

      <PuppyGrid />
    </main>
  )
}