import Contact from "../contact/Contact";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">JOIN US</span>
        <img className="sidebarImg"
          src={require("../../assets/contact.jpg")}
          alt=""
        />
      </div>
      <div className="sidebarItem">
        <Contact className="sidebar-contact" />
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-solid fa-envelope"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
