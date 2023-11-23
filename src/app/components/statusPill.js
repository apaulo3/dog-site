import styles from '../styles/pill.module.scss'

export default function StatusPill({ status }) {
  var pillStyle
  switch (status) {
    case "Available":
      pillStyle = styles.greenPill
      break
    case "Pending":
      pillStyle = styles.yellowPill
      break
    case "Sold":
      pillStyle = styles.bluePill
      break
    default:
      return <p />
  }

  return (<p className={`${styles.pill} ${pillStyle}`}>{status}</p>)
}