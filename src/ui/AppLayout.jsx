import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { Loader } from "./Loader";

export function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="h-full min-h-screen w-screen bg-background pb-20 text-text">
      {isLoading && <Loader />}
      <Header />
      <Outlet />
    </div>
  );
}
