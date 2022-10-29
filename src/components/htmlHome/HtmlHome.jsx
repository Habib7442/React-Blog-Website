import { Button } from "@mui/material"
import "./HtmlHome.css"

const HtmlHome = () => {
  return (
    <div className='htmlHome'>
      <h1 className="htmlHome_h1">Learn Everything About</h1>
      <h2 className="htmlHome_h2">HTML</h2>
      <div className="button">
      <Button variant="contained" color="success" style={{marginTop: "10px"}}>Explore</Button>

      </div>
    </div>
  )
}

export default HtmlHome