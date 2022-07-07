import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";

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
      <header className="Header">
        <nav className="HeaderNav">
          <ul className="HeaderNavList">
            <li className="HeaderNavItem">
              <NavLink to="/">Главная</NavLink>
            </li>
            <li className="HeaderNavItem">
              <NavLink to="/themes">Обзор</NavLink>
            </li>
            <li className="HeaderNavItem">
              <NavLink to="/users">Пользователи</NavLink>
            </li>
            <li className="HeaderNavItem">
              {!session ? (
                <NavLink to="/login">Войти</NavLink>
              ) : (
                <NavLink to="/account">Аккаунт</NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <aside className="Aside">
        <h2>Разделы</h2>
        <nav className="Nav">
          <ul className="NavList">
            <li className="NavItem">
              <a className="NavLink">JavaScript</a>
            </li>
            <li className="NavItem">
              <a className="NavLink">React</a>
            </li>
            <li className="NavItem">
              <a className="NavLink">SQL</a>
            </li>
          </ul>
        </nav>
      </aside>
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
                  <a className="SubnavLink">Новая тема</a>
                </li>
              </ul>
            </nav>
          </header>
          <Outlet session={session} />
        </div>
      </main>
      <footer className="Footer">
        <strong>9 августа 2022</strong>
      </footer>
    </>
  );
};
