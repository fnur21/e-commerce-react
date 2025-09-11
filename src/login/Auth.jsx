import { useState } from "react";
import "./Auth.css"; // CSS burada

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-left">
          <h2>{isLogin ? "GİRİŞ YAP" : "KAYIT OL"}</h2>
          <form>
            <div className="input-box">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Kullanıcı Adı" required />
            </div>
            <div className="input-box">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Şifre" required />
            </div>
            {!isLogin && (
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" required />
              </div>
            )}
            <button type="submit" className="btn">
              {isLogin ? "GİRİŞ YAP" : "KAYIT OL"}
            </button>
          </form>
          <div className="social-login">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <p className="toggle-text">
            {isLogin ? "Hesabın yok mu?" : "Zaten hesabın var mı?"}{" "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Kayıt Ol" : "Giriş Yap"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
