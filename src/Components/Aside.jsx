import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import testData from "../testdata";

export const Aside = () => {
  const [menuSections, setMenuSections] = useState();

  const pluck = (objs, property) => objs.map((obj) => obj[property]);
  const makeUniq = (arr) => [...new Set(arr)];

  useEffect(() => {
    setMenuSections(makeUniq(pluck(testData, "folder")).sort());
  }, []);

  return (
    <>
      <aside className="Aside">
        <h2>Разделы</h2>
        <nav className="Nav">
          <ul className="NavList">
            {menuSections?.map((item) => (
              <li className="NavItem" key={item}>
                <NavLink className="NavLink" to="/">
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
