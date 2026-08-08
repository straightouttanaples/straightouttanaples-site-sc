import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from '../pages/RootLayout'

const HomePage       = lazy(() => import('../pages/HomePage'))
const MenuComingSoon = lazy(() => import('../components/MenuComingSoon'))
const ComingSoon     = lazy(() => import('../components/ComingSoon'))

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
        { path: '/menu',       element: <Page component={MenuComingSoon} /> },
        { path: '/order',      element: <Page component={ComingSoon} /> },
        { path: '/Bookings',   element: <Page component={ComingSoon} /> },
        { path: '/Contactus',  element: <Page component={ComingSoon} /> },
      ],
    }
  ],
  {
    basename: '/',
  }
);
