import React from "react";
const Header = ({ search }) => {
  return (
    <div className="header">
      <input
        style={{ marginLeft: 15, minWidth: 130, maxWidth: 300 }}
        placeholder="input search text"
        onChange={search}
      />
    </div>
  );
};

export default Header;
