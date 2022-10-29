import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainHome from "./pages/mainHome/MainHome";
import WebDev from "./pages/webDev/WebDev";
import CodeEditor from "./components/codeEditor/CodeEditor";
import HtmlContent from "./pages/htmlContent/HtmlContent";
import CssContent from "./pages/cssContent/CssContent";
import JavaScriptContent from "./pages/javaScriptContent/JavaScriptContent";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Contact from "./components/contact/Contact";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

// const user = true;

const router = createBrowserRouter([
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainHome />,
      },
      {
        path: "/webdev",
        element: <WebDev />,
      },
      {
        path: `/webdev/htmlContent`,
        element: <HtmlContent />,
      },
      {
        path: `/webdev/cssContent`,
        element: <CssContent />,
      },
      {
        path: `/webdev/jsContent`,
        element: <JavaScriptContent />,
      },
      {
        path: "/editor",
        element: <CodeEditor />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      // {
      //   path: "/register",
      //   element: user ? <Home /> : <Register />,
      // },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
