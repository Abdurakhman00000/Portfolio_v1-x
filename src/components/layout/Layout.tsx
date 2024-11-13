"use client"

import React, { FC, ReactNode } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Snowfall from "react-snowfall";
import SocialIcons from "../ui/socialIcons/SocialIcons";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
    <Snowfall style={{position: 'fixed'}} snowflakeCount={7}/>
      <div className={scss.Layout}>
        <Header />
        <ToastContainer/>
        <SocialIcons/>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
