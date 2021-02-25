import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react';

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return(
    <>
    <div className={styles.profileContainer}>
      <img src="https://github.com/julianotavares.png" alt="Juliano Tavares"/>
      <div>
      <strong>Juliano Tavares</strong>
      <p>
        <img src="icons/level.svg" alt="Level"/>
        Level {level}</p>
    </div>
    </div>
    
    </>
  );
}