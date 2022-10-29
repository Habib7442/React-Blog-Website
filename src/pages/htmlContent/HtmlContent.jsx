import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import "./HtmlContent.css";

const HtmlContent = () => {
  const [html, setHtml] = useState([]);

  useEffect(() => {
    const getHtml = onSnapshot(
      collection(db, "htmlContent"),
      (snapshot) => {
        setHtml(snapshot.docs.map((doc) => doc.data()));
        return getHtml;
      },
      []
    );
  }, []);
  return (
    <>
      {html.map((htmlContent) => {
        const { title, content, htmlstructure } = htmlContent;
        return (
          <div className="container-fluid htmlContent" key={uuid()}>
            <h1>{title}</h1>
            <p>{content}</p>
            <img src={htmlstructure} alt="" />
            <label>Fig 1 - Structure of HTML</label>
          </div>
        );
      })}
    </>
  );
};

export default HtmlContent;
