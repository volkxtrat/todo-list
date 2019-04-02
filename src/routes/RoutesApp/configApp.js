import routes from "../routes";
import Projects from "../../components/Pages/Projects/Projects";
import Project from "../../components/Pages/Project/Project";

export default [
  {
    path: routes.inbox,
    component: Projects
  },
  {
    path: routes.today,
    component: Projects
  },
  {
    path: routes.week,
    component: Projects
  },
  {
    path: routes.all,
    component: Projects
  },
  {
    path: routes.project,
    component: Projects,
    exact: true
  },
  {
    path: routes.projects,
    component: Project,
    exact: true
  }
];
