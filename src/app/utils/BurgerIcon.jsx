import React from "react";
import PropTypes from "prop-types";

const BurgerIcon = React.forwardRef(({ open, ...props }, ref) => {
  return (
    <div
      className={open ? "burger-menu open" : "burger-menu"}
      {...props}
      ref={ref}
    >
      <div className="bar1" key="b1" />
      <div className="bar2" key="b2" />
      <div className="bar3" key="b3" />
    </div>
  );
});

BurgerIcon.displayName = "BurgerIconApp";

BurgerIcon.propTypes = {
  open: PropTypes.bool
};

export default BurgerIcon;
