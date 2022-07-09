import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import { Header } from "./Header";
import { Aside } from "./Aside";

export const Layout = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <Header session={session} />
      <Aside />

      <main className="Main Flex Flow">
        <div className="Wrapper">
          <header className="Flex">
            <h1 className="MainTitle">Задачи</h1>
            <nav className="Subnav">
              <ul className="SubnavList reset-list Flex">
                <li className="SubnavItem">
                  <a className="SubnavLink">Избранное</a>
                </li>
                <li className="SubnavItem">
                  <a className="NavLink">Завершённые</a>
                </li>
                <li className="SubnavItem">
                  <NavLink to="/new_theme" className="SubnavLink">
                    Новая тема
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Outlet />
        </div>
      </main>
      <footer className="Footer">
        <strong>9 августа 2022</strong>
      </footer>
    </>
  );
};
