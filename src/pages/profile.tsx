import React from "react";

const AccountSettings: React.FC = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const profilePic = 'https://randomuser.me/api/portraits/women/44.jpg';

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", minHeight: "100vh", display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "20px" }}>
        <h2 style={{ fontSize: "20px", color: "#333", marginBottom: "10px", textAlign: "left" }}>Account Settings</h2>
        <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ position: "relative" }}>
              <img
                src={profilePic}
                alt="Profile"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
              <div style={{ position: "absolute", bottom: "-5px", right: "-5px", backgroundColor: "#8e44ad", borderRadius: "50%", width: "25px", height: "25px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <span style={{ color: "#fff", fontSize: "14px" }}>📷</span>
              </div>
            </div>
            <div style={{ marginLeft: "15px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>{user.fullName || 'Mary Doe'}</h3>
              <p style={{ fontSize: "14px", color: "#7f8c8d" }}>{user.email || 'Marry@Gmail.Com'}</p>
            </div>
          </div>
          <p style={{ fontSize: "14px", color: "#7f8c8d", lineHeight: "1.5" }}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
          <hr style={{ border: "0.5px solid #eee", marginTop: "20px" }} />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;