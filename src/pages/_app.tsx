import '../styles/global.css'
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
       <Component {...pageProps} />
       </ThemeProvider>
  )
}

export default MyApp
