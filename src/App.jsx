import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./client";
import { Layout } from "./Components/Layout";

import { Home } from "./Pages/Home";
import Auth from "./Pages/Login";
import Account from "./Pages/Account";
import { Themes } from "./Pages/Themes";
import { Users } from "./Pages/Users";
import { CreateTheme } from "./Pages/CreateTheme";

export default function App() {
  const [session, setSession] = useState(null);
  const [themes, setThemes] = useState([]);
  const [post, SetPost] = useState({
    id: "",
    created_at: "",
    folder: "",
    title: "",
    description: "",
    content: "",
    user_id: "",
  });

  const { id, created_at, folder, title, description, content, user_id } = post;

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    fetchThemes();
  }, []);

  async function fetchThemes() {
    const { data } = await supabase.from("themes").select();
    setThemes(data);
  }

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home themes={themes} />} />
          <Route path="new_theme" element={<CreateTheme session={session} />} />
          <Route path="login" element={<Auth />} />
          <Route path="account" element={<Account session={session} />} />
          <Route path="themes" element={<Themes />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<p>Упс! 404...</p>} />
        </Route>
      </Routes>
    </div>
  );
}
