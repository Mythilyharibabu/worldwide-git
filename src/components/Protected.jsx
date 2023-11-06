import React, { useEffect } from "react";
import { useAuth } from "./Context/Authcontext";
import { useNavigate } from "react-router";

export default function Protected({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("inside useeeffct", isAuthenticated);
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);
  console.log("outside useeeffect", isAuthenticated);

  return isAuthenticated ? children : null;
}
