import { promises as fs } from 'fs';
import styles from '../page.module.css'
import Image from 'next/image'

export default async function PuppyGrid() {
  const file = await fs.readFile(process.cwd() + '/src/app/data/available.json', 'utf8');
  const data = JSON.parse(file).available_dogs;

  var dogList = []

  data.forEach(
    (dog) => {
      dogList.push(<div className={styles.gridElem}>
        <h1>{dog.name} ({getGender(dog.gender)})</h1>
        <p>{dog.age} weeks</p>
        <Image
          src="/doodlePup.jpg"
          alt="Doodle Pup"
          layout="responsive"
          width={100}
          height={66.8}
        />
      </div>)
    }
  )

  return (
    <div className={styles.gridLayout}>
      {dogList}
    </div>
  );
}

function getGender(genderBool) {
  if (genderBool) {
    return "m"
  } else {
    return "f"
  }
}