import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutePaths } from "@/routes.ts";
import { ChatPage } from "./pages/chat-page";
import LoginPage from "./pages/login-page";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={RoutePaths.index} element={ <ChatPage/>} />
          <Route path={RoutePaths.login} element={ <LoginPage/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
