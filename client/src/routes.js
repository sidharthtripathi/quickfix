import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ChatSection from "./components/chat/ChatSection";
import NoteSection from "./components/note/NoteSection";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/Chat", element: <ChatSection /> },
      { path: "/note", element: <NoteSection /> },
    ],
  },
]);

export default router;
