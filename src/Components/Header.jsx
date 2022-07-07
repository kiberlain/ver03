import { NavLink } from "react-router-dom";

export const Header = ({ session }) => {
  return (
    <>
      <header className="Header">
        <nav className="Nav">
          <ul className="NavList">
            <li className="NavItem">
              <NavLink to="/">Главная</NavLink>
            </li>
            <li className="NavItem">
              <NavLink to="/themes">Обзор</NavLink>
            </li>
            <li className="NavItem">
              <NavLink to="/users">Пользователи</NavLink>
            </li>
            <li className="NavItem">
              {!session ? (
                <NavLink to="/login">Войти</NavLink>
              ) : (
                <NavLink to="/account">Аккаунт</NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
