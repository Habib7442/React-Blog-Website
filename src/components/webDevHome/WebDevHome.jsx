import { Button } from "@mui/material";
import "./WebDevHome.css";

const WebDevHome = () => {
  return (
    <div className="webDev">
      <div className="left">
        <h1 className="webDev_h1">Welcome to the World of</h1>
        <h2 className="webDev_h2">WEB DEVELOPMENT</h2>
        <div className="button">
        <Button variant="contained" color="secondary" style={{marginTop: "10px"}}>Explore</Button>
        </div>
      </div>
      <div className="right">
        <img src={require("../../assets/web.png")} className="webImg" alt="" />
      </div>
    </div>
  );
};

export default WebDevHome;
