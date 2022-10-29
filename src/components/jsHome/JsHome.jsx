import { Button } from "@mui/material";
import "./JsHome.css";

const JsHome = () => {
  return (
    <div className="jsHome">
      <h1 className="jsHome_h1">Learn Everything About</h1>
      <h2 className="jsHome_h2">JAVASCRIPT</h2>
      <div className="button">
        <Button
          variant="contained"
          color="success"
          style={{ marginTop: "10px" }}
        >
          Explore
        </Button>
      </div>
    </div>
  );
};

export default JsHome;
