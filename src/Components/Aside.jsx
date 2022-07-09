import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import testData from "../testdata";

import { FolderContext } from "../Contexts/FolderContext";

export const Aside = () => {
  const [menuSections, setMenuSections] = useState();

  const pluck = (objs, property) => objs.map((obj) => obj[property]);
  const makeUniq = (arr) => [...new Set(arr)];
  const { currentFolder, setCurrentFolder } = useContext(FolderContext);

  function changeFolder(event) {
    setCurrentFolder(event.target.innerText);
  }

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
                <Link
                  className="NavLink"
                  to={`/themes/${item.toLowerCase().replace(/ /gi, "_")}`}
                  onClick={changeFolder}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
