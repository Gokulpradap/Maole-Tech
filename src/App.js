import React, { useState } from "react";
import "./style.css";
import { FaLinkedinIn, FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import img from "./assets/1.png";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    const nameError = (name.length < 4 || name.length > 20) ? "Name should be between 4 and 20 characters" : "";
    const emailError = !email.match(/^\S+@\S+\.\S+$/) ? "Invalid email address" : "";
    const passwordError = !password.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) ? "Password should have at least one G, one 2, and one @$#%" : "";

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
    });

    if (nameError || emailError || passwordError) {
      console.log("Invalid input. Please check your data.");
      return;
    }
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="App">
      <div className="layout">
        <div className="welcome">
          <img src={img} alt="" />
          <div className="center">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button>SIGN IN</button>
          </div>
        </div>
        <div className="account">
          <h1>Create Account</h1>
          <div className="social">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaGooglePlusG />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
          <p>or use your email for registration</p>
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
