import Image from 'next/image';
import React, {useEffect} from 'react';
import axios from 'axios';

import {Head} from 'components/base';
import Count from 'components/Count';

import styles from 'styles/Home.module.css';
import {error} from 'next/dist/build/output/log';

const myPromise = () => new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve('foo');
  }, 3000);
});

export async function getServerSideProps() {
  // await myPromise();
  let data = [];
  let error = null;
  try {
    const response = await axios.get('http://localhost:3000/api/posts');
    data = response.data;
  }
  catch (e) {
    error = {
      message: e.toString(),
    }
  }
  return {
    props: {
      posts: data,
      error: error,
    },
  };
}

const Home = ({posts, error}) => {
  return (
    <>
      <Head title={'Posts'}/>
      <div className={styles.container}>
        {
          posts.length > 0 && posts.map(({title, content}) => (
            <div key={title}>
              <h4>{title}</h4>
              <p>{content}</p>
            </div>
          ))
        }
        {
          error && (
            <div>{error.message}</div>
          )
        }
      </div>
    </>
  );
};

export default Home;
