import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// halaman yang di import
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./store";
import { Provider } from "react-redux";

import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  axios.interceptors.request.use((config) => {
    if (localStorage.getItem("token")) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
    }

    return config;
  }, (error) => {
    Promise.reject(error);
  });

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
