import '../assets/css/globals.css';
import theme from '../assets/css/theme'
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { useEffect,useState } from 'react';
const Layout = dynamic(() => import('../Component/layout/Layout'));

function MyApp({ Component, pageProps }) {
  const [children, setChildren] = useState(false)
  useEffect(()=> {
    setChildren(true)
  },[])
  if(!children) {
    return null;
  }
  if(typeof window === 'undefined') {
    return <></>
  }
  else {
  return (
    <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
    </ThemeProvider>
    );
  }
}

export default MyApp
