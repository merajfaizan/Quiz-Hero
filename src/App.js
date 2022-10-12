import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFound from "./component/404/NotFound";
import Blog from "./component/blog/Blog";
import Main from "./component/layer/Main";
import QuizArea from "./component/QuizArea/QuizArea";
import Statistics from "./component/statistics/Statistics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <QuizArea></QuizArea>,
        },
        {
          path: "/home",
          element: <QuizArea></QuizArea>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
