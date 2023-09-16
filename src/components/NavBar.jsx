import { NavLink } from "react-router-dom"

function NavBar() {
  const activeNavLink = ({ isActive }) => ({
    fontWeight: isActive ? 600 : 400,
    fontSize: isActive ? "20px" : "16px",
    color: isActive ? "#FF0000" : "#000000",
    textDecoration: "none"
  })

  return (
    <div className="navbar">
      <nav>
        <NavLink style={activeNavLink} to="/">
          All Books
        </NavLink>{" "} || {" "}
        <NavLink style={activeNavLink} to={'/favorite'}>
          Favorite
        </NavLink>{" "} || {" "}
        <NavLink style={activeNavLink} to={'/read'}>
          Read
        </NavLink>{" "} || {" "}
        <NavLink style={activeNavLink} to={'/profile'}>
          Profile
        </NavLink>{" "}
      </nav>
    </div>
  )
}

export default NavBar