import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      <Outlet />
    </div>
  );
};
export default PageLayout;
