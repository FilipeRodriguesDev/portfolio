/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Jornada } from "./pages/Jornada";
import { Projetos } from "./pages/Projetos";
import { ProjetoDetails } from "./pages/ProjetoDetails";
import { Sobre } from "./pages/Sobre";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "jornada", element: <Jornada /> },
      { path: "projetos", element: <Projetos /> },
      { path: "projetos/:slug", element: <ProjetoDetails /> },
      { path: "sobre", element: <Sobre /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
