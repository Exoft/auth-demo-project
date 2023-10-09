import { useAuthState } from "../../context";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../routes";

const AppRouter = () => {
  const userDetails = useAuthState();

  return (
    <div className="bg-gradient-to-r from-rose-100/25 to-teal-100/25 ">
      <div className="container mx-auto">
        <section className="h-screen">
          <div className="h-full">
            <Routes>
              {routes.map(({ path, isPrivate, component: Component }) => (
                <Route
                  key={path}
                  path={path}
                  element={isPrivate && !userDetails.token ? <Navigate to="/" replace /> : <Component />}
                />
              ))}
            </Routes>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppRouter;
