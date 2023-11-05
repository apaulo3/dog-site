import Image from 'next/image'
import styles from './page.module.css'
import PuppyGrid from './components/grid'
import WelcomeBanner from './components/welcomeBanner'
import OverlayBanner from './components/overlayBanner'

export default function Home() {
  return (
    <main className={styles.main}>
      <WelcomeBanner />

      <h2>About Us</h2>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>

      <OverlayBanner />
      <PuppyGrid />
    </main>
  )
}