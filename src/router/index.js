import { lazy, Suspense } from "react"
import { RouteObject } from "react-router-dom"
import Dashboard from "../layout/dashboard" //不懒加载 避免闪屏

const Login = lazy(() => import("../layout/login"))
const PrintPhoto = lazy(() => import("../pages/PrintPhoto"))
const Previwer = lazy(() => import("../pages/Previwer"))
const Hooks = lazy(() => import("../pages/Hooks"))
const Drag = lazy(() => import("../pages/Drag"))
const Charts = lazy(() => import("../pages/Charts"))
const AsyncTest = lazy(() => import("../pages/AsyncTest"))
const Personal = lazy(() => import("../pages/Personal"))
const MobxTest = lazy(() => import("../pages/MobxTest"))

// 懒加载包裹
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={null}>{children}</Suspense>
}

const router: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { index: true, element: lazyLoad(<AsyncTest />) },
      { path: "/previwer", element: lazyLoad(<Previwer />) },
      { path: "/print", element: lazyLoad(<PrintPhoto />) },
      { path: "/drag", element: lazyLoad(<Drag />) },
      { path: "/charts", element: lazyLoad(<Charts />) },
      { path: "/hooks", element: lazyLoad(<Hooks />) },
      { path: "/personal", element: lazyLoad(<Personal />) },
      { path: "/mobx", element: lazyLoad(<MobxTest />) },
    ],
  },
  {
    path: "/login",
    element: lazyLoad(<Login />),
  },
]

export default router
