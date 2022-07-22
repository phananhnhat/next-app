import { useEffect } from 'react';

import { Layout } from 'components/users';
import {useRouter} from 'next/router';
import {Spinner} from '../components';

export default Index;

function Index(props) {
  console.log('render Loading')
  const router = useRouter();
  useEffect(() => {
    router.replace(`/users`);
  }, [])

  return (
    <Layout>
      <h1>Loading User ...</h1>
      <Spinner />
    </Layout>
  );
}
