import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const payload = {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      company: formData.company,
      haveCompany: formData.isAgency === "yes",
    };

    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/");
      } else {
        setError(data.msg || "Signup failed");
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", minHeight: "100vh", display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "20px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "20px", textAlign: "left" }}>
          Create your <br /> PopX account
        </h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {/* Full Name */}
          <div style={{ position: "relative" }}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
            />
            <label style={{ position: "absolute", top: "-10px", left: "10px", backgroundColor: "#fff", padding: "0 5px", color: "#6a0dad", fontSize: "14px" }}>Full Name<span style={{ color: "#e74c3c" }}>*</span></label>
          </div>

          {/* Phone Number */}
          <div style={{ position: "relative" }}>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
            />
            <label style={{ position: "absolute", top: "-10px", left: "10px", backgroundColor: "#fff", padding: "0 5px", color: "#6a0dad", fontSize: "14px" }}>Phone number<span style={{ color: "#e74c3c" }}>*</span></label>
          </div>

          {/* Email */}
          <div style={{ position: "relative" }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
            />
            <label style={{ position: "absolute", top: "-10px", left: "10px", backgroundColor: "#fff", padding: "0 5px", color: "#6a0dad", fontSize: "14px" }}>Email address<span style={{ color: "#e74c3c" }}>*</span></label>
          </div>

          {/* Password */}
          <div style={{ position: "relative" }}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
            />
            <label style={{ position: "absolute", top: "-10px", left: "10px", backgroundColor: "#fff", padding: "0 5px", color: "#6a0dad", fontSize: "14px" }}>Password<span style={{ color: "#e74c3c" }}>*</span></label>
          </div>

          {/* Company */}
          <div style={{ position: "relative" }}>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
            />
            <label style={{ position: "absolute", top: "-10px", left: "10px", backgroundColor: "#fff", padding: "0 5px", color: "#6a0dad", fontSize: "14px" }}>Company name</label>
          </div>

          {/* Agency */}
          <div style={{ marginBottom: "20px" }}>
            <p style={{ color: "#333", fontSize: "16px", marginBottom: "5px" }}>
              Are you an Agency?<span style={{ color: "#e74c3c" }}>*</span>
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                  style={{ marginRight: "5px" }}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                  style={{ marginRight: "5px" }}
                />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            style={{ width: "112%", padding: "12px", backgroundColor: "#6a0dad", color: "#fff", border: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer" }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;