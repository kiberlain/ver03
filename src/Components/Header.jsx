import { Link } from "@tanstack/react-location";

export const Header = () =>
{
    return (
        <header className="Header">
            <nav className="HeaderNav">
                <ul className="HeaderNavList">
                    <li className="HeaderNavItem">
                        <Link to="/">Главная</Link>
                    </li>
                    <li className="HeaderNavItem">
                        <Link to="/themes">Обзор</Link>
                    </li>
                    <li className="HeaderNavItem">
                        <Link to="/themes">Новости</Link>
                    </li>
                    <li className="HeaderNavItem">
                        <Link to="/themes">Войти</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}
