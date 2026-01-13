import AboutHero from "../components/AboutHero";
import AboutMission from "../components/AboutMission";
import AboutStats from "../components/AboutStats";
import AboutValues from "../components/AboutValues";
import AboutTeam from "../components/AboutTeam";
import AboutStory from "../components/AboutStory";
import CallToAction from "../components/CallToAction";

function About() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutValues />
      <AboutStory />
      <AboutTeam />
      <CallToAction
        title="Ready to Get Started?"
        subtitle="Join thousands of hosts and attendees creating unforgettable moments every day"
        buttonText="Start Hosting"
      />
    </>
  );
}

export default About;
