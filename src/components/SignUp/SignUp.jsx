import React, { useState } from 'react';
// import './SignUp.css'; // Uncomment when you have the CSS

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'profileImage') {
      setFormData({ ...formData, profileImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });

      // If the field being changed is "confirmPassword", check password match
      if (name === 'confirmPassword' || name === 'password') {
        setPasswordMatch(
          name === 'password'
            ? value === formData.confirmPassword
            : formData.password === value
        );
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordMatch) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Form submitted:', formData);
    // You can add your signup logic here
  };

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form" onSubmit={handleSubmit}>
          <input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {!passwordMatch && (
            <p style={{ color: "red" }}>Passwords are not matched!</p>
          )}

          <input
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={!passwordMatch}>
            REGISTER
          </button>
        </form>
        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
  );
}

export default SignUp;
