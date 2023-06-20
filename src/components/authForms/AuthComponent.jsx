import React, { useState } from "react";
import * as Components from "./Components.jsx";
import "./auth.css";
import AnimatedPage from "../AnimatedPage.jsx";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

export default function AuthPage() {
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate delay with setTimeout
    setTimeout(() => {
      setLoading(false);
      // toggle(true);
      navigate("/admin/admin/settings");
    }, 2000);
  };

  const handleSingIn = (e) => {
    e.preventDefault();
    console.warn(email, password);
  };

  return (
    <AnimatedPage>
      <div className="main-container">
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Create Account</Components.Title>
              <Components.Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Components.Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Components.Button onClick={handleSignUp}>
                {loading ? (
                  <SyncLoader color="#00a967" loading={loading} size={10} />
                ) : (
                  "Sign Up"
                )}
              </Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Sign in</Components.Title>
              <Components.Input
                type="email"
                placeholder="Email"
                value={email2}
                onChange={(e) => setEmail2(e.target.value)}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button onClick={handleSingIn}>
                Sigin In
              </Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>
              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hello, There!</Components.Title>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sigin Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>
    </AnimatedPage>
  );
}
