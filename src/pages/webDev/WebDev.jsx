import CssHome from "../../components/cssHome/CssHome";
import HtmlHome from "../../components/htmlHome/HtmlHome";
import JsHome from "../../components/jsHome/JsHome";
import WebDevHome from "../../components/webDevHome/WebDevHome";
import "./WebDev.css";

const WebDev = () => {
  return (
    <div>
      <WebDevHome />
      <HtmlHome />
      <CssHome />
      <JsHome />
    </div>
  );
};

export default WebDev;
