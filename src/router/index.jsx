
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/home'
import Root from '../App'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  },
]);

export default router