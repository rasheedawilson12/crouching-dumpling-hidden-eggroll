import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import Logo from "../../components/Logo/Logo"
import style from "./AuthPage.module.css";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className={style.AuthPage}>
      <div>
        <Logo />
        <button
          onClick={() => {
            setShowLogin(!showLogin);
          }}
        >
          {showLogin ? "Sign up" : "Login"}
        </button>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
