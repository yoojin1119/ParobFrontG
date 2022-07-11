import '../assets/css/globals.css';
import theme from '../assets/css/theme'
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';
import { useEffect,useState } from 'react';
const Layout = dynamic(() => import('../Component/layout/Layout'));

import { store, persistor } from '../utils/reducers/configureStore';

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
      <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Provider>
    </ThemeProvider>
    );
  }
}

export default MyApp
