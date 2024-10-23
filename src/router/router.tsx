import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RoutesI } from "./route";
import { routes } from "./routes";
import Layout from "../layout/Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {routes?.map((el: RoutesI) => {
        const Element = el?.element;
        if (el?.children) {
          return (
            <Route key={el?.path} path={el?.path} element={<Element />}>
              {el?.children?.map((child) => {
                const ChildElemnt = child?.element;
                return (
                  <Route
                    key={child?.path}
                    path={child?.path}
                    element={<ChildElemnt />}
                  />
                );
              })}
            </Route>
          );
        }
        return <Route key={el?.path} path={el?.path} element={<Element />} />;
      })}
    </Route>
  )
);
