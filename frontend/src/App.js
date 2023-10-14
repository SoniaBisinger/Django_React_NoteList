import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { NoteListProvider } from "./components/NoteListProvider";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <NoteListProvider>
          <Routes>
            <Route path="/" exact element={<NotesListPage />} />
            <Route path="/note/:noteId" element={<NotePage />} />
          </Routes>
        </NoteListProvider>
      </div>
    </div>
  );
}

export default App;
