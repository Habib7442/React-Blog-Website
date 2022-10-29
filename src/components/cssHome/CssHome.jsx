import { Button } from "@mui/material"
import "./CssHome.css"

const CssHome = () => {
  return (
    <div className='cssHome'>
      <h1 className="cssHome_h1">Learn Everything About</h1>
      <h2 className="cssHome_h2">CSS</h2>
      <div className="button">
      <Button variant="contained" color="success" style={{marginTop: "10px"}}>Explore</Button>

      </div>
    </div>
  )
}

export default CssHome