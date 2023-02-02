import React from "react";
// import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
// import BurgerIcon from "../utils/BurgerIcon";
// import NavMenuMobile from "./NavMenuMobile";
import logo from "../../img/logo.svg";
import search from "../../img/search.svg";
import heart from "../../img/heart.svg";
import cart from "../../img/cart.svg";
import account from "../../img/account.svg";
import bgNavBar from "../../img/bgNavBar.png";

const NavBar = () => {
  // const styles = {
  //   fontFamily: "sans-serif",
  //   textAlign: "center",
  //   marginTop: "40px"
  // };
  // const contentStyle = {
  //   background: "rgba(255,255,255,0",
  //   width: "80%",
  //   border: "none"
  // };
  return (
    <header>
      <img src={bgNavBar} alt="bgNavBar" className="absolute -z-10 h-[129px]" />
      <div className="container pb-2 lg:px-4">
        <nav className="flex justify-between items-center pt-4 ">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="flex gap-8 lg:gap-4 md:hidden">
            <li>
              <Link to="/" className="text-white text-xs hover:font-semibold">
                ГЛАВНАЯ
              </Link>
            </li>
            <li>
              <Link
                to="/bicycles"
                className="text-white text-xs hover:font-semibold"
              >
                ВЕЛОСИПЕДЫ
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white text-xs hover:font-semibold">
                АКСЕССУАРЫ
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="text-white text-xs hover:font-semibold"
              >
                SPECIALIZED КАРЬЕРА
              </Link>
            </li>
            <li>
              <Link to="#" className="text-white text-xs hover:font-semibold">
                О КОМПАНИИ
              </Link>
            </li>
          </ul>
          <div className="flex gap-4">
            <img
              src={search}
              alt="search"
              className="w-[30px] h-8 border-2 border-white rounded-full p-[6px]"
            />
            <img
              src={heart}
              alt="heart"
              className="w-[31px] h-8 border-2 border-white rounded-full p-[7px]"
            />
            <img
              src={cart}
              alt="cart"
              className="w-[30px] h-8 border-2 border-white rounded-full p-[6px]"
            />
            <img
              src={account}
              alt="account"
              className="bg-white rounded-full p-1 w-[30px] h-8"
            />
            {/* <img
              src={burgermenu}
              alt="burgermenu"
              className="hidden w-[30px] md:block"
            /> */}
          </div>
          {/* <div style={styles}>
            https://react-popup.elazizi.com/
            <Popup
              modal
              overlayStyle={{ background: "rgba(255,255,255,0.98" }}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              trigger={(open) => <BurgerIcon open={open} />}
            >
              {(close) => <NavMenuMobile close={close} />}
            </Popup>
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
