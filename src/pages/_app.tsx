import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AppContext } from '../components/Context'
import Footer from '../components/Footer'
import ParticlesBackground from '../components/particlesBackground'
import { GlobalStyle, theme } from '../styles/globals'
import { ToastContainer} from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AppContext>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        <Component {...pageProps} />
        <ParticlesBackground/>
        <Footer />
      </ThemeProvider>
    </AppContext>
  )
}

export default MyApp
