import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="h-screen w-screen bg-background text-text">
      <Header />
      <Outlet />
    </div>
  );
}
