import Image from 'next/image';
import React from 'react';

import Count from 'components/Count';
import { Link, Head } from 'components/base';
import { userService } from 'services';

const myPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 3000);
});

import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  return {
    props: {
      stars: 12345
    },
  };
}

const Home = (props) => {
  return (
    <>
      <Head title={'Home Page'} />
      <div className={styles.container}>
        <main className={styles.main}>
          <div>Next stars: {props.stars}</div>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <Count/>
        </main>
      </div>
    </>
  );
};

export default Home;
