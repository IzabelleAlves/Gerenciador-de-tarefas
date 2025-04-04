import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import TaskPage from "./pages/taskPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //o element vai ser a pag principal
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// Aqui eu crio a nossa aplicação react e onde tudo será renderizado.
// Pego o elemento criado no SPA pelo id e renderizo tudo dentro dele.
// Para renderizar um componente, é necessário que a primeira letra seja maiúscula (SEMPRE).
// É com essa letra maiúscula que o React consegue diferenciar o que é um componete React e o que é uma tag hmtl.
