import PageLayout from "../layout/PageLayout";
import { lazy } from "react";
export function lazyLoad(page) {
  const LazyComp = lazy(() => import(`../pages/${page}`));
  return LazyComp;
}

let element = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: lazyLoad("home"),
        name: "Home",
      },
    ],
  },
];

export { element };
