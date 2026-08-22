import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from '../pages/RootLayout'

const HomePage       = lazy(() => import('../pages/HomePage'))
const Menu           = lazy(() => import('../pages/Menu'))
const ComingSoon     = lazy(() => import('../components/ComingSoon'))
const Bookings       = lazy(() => import('../pages/Bookings'))
const Catering       = lazy(() => import('../pages/Catering'))
const About           = lazy(() => import('../pages/About'))

function Page({ component: Component }: { component: React.ComponentType }) {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-crema" />}>
      <Component />
    </Suspense>
  )
}

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { path: '/',           element: <Page component={HomePage} /> },
        { path: '/about',      element: <Page component={About} /> },
        { path: '/menu',       element: <Page component={Menu} /> },
        { path: '/order',      element: <Page component={ComingSoon} /> },
        { path: '/bookings',   element: <Page component={Bookings} /> },
        { path: '/catering',   element: <Page component={Catering} /> },
      ],
    }
  ],
  {
    basename: '/',
  }
);
