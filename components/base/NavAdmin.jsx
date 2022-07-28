import {useState, useEffect} from 'react';

import {NavLink} from '.';
import {userService} from 'services';

export {NavAdmin};

function NavAdmin() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // const subscription = userService.user.subscribe(x => setUser(x));
    // return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href="/admin" className="nav-item nav-link">Dashboard</NavLink>
        <NavLink href="/admin/users" className="nav-item nav-link">Users</NavLink>
        <a onClick={logout} className="nav-item nav-link">Logout</a>
      </div>
    </nav>
  );
}
