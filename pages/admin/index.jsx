import Image from 'next/image';
import React from 'react';

import Count from 'components/Count';
import { Link, Head } from 'components/base';
import { userService } from 'services';


import styles from 'styles/Home.module.css';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const Home = (props) => {
  return (
    <>
      <Head title={'Admin Page'} />
      <div className={styles.container}>
        <div className="p-4">
          <div className="container">
            <h1>Hi {userService.userValue?.firstName}!</h1>
            <p>You&apos;re logged in with Next.js & JWT!!</p>
            <p><Link href="/users">Manage Users</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
