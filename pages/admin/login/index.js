import Image from 'next/image';
import React from 'react';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

import { Link, Head } from 'components/base';
import { userService } from 'services';

import styles from 'styles/Home.module.css';

const Home = (props) => {
  const router = useRouter();

  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userService.userValue) {
      router.push('/admin');
    }
  }, []);

  const onSubmit = () => {
    return userService.login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || '/';
        router.push(returnUrl);
      })
      .catch((e) => {
        alert('Co loi xay ra')
      });
  }

  return (
    <>
      <Head title={'Login'} />
      <div className={styles.container}>
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input name="username" type="text" className='form-control' onChange={(e) => setUser(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button className="btn btn-primary">
                Login
              </button>
              <Link href="/account/register" className="btn btn-link">Register</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
