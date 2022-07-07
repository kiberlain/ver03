import { NavLink } from "react-router-dom";

export const Aside = ({ testData }) => {
  return (
    <>
      <aside className="Aside">
        <h2>Разделы</h2>
        <nav className="Nav">
          <ul className="NavList">
            <li className="NavItem">
              <NavLink className="NavLink" to="/">
                JavaScript
              </NavLink>
            </li>
            <li className="NavItem">
              <NavLink className="NavLink" to="/">
                React
              </NavLink>
            </li>
            <li className="NavItem">
              <NavLink className="NavLink" to="/">
                SQL
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};
