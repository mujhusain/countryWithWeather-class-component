import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const WithRouting = (OriginalComponent) => {
  const NewComponent = () => {
    const navigate= useNavigate();
    const location = useLocation();
    return <OriginalComponent navigate={navigate} location={location} />;
  };
  return NewComponent;
};

export default WithRouting;
