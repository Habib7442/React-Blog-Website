import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <div data-aos="flip-left">
        <img src={props.img} alt="" className="postImg" />
      </div>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{props.genre}</span>
          {/* <span className="postCat">Life</span> */}
        </div>
        <span className="postTitle">{props.blog}</span>
        <hr />
        <Link
          className="link"
          to={{
            pathname: `webdev`,
          }}
        >
          <Button variant="contained" color="success">
            Read Full Blog
          </Button>
        </Link>
      </div>
      <p className="postDesc"></p>
    </div>
  );
};

export default Post;
