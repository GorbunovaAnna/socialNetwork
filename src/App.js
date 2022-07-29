import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
       <BrowserRouter>
      <Header />
      <Sidebar />
      <div className="app-wrapper-content">
       
          <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
       
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
