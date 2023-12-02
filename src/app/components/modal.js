import styles from '../styles/modal.module.scss';
import { getGender } from '../utils';
import ImgCarousel from './imgCarousel';

export default function Modal({ dogInfo, onClose }) {

  const { name, dob, gender, images, age } = dogInfo

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.close} onClick={onClose} />
        <div>
          <h1>{name} ({getGender(gender)})</h1>
          <p>{age} weeks</p>
          <div className={styles.imgContainer}>
            <ImgCarousel images={images} />
          </div>
        </div>
      </div>
    </div>
  )
}