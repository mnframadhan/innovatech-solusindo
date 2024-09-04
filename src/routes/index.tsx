import { createFileRoute } from '@tanstack/react-router'
import { Jumbotron } from '../components/ui/jumbotron'
import { Services } from '../components/ui/services'
import { FeaturedService } from '../components/ui/featured-services'
import { MainAdvantages } from '../components/ui/main-advantages'
import { Teams } from '../components/ui/our-teams'
import { Headquarter } from '../components/ui/headquarters'
import { Footer } from '../components/ui/footer'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
    <div>
        <Jumbotron />
        <Services />
        <FeaturedService />
        <MainAdvantages />
        <Teams />
        <Headquarter />
        <Footer />
    </div>
    </>
  )
}