import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { RoutePaths } from "@/routes.ts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={RoutePaths.login} element={<LoginPage />} />
          <Route path={RoutePaths.index} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
