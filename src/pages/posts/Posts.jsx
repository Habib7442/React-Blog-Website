import { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { v4 as uuid } from "uuid";
import "./Posts.css";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        setBlogs(snapshot.docs.map((doc) => doc.data()));
        return getBlogs;
      },
      []
    );
  }, []);
  return (
    <div className="posts">
      {blogs.map((blog) => (
        <Post
          key={uuid()}
          blog={blog.title}
          img={blog.img}
          genre={blog.genre}
        />
      ))}
    </div>
  );
};

export default Posts;
