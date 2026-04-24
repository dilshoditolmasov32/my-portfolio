import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Loading from "./components/loading";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <Header />
      <main className="main-page">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;


