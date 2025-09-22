import React from "react";
import { Navigate, useLocation} from "react-router-dom";

export default function PrivateRoute({ element }) {
    const location = useLocation()
  let user_data = JSON.parse(localStorage.getItem("user_data"));

  if (user_data?.access) {
    return element;
  } else {
    return <Navigate to={`/auth/login?next=${encodeURIComponent(location.pathname)}`} replace />; 
  }
}
