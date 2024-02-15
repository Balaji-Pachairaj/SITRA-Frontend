import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import { Provider } from "react-redux";
import store from "./store";
import About from "./page/About";
import Root from "./page/Root";
import Signin from "./page/Login/Signin";
import { routes } from "./config/routesConfigs";

const router = createBrowserRouter([
     {
          path: routes.home.route,
          element: <Root />,
          children: [
               {
                    index: true,
                    element: <Home />,
               },
               {
                    path: routes.about.route,
                    element: <About />,
               },
               {
                    path: routes.signin.route,
                    element: <Signin />,
               },
          ],
     },
]);

function App() {
     return (
          <Provider store={store}>
               <RouterProvider router={router} />;
          </Provider>
     );
}

export default App;
