import React, { useState} from "react";
import {Link} from 'react-router-dom';
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import MainHeader from "./MainHeader";

import "./MainNavigation.css";

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerisOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerisOpen(true);
    };

    const closeDrawerHandler = () => {
         setDrawerisOpen(false);
    };

  return (
      <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drwer-nav">
              <NavLinks>

              </NavLinks>
          </nav>
      </SideDrawer>
    <MainHeader className="main-navigation__menu-btn">
      <button onClick={openDrawerHandler}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="main-navigation__title">
          <Link to="/">Your Places
          </Link></h1>
      <nav className="main-navigation__header-nav">
          <NavLinks />
      </nav>
    </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
