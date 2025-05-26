import React from "react";

import addReactNDevTools from "reactn-devtools";
import Meta from "../components/meta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import navItems from "./navbarItems.json";
import footerNavItems from "./footerMenuItems.json";
import { getPageByName } from "../lib/page";

import { ACTIONS } from "../components/Action";

addReactNDevTools();

const MainLayout = ({ children }) => {
  return (
    <>
      <Meta />
      <noscript>
        <iframe
          title="google-tag-manager"
          src="https://www.googletagmanager.com/ns.html?id=GTM-WM8XF8R"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Navbar
        navItems={navItems.map((value) => getPageByName(value))}
        navActions={[
          // { type: ACTIONS.LOGIN },
          { type: ACTIONS.SIGNUP },
        ]}
      />
      <div className="page">{children}</div>
      <Footer menuItems={footerNavItems.map((value) => getPageByName(value))} />
    </>
  );
};
export default MainLayout;
