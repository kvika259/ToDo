import { Routes, Route } from "react-router";

import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyTask from "./pages/MyTask";
import PrivateRoute from "./components/PrivateRoute";
import StartPage from "./pages/StartPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path={"/registration"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path={"/MyTask"} element={<MyTask />} />
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
