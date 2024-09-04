import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/ui/navbar'


export const Route = createRootRoute({
  component: () => (
    <div className=''>
      <Navbar />
      <Outlet />
    </div>
  ),
})