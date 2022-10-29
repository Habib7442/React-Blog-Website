import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import "./JavaScriptContent.css";

const JavaScriptContent = () => {
  const [javaScript, setJavaScript] = useState([]);

  useEffect(() => {
    const getJs = onSnapshot(
      collection(db, "javaScriptContent"),
      (snapshot) => {
        setJavaScript(snapshot.docs.map((doc) => doc.data()));
        return getJs;
      },
      []
    );
  }, []);
  return (
    <>
      {javaScript.map((javaScriptContent) => {
        const { title, content, jsstructure } = javaScriptContent;
        return (
          <div className="container-fluid jsContent" key={uuid()}>
            <h1>{title}</h1>
            <p>{content}</p>
            <img src={jsstructure} className="js_structure" alt="" />
            <label>Fig 1 - Structure of JAVASCRIPT</label>
          </div>
        );
      })}
    </>
  );
};

export default JavaScriptContent;
