import "./SinglePost.css";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";



const SinglePost = (props) => {
  const [singleblogs, setSingleBlogs] = useState([]);
  console.log(singleblogs)

  useEffect(() => {
    const getBlogs = onSnapshot(
      collection(db, "singleBlogs"),
      (snapshot) => {
        setSingleBlogs(snapshot.docs.map((doc) => doc.data()));
        return getBlogs;
      },
      []
    );
  }, []);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="singlePostImg"
        />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b></b>
          </span>
          <span className="singlePostDate">2 hour ago</span>
        </div>
        <p className="singlePostDesc">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
