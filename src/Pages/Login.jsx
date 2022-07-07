import { useState } from "react";
import { supabase } from "../client";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert(
        "Проверьте свою электронную почту на наличие ссылки для входа в систему!"
      );
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div aria-live="polite">
      <p>Войдите по волшебной ссылке, указав свой email ниже</p>
      {loading ? (
        "Отправка волшебной ссылки..."
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button aria-live="polite">Отправить</button>
        </form>
      )}
    </div>
  );
}
