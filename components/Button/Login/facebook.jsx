import { Button } from "react-bootstrap";
import { useCallback } from "react";
import { FaFacebookF } from "react-icons/fa";
import firebase, { facebookProvider } from "../../../lib/firebase";

const FacebookLoginButton = ({ handleSuccess, handleError }) => {
  const handleLogin = useCallback(() => {
    facebookProvider.setCustomParameters({ display: "popup" });
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(handleSuccess)
      .catch(handleError);
  }, [handleSuccess, handleError]);
  return (
    <Button
      block
      variant="primary"
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
      <FaFacebookF
        style={{
          width: 16,
          height: 16,
          margin: "10 8",
        }}
        color="white"
      />
      <span style={{ flexGrow: 1 }}>Sign in with Facebook</span>
    </Button>
  );
};

export default FacebookLoginButton;
