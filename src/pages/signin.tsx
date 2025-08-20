import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save user details in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect after signin
        navigate("/profile"); 
      } else {
        setError(data.msg || "Signin failed");
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "100%", maxWidth: "400px", padding: "20px" }}>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "10px",
            textAlign: "left",
          }}
        >
          Signin to your <br /> PopX account
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#7f8c8d",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>

        {error && <p style={{ color: "#e74c3c", marginBottom: "15px" }}>{error}</p>}

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <div style={{ position: "relative" }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
            <label
              style={{
                position: "absolute",
                top: "-10px",
                left: "10px",
                backgroundColor: "#fff",
                padding: "0 5px",
                color: "#6a0dad",
                fontSize: "14px",
              }}
            >
              Email Address
            </label>
          </div>

          <div style={{ position: "relative" }}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
            <label
              style={{
                position: "absolute",
                top: "-10px",
                left: "10px",
                backgroundColor: "#fff",
                padding: "0 5px",
                color: "#6a0dad",
                fontSize: "14px",
              }}
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            style={{
              width: "112%",
              padding: "12px",
              backgroundColor: "#6a0dad",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
