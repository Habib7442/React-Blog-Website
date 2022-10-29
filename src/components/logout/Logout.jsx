import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const Dashboard = () => {
  const [error, setError] = useState(``);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError(``);
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <Button onClick={handleLogOut} variant="outlined" color="error" style={{marginLeft: "10px"}}>Sign out</Button>
    </>
  );
};

export default Dashboard;
