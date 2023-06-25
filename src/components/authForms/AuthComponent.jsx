import React, { useState, useEffect } from "react";
import * as Components from "./Components.jsx";
import "./auth.css";
import AnimatedPage from "../AnimatedPage.jsx";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

function AuthPage() {
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phone2, setPhone2] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const [autheticated, setAuthenticated] = useState(false);
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate delay with setTimeout
    setTimeout(async () => {
      setLoading(false);
      let result = await fetch("http://localhost:3004/users/signup", {
        method: "post",
        body: JSON.stringify({ name, phone, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (response) => {
        if (response.status == 200 || response.status == 201) {
          response = await response.json();
          localStorage.setItem("bearerToken", response.token);
          localStorage.setItem("user", JSON.stringify(response));
          localStorage.setItem("isAuthenticated", true);
          toggle(true);
        } else {
          console.log("something went wrong");
        }
      });

      // navigate("/admin/admin/settings");
    }, 2000);
  };

  function checkAuthentication() {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
    checkAuthentication();
  }, []);

  const handleSingIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      const token = localStorage.getItem("bearerToken");
      let result = await fetch("http://localhost:3004/users/login", {
        method: "post",
        body: JSON.stringify({ phone, password }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await result.json();
      localStorage.setItem("beareToken", data.token);
      const user = JSON.parse(localStorage.getItem("user"));
      const userPhone = user.phone;
      setAuthenticated(true);
      if (result.ok) {
        if (userPhone === "0912121212" || userPhone === "0913131313") {
          navigate("/admin/admin/staff");
        } else {
          navigate("/");
        }
      } else {
        console.log(result);
      }
      setName("");
      setPhone("");
      setPassword("");
    }, 2000);
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
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Components.Button onClick={handleSignUp}>
                {loading ? (
                  <SyncLoader color="#f1f1f1" loading={loading} size={10} />
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
                type="text"
                placeholder="Phone"
                value={phone2}
                onChange={(e) => setPhone2(e.target.value)}
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
                {loading ? (
                  <SyncLoader color="#f1f1f1" loading={loading} size={10} />
                ) : (
                  "Sign In"
                )}
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

export default AuthPage;
