import { Redirect } from "react-router";
import Home from ".";
import authRoles from "../../config/authRoles";
const HomeRoutes = {
  auth: authRoles.guest,
  routes: [
    {
      path: "/home",
      component: Home,
      exact: true,
    },
    {
      path: "/",
      component: () => <Redirect to="/home" />,
      exact: true,
    },
  ],
};
export default HomeRoutes;
