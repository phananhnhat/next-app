import {NavLink} from '.';
import {userService} from '../../services';

export {Nav};

function Nav() {

  function logout() {
    userService.logout();
  }

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
        <NavLink href="/posts" className="nav-item nav-link">Posts</NavLink>
        <NavLink href="/info" className="nav-item nav-link">Info</NavLink>
        <NavLink href="/register" className="nav-item nav-link">Register</NavLink>
        <NavLink href="/login" className="nav-item nav-link">Login</NavLink>
        <a onClick={logout} className="nav-item nav-link">Logout</a>
        <NavLink href="/admin" className="nav-item nav-link">Go to Admin Page</NavLink>
      </div>
    </nav>
  );
}
