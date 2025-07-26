import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <section>
      <Outlet />
    </section>
  );
}

export default AppLayout;
