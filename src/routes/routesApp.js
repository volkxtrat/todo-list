import routes from './routes';
import Projects from '../components/Pages/Projects/Projects'
import Project from '../components/Pages/Project/Project';

export default [
  {
    path: routes.inbox,
    title: "Inbox",
    Component: Projects,
  },
  {
    path: routes.today,
    title: "Today",
    Component: Projects,
  },
  {
    path: routes.week,
    title: "Next 7 days",
    Component: Projects,
  },
  {
    path: routes.all,
    title: "All",
    Component: Projects,
  },
  {
    path: routes.projects,
    Component: Project,
  },
  {
    path: routes.project,
    Component: Projects,
    exact: true
  },
]