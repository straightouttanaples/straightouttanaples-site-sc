import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from '../pages/RootLayout'

const HomePage       = lazy(() => import('../pages/HomePage'))
const MenuComingSoon = lazy(() => import('../components/MenuComingSoon'))
const ComingSoon     = lazy(() => import('../components/ComingSoon'))
const Bookings       = lazy(() => import('../pages/Bookings'))
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
        { path: '/menu',       element: <Page component={MenuComingSoon} /> },
        { path: '/order',      element: <Page component={ComingSoon} /> },
        { path: '/Bookings',   element: <Page component={Bookings} /> },
      ],
    }
  ],
  {
    basename: '/',
  }
);
