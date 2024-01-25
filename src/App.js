import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthProvider";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route Component={Login} path="/login" />
          <Route Component={ChatRoom} path="/" />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
