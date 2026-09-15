import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>{isLogin ? "Login" : "Register"}</h1>
        <p>Welcome back! Please login to your account.</p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
  <div className="input-group">
    <label>Name</label>
    <input
      type="text"
      placeholder="Enter your name"
    />
  </div>
)}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signup">
  {isLogin ? "Don't have an account? " : "Already have an account? "}

  <span
    onClick={() => setIsLogin(!isLogin)}
    style={{ color: "blue", cursor: "pointer" }}
  >
    {isLogin ? "Sign Up" : "Login"}
  </span>
</p>
      </div>
    </div>
  );
}

export default App;