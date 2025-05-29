import Header from "./components/header";
import Sidebar from "./components/sidebar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="header-page">
        <Header />
      </div>

      <main className="main-page">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
