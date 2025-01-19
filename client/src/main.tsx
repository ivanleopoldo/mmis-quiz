import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Error, Login, NotFound, SignUp } from "@/pages";
import { Home, Layout } from "@/pages/core";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route errorElement={<Error />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/error" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
