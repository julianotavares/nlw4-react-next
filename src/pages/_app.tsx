import '../styles/global.css'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import React, { useState } from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
       <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
