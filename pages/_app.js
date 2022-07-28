import Head from 'next/head';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

import {userService} from 'services';
import {Nav, NavAdmin} from 'components/base';

import '../styles/globals.css';

const privatePaths = '/admin';
const publicAdminPaths = ['/admin/login', '/admin/account/register'];

const isRequiresAuth = (url) => {
  const isAdminPage = url.includes(privatePaths);
  const isPublicAdminPage = publicAdminPaths.includes(url);
  return isAdminPage && !isPublicAdminPage;
}

function MyApp({Component, pageProps}) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const path = router.asPath.split('?')[0];
  const isAdminPage = path.includes(privatePaths);
  const [authorized, setAuthorized] = useState(!isRequiresAuth(path));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(path);

    // on route change start - hide page content by setting authorized to false
    // const hideContent = () => setAuthorized(false);
    const openLoading = () => {
      setLoading(true);
    };
    const hideLoadingAndAuthCheck = (url) => {
      setLoading(false);
      authCheck(url);
    };

    router.events.on('routeChangeStart', openLoading);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', hideLoadingAndAuthCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', openLoading);
      router.events.off('routeChangeComplete', hideLoadingAndAuthCheck);
    };
  }, []);

  function authCheck(url) {
    const isRequiresLogin = isRequiresAuth(url.split('?')[0]);
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);
    if (!isRequiresLogin) {
      return;
    }
    if (userService.userValue) {
      setAuthorized(true);
    } else {
      router.push({
        pathname: 'admin/login',
        query: {returnUrl: url}
      });
    }
  }

  // const isAdminPage = false;
  // const authorized = true;
  // const user = null;

  return (
    <>
      <div className={`app-container ${user ? 'bg-light' : ''}`}>
        {isAdminPage ? <NavAdmin/> : <Nav/>}
        {authorized &&
          <Component {...pageProps} />
        }
      </div>
      {
        loading &&
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}>
          Loading ..........................
        </div>
      }
      <div className="text-center mt-4">
        <p>
          <a
            href="https://jasonwatmore.com/post/2021/08/19/next-js-11-user-registration-and-login-tutorial-with-example-app"
            target="_top">
            Next.js 11 - User Registration and Login Tutorial with Example App
          </a>
        </p>
      </div>
    </>
  );
}

export default MyApp;
