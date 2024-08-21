import { Suspense } from "react";
import { Header } from "./header/header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main>
      <Header />
      <Suspense>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </main>
  );
};
