'use client';

import styles from '../styles/grid.module.scss';
import commonStyles from '../styles/common.module.scss'
import Image from 'next/image';
import { useState, useEffect } from 'react'
import Modal from './modal';
import { getGender } from '../utils';
import prefix from '../prefix';
import StatusPill from './statusPill';

export default function PuppyGrid() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({})
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const openModal = (dog) => {
    setModalContent(dog);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetch(`data/pups.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <div className={styles.gridLayout}>
      {data.pups.map((dog, index) => (
        <div key={index} className={styles.card} onClick={() => openModal(dog)}>
          <div className={styles.cardHeading}>
            <div>
              <h1>{dog.name} ({getGender(dog.gender)})</h1>
              <p>{dog.age} weeks</p>
            </div>
            <StatusPill status={dog.status} />
          </div>
          <Image
            src={`${prefix}/doodlePup.jpg`}
            alt="Doodle Pup"
            layout="responsive"
            className={commonStyles.img}
            placeholder='empty'
            width={100}
            height={66.8}
          />
        </div>
      ))}

      {showModal && <Modal dogInfo={modalContent} onClose={closeModal} />}
    </div >
  );
}