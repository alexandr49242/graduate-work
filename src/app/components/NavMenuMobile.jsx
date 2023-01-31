import React from "react";
import PropTypes from "prop-types";

const NavMenuMobile = ({ close }) => {
  return (
    <div className="menu">
      <ul>
        <li onClick={close}>Home</li>
        <li onClick={close}>Getting Started</li>
        <li onClick={close}>Component API</li>
        <li onClick={close}>Use Case - Tooltip</li>
        <li onClick={close}>Use Case - Modal</li>
        <li onClick={close}>Use Case - Menu</li>
        <li onClick={close}>Contributing</li>
      </ul>
    </div>
  );
};

NavMenuMobile.propTypes = {
  close: PropTypes.func
};

export default NavMenuMobile;
