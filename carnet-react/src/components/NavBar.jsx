import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Acceuil</NavLink>
            </li>
            <li>
              <NavLink to="/profil">Profil</NavLink>
            </li>
            <li>
              <NavLink to="/notes">Notes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar