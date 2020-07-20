import NavBar from '../components/NavBar';
import Head from 'next/head';
import '../scss/app.scss';

const _app = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Dusty McCord Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid-container'>
        <div className='grid-container-left'>
          <NavBar />
        </div>
        <div className='grid-container-center'>
          <Component {...pageProps} />
        </div>
        <div className='grid-container-right'></div>
      </div>
    </>
  );
};

export default _app;
