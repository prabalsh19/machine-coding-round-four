import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Nav } from "./components/Nav/Nav.jsx";
import { Post } from "./Pages/Post/Post.jsx";
import { FeedContextProvider } from "./context/feed-context.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "post/:id", element: <Post /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FeedContextProvider>
      <Nav />
      <RouterProvider router={router} />
    </FeedContextProvider>
  </React.StrictMode>
);
