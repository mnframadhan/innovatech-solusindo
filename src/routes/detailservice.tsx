// src/routes/detailservice.tsx
import { createFileRoute } from "@tanstack/react-router";
import ServiceDetailComponent from "../pages/servicedetail"; // Menggunakan nama lain untuk menghindari konflik

export const Route = createFileRoute("/detailservice")({
  component: ServiceDetailComponent, // Menggunakan nama baru yang diimpor
});
