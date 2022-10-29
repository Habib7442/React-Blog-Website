import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import "./CssContent.css";

const CssContent = () => {
  const [css, setCss] = useState([]);

  useEffect(() => {
    const getCss = onSnapshot(
      collection(db, "cssContent"),
      (snapshot) => {
        setCss(snapshot.docs.map((doc) => doc.data()));
        return getCss;
      },
      []
    );
  }, []);
  return (
    <>
      {css.map((cssContent) => {
        const { title, content, cssstructure } = cssContent;
        return (
          <div className="cssContent" key={uuid()}>
            <h1>{title}</h1>
            <p>{content}</p>
            <img src={cssstructure} className="css_structure" alt="" />
            <label>Fig 1 - Structure of CSS</label>
          </div>
        );
      })}
    </>
  );
};

export default CssContent;
