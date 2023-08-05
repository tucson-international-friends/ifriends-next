import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import Button from "../Button";
import Login from "./login";
import Profile from "./profile";
import Signup from "./signup";

import Donate from "./donate";

export const ACTIONS = {
  SIGNUP: "signup",
  READMORE: "readmore",
  LOGIN: "login",
  PROFILE: "profile",
  DONATE: "donate",
};

export const Action = ({ actionParam, defaultValue }) => {
  const router = useRouter();
  const action = useMemo(
    () => ({
      variant: "primary",
      ...defaultValue,
      ...actionParam,
    }),
    [actionParam, defaultValue],
  );

  const { type, label, href } = action;
  const gotoHref = useCallback(() => {
    router.push(href);
  }, [href, router]);
  switch (type) {
    case ACTIONS.SIGNUP:
      return <Signup {...action} />;
    case ACTIONS.LOGIN:
      return <Login label={label} />;
    case ACTIONS.PROFILE:
      return <Profile />;
    case ACTIONS.DONATE:
      return <Donate />;
    case ACTIONS.READMORE:
    default:
      return <Button {...action} onClick={gotoHref} />;
  }
};

export const renderActions = (actions, defaultValue) =>
  actions.map((action, i) => (
    <Action key={i} actionParam={action} defaultValue={defaultValue} />
  ));
