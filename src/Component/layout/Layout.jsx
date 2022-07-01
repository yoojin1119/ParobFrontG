import React, { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Router, { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// library
import styled from 'styled-components';

// utils
import helper from '../../utils/common/helper';

// dynamic import
const Header = dynamic(() => import('../../Component/layout/component/header'));
const Footer = dynamic(() => import('../../Component/layout/component/Footer'));

const Layout = ({ children }) => {
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const [errorCode, setErrorCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('error');

  const router = useRouter();
  const currentPage = router.pathname;
  const [language, setLanguage] = useState('')


  const handleReplace = () => {
    Router.replace('/');
  };

  useEffect(() => {
    setLanguage(navigator?.language.slice(0, 2))
  })

  let today = new Date();
  let hours = today.getHours();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="/assets/images/logos/favicon.ico"
        ></link>
        </Head>
        {/* 구글번역 */}
        <Script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            function googleTranslateElementInit() {
            setCookie('googtrans', '/en/${language}', 1);
            new google.translate.TranslateElement({ pageLanguage: 'ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
            }
            function setCookie(key, value, expiry) {  
                var expires = new Date();
                expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
                document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
            }`,
          }}
        />
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          data-nscript="lazyOnload"
        />
        {/* 구글번역 */}

        <>
          <Main>{children}</Main>
        </>
      </>
  );
};

export default Layout;

const Main = styled.div`
`;