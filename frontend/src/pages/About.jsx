import AboutHero from "../components/AboutHero";
import AboutMission from "../components/AboutMission";
import AboutStats from "../components/AboutStats";
import AboutValues from "../components/AboutValues";
import AboutTeam from "../components/AboutTeam";
import AboutStory from "../components/AboutStory";
import CallToAction from "../components/CallToAction";
import { getAboutHero, getJoinCommunityCTA } from "../services/sanity";

function About() {
  return (
    <>
      <AboutHero fetchHero={getAboutHero} />
      <AboutMission />
      <AboutStats />
      <AboutValues />
      <AboutStory />
      <AboutTeam />
      <CallToAction fetchCTA={getJoinCommunityCTA} />
    </>
  );
}

export default About;
