import { Link } from "@tanstack/react-location";

export const Navigation = () =>
{
    return (
        <nav className="Navigation">
            <ul className="NavigationList">
                <li className="NavigationItem">
                    <Link>JavaScript</Link>
                </li>
                <li className="NavigationItem">
                    <Link>React</Link>
                </li>
                <li className="NavigationItem">
                    <Link>React Query</Link>
                </li>
                <li className="NavigationItem">
                    <Link>React Hooks</Link>
                </li>
                <li className="NavigationItem">
                    <Link>Алгоритмы</Link>
                </li>
            </ul>
        </nav>
    );
}
