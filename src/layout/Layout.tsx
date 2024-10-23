import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar/SideBar";

const Layout = () => {
  return (
    <div className="flex items-start w-full">
      <SideBar />
      <main className="w-[85%] bg-red-600">
        <Header />
        <div className="w-full h-screen p-[20px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
