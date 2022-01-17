import React from "react";

const Footer = () => {
  const today = new Date();
  return <div className="footer">Copyright &copy;{today.getFullYear()}</div>;
};

export default Footer;
