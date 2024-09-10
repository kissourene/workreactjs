import './App.css';
import Login from "./components/Login/Login";
import Signup from "./components/Sign/Signup";
import {RouterProvider, createBrowserRouter} from "react-router-dom";

function App() {
  const route = createBrowserRouter ([
    {
      path:"/",
      element: <Signup/>,
    },
    {
      path:"/login",
      element: <Login/>
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router = {route}></RouterProvider>
    </div>
  );
}

export default App;
