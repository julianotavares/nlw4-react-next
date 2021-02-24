import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  return (
    <div className={styles.chalengeBoxContainer}>
      <div className={styles.challengeNotActive}>
        <strong>
          Inicie um ciclo para receber desafios a serem completados
        </strong>
      </div>
    </div>
  )
}