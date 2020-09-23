import { hot } from 'react-hot-loader/root';

import HomePage from './pages/home-page/home-page.jsx';
import AuthPage from './pages/auth-page/auth-page.jsx';
import TestPage from './pages/test-page/test-page.jsx';
import NotFoundPage from './pages/not-found-page/not-found-page.jsx';

const routes = [
  {
    path: '/auth', // auth
    exact: true,
    component: hot(AuthPage)
  },
  {
    path: '/test', // test
    exact: true,
    component: hot(TestPage)
  },
  {
    path: '/', // home
    exact: true,
    component: hot(HomePage),
    fetchData: async () => Promise.resolve({ fetch: 'data' })
  },
  {
    component: hot(NotFoundPage) // 404
  }
];

export default routes;
