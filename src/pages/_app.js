import '../assets/css/globals.css';
import theme from '../assets/css/theme'
import { ThemeProvider } from 'styled-components'


function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
