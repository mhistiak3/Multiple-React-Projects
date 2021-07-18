import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            React User
          </NavLink>

          <ul className="navbar-nav flex-row me-auto">
            <li className="nav-item">
              <NavLink className="nav-link mx-2 mx-lg-0" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2 mx-lg-0" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2 mx-lg-0" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <Link to="/user/add" className="btn btn-outline-light">
            Add User
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
