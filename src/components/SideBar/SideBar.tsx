import { routes } from "../../router/routes";
import { RoutesI } from "../../router/route";
import SidBarItem from "./SidBarItem";
import SideBraIcon from "./SideBraIcon";
import Logout from "../Logout";

const SideBar = () => {
  return (
    <aside className="sidebar h-screen w-[18%]">
      <SideBraIcon />
      <div className="px-[30px] h-[80vh]  overflow-y-scroll">
        {routes?.map((route: RoutesI) => {
          return <SidBarItem {...route} key={route?.id} />;
        })}
        <Logout />
      </div>
    </aside>
  );
};

export default SideBar;
