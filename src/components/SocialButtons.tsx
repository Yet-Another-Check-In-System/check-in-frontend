import React from "react";
import msLogo from "./assets/microsoft-logo.svg";
import {
  AppleLoginButton,
  GoogleLoginButton,
  MicrosoftLoginButton,
  createSvgIcon,
} from "react-social-login-buttons";

const SocialButtons = () => {
  const msIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
      >
        <title>MS-SymbolLockup</title>
        <rect x="1" y="1" width="9" height="9" fill="#f25022" />
        <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
        <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
        <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
      </svg>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center p-2">
      <AppleLoginButton
        align="center"
        style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
        activeStyle={{ backgroundColor: "#3333331c" }}
      />
      <GoogleLoginButton
        align="center"
        style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
        activeStyle={{ backgroundColor: "#3333331c" }}
      />
      <MicrosoftLoginButton
        align="center"
        icon={createSvgIcon(msIcon)}
        style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
        activeStyle={{ backgroundColor: "#3333331c" }}
      />
    </div>
  );
};

export default SocialButtons;
