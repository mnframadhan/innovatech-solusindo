import { createFileRoute } from "@tanstack/react-router";
import { Jumbotron } from "../components/ui/jumbotron";
import { Services } from "../components/ui/services";
import { AboutUs } from "../components/ui/about-us";
import { MainAdvantages } from "../components/ui/main-advantages";
import { Teams } from "../components/ui/our-teams";
import { Headquarter } from "../components/ui/headquarters";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div>
        <Jumbotron />
        <Services />
        <AboutUs />
        <MainAdvantages />
        <Teams />
        <Headquarter />
      </div>
    </>
  );
}
