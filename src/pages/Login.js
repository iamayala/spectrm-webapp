import React, { useState, useEffect } from "react";
import styles from "../assets/styles/index.module.css";
import "boxicons";
import { colors } from "../services/constants/colors";
import { Spinner } from "react-activity";

function Login() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.loginView}>
        {loading ? (
          <>
            <Spinner color="#727981" size={32} speed={1} animating={true} />
            <h1 style={{ color: colors.white }}>Hello</h1>
          </>
        ) : (
          <>
            <h2 className={styles.title}>Sign in to Spectrm</h2>
            <button className={styles.button}>Sign in with Google</button>
            <button className={styles.button}>Sign in with Apple</button>
            <span style={{ color: colors.white, marginBottom: 10 }}>OR</span>
            <input placeholder="Phone, email or username" className={styles.loginInput} />
            <button className={styles.button}>Login</button>
            <button className={styles.buttonTransparent}>Forgot Password?</button>
            <p style={{ color: colors.white }}>
              Don&apos;t have an account? <span style={{ color: colors.primary }}>Signup</span>{" "}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
