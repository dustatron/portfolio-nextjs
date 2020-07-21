import NavBar from '../components/NavBar';
import Head from 'next/head';
import '../scss/app.scss';

const _app = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Dusty McCord Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'></link>
      </Head>
      <div className='grid-container'>
        <span className='mobile-show'>
          {/* ///// For Mobile only \\\\\ */}
          <NavBar />
        </span>
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
