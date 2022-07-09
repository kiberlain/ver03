import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { supabase } from "./client";
import { Layout } from "./Components/Layout";

import { Home } from "./Pages/Home";
import Auth from "./Pages/Login";
import Account from "./Pages/Account";
import { Themes } from "./Pages/Themes";
import { Users } from "./Pages/Users";
import { CreateTheme } from "./Pages/CreateTheme";

import { FolderContext } from "./Contexts/FolderContext";

import testData from "./testdata";

export default function App() {
  const [session, setSession] = useState(null);

  const [currentFolder, setCurrentFolder] = useState("");

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const filterByFolder = (arr, input) => {
    return arr.filter((o) => Object.values(o).includes(input));
  };

  return (
    <div className="App">
      <FolderContext.Provider value={{ currentFolder, setCurrentFolder }}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home themes={testData} />} />
            <Route path="new_theme" element={<CreateTheme />} />
            <Route path="login" element={<Auth />} />
            <Route path="account" element={<Account session={session} />} />
            <Route path="themes" element={<Themes testData={testData} />} />
            <Route
              path="themes/:title"
              element={
                <Themes testData={filterByFolder(testData, currentFolder)} />
              }
            />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<p>Упс! 404...</p>} />
          </Route>
        </Routes>
      </FolderContext.Provider>
    </div>
  );
}
