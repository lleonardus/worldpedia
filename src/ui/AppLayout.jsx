import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="h-full min-h-screen w-screen bg-background pb-20 text-text">
      <Header />
      <Outlet />
    </div>
  );
}
