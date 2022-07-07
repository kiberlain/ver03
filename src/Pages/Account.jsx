import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import Avatar from "../Components/Avatar";

const Account = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [info, setInfo] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, info, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setInfo(data.info);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        info,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal",
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="Account" aria-live="polite">
      {loading ? (
        "Сохранение ..."
      ) : (
        <form onSubmit={updateProfile} className="form-widget">
          <Avatar
            url={avatar_url}
            size={150}
            onUpload={(url) => {
              setAvatarUrl(url);
              updateProfile({ username, info, avatar_url: url });
            }}
          />
          <div>Email: {session.user.email}</div>
          <div>
            <label htmlFor="username">Никнейм</label>
            <input
              id="username"
              type="text"
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="info">Коротко обо мне</label>
            <input
              id="info"
              type="text"
              value={info || ""}
              onChange={(e) => setInfo(e.target.value)}
            />
          </div>
          <div>
            <button disabled={loading}>Сохранить</button>
          </div>
        </form>
      )}
      <Link to="/" onClick={() => supabase.auth.signOut()}>
        Выйти
      </Link>
    </section>
  );
};

export default Account;
