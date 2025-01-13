import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Login } from "@/pages";
import { Home, Layout } from "@/pages/core";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
