import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation, API call, or any other logic here
    console.log("Name:", name);
    console.log("Contact Number:", contactNumber);
    console.log("OTP:", otp);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "150px" }}>
      <h1>Registration</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          margin: "auto",
        }}
      >
        <label htmlFor="name" style={{ marginBottom: "5px" }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "8px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
        <label htmlFor="contactNumber" style={{ marginBottom: "5px" }}>
          Contact Number:
        </label>
        <input
          type="tel"
          id="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
          style={{
            padding: "8px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
        <label htmlFor="otp" style={{ marginBottom: "5px" }}>
          OTP:
        </label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          style={{
            padding: "8px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
