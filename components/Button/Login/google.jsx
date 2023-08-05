import { Button } from "react-bootstrap";
import { useCallback } from "react";
import firebase, { googleProvider } from "../../../lib/firebase";
import Image from "next/image";

const GoogleLoginButton = ({ handleLogin }) => (
  <Button
    block
    variant="light"
    size="sm"
    style={{
      textAlign: "right",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      textTransform: "none",
    }}
    onClick={() => handleLogin()}
  >
    <Image
      style={{
        width: 36,
        height: 36,
      }}
      src="icons/btn_google_light_normal_ios.svg"
      alt="google-logo"
    />
    <span style={{ flexGrow: 1 }}>Sign in with Google</span>
  </Button>
);

export default GoogleLoginButton;
