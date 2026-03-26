import { createBrowserRouter, RouterProvider } from "react-router";
import Default from "./routes/layout/Default";
import Home from "./routes/page/home/Home";
import Concert from "./routes/page/concert/Concert";
import ConcertDetail from "./routes/page/concert/ConcertDetail";
import Login from "./routes/page/auth/Login";
import Signup from "./routes/page/auth/SignUp";
import Reservation from "./routes/page/concert/Reservation";
import MyPage from "./routes/page/myPage/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Default,
    children: [
      { path: "", Component: Home },
      { path: "/auth/login", Component: Login },
      { path: "/auth/signup", Component: Signup },
      { path: "/concert", Component: Concert },
      { path: "/concert/:id", Component: ConcertDetail },
      { path: "/concert/:id/reservation", Component: Reservation },
      { path: "/myPage", Component: MyPage },
      { path: "*", Component: Home },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
