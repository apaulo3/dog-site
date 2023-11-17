import styles from '../styles/modal.module.scss';
import commonStyles from '../styles/common.module.scss'
import Image from 'next/image';
import { getGender } from '../utils';
import prefix from '../prefix';

export default function Modal({ dogInfo, onClose }) {

  const { name, age, gender } = dogInfo

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.close} onClick={onClose} />
        <div >
          <h1>{name} ({getGender(gender)})</h1>
          <p>{age} weeks</p>
          <Image
            src={`${prefix}/doodlePup.jpg`}
            alt="Doodle Pup"
            layout="responsive"
            className={commonStyles.img}
            width={100}
            height={66.8}
          />
        </div>
      </div>
    </div>
  )
}