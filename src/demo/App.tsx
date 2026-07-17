import { Routes, Route } from "react-router-dom";
import { Layout } from "@/demo/layout/Layout";
import { Home } from "@/demo/pages/Home";
import { ComponentPage } from "@/demo/pages/ComponentPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/components/:slug" element={<ComponentPage />} />
      </Route>
    </Routes>
  );
}
