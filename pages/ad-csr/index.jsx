import React from 'react';
import dynamic from 'next/dynamic'

import {Head} from '../../components/base';

const AdminPageNoSSR = dynamic(() => import('admin'), {
  ssr: false
})

const isSSR = () => typeof window === 'undefined';

const Home = (props) => {
  return (
    <>
      <Head title={'Admin Page'} />
      <div>
        <AdminPageNoSSR />
      </div>
    </>
  );
};

export default Home;
