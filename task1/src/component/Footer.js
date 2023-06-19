import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        textAlign: "center",

        marginTop: "auto",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Counter-Registration. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
