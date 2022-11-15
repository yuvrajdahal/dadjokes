import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { element } from "./links";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {element.map((route, i) => {
          const LayoutElement = route.element;
          return (
            <Route key={route.path} path={route.path} element={LayoutElement}>
              {route.children.map((child) => {
                const ChildrenElement = child.element;
                return (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={
                      <ErrorBoundary
                        fallback={
                          <div className="text-white">Could not fetch</div>
                        }
                      >
                        <ChildrenElement />
                      </ErrorBoundary>
                    }
                  />
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default PageRoutes;
