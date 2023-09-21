import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";
import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<NotesListPage />} />
          <Route path="/note/:noteId" element={<NotePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
