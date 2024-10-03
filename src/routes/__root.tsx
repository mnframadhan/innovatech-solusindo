import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/ui/navbar'
import { Footer } from '../components/ui/footer'


export const Route = createRootRoute({
  component: () => (
    <div className=''>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  ),
})