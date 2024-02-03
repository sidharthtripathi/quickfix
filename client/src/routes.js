import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ChatSection from "./components/chat/ChatSection";
import NoteSection from "./components/note/NoteSection";
import CategoryNotes from "./components/note/CategoryNotes";
import NoteEditorSection from "./components/note/NoteEditorSection";
import Login from "./components/auth/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/Chat", element: <ChatSection /> },
      {
        path: "/note",
        element: <NoteSection />,
        children: [{ path: "/note/categories/:category", element: <CategoryNotes /> },
        { path: "/note/categories/:category/:topic", element: <NoteEditorSection /> }],
      },
      { path: "/note", element: <NoteSection /> },
    ],
    
  },
  { path: "/login", element: <Login /> },

]);

export default router;
