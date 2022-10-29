import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../posts/Posts";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* <Search /> */}
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
