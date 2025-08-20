import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", minHeight: "100vh", display: "flex", justifyContent: "flex-end", flexDirection: "column" }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "20px", textAlign: "center" }}>
        {/* <div style={{ fontSize: "24px", color: "#f1c40f", width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#f39c12", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto 20px" }}>1</div> */}
        
        <div className="content">
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "10px", textAlign: "left" }}>Welcome to PopX</h2>
          <p style={{ fontSize: "14px", color: "#7f8c8d", marginBottom: "20px", textAlign: "left" }}>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,</p>

          <button
            style={{ width: "100%", padding: "12px", backgroundColor: "#6a0dad", color: "#fff", border: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer", marginBottom: "10px" }}
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
          <button
            style={{ width: "100%", padding: "12px", backgroundColor: "#e6d6fa", color: "#333", border: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer", marginBottom: "100px" }}
            onClick={() => navigate("/signin")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;