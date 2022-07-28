import { NavLink } from '.';

export { Nav };

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
                <NavLink href="/posts" className="nav-item nav-link">Posts</NavLink>
                <NavLink href="/info" className="nav-item nav-link">Info</NavLink>
                <NavLink href="/admin" className="nav-item nav-link">Admin</NavLink>
            </div>
        </nav>
    );
}
