import AboutHero from "../components/AboutHero";
import AboutMission from "../components/AboutMission";
import AboutStats from "../components/AboutStats";
import CallToAction from "../components/CallToAction";

function About() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <CallToAction
        title="Ready to Get Started?"
        subtitle="Join thousands of hosts and attendees creating unforgettable moments every day"
        buttonText="Start Hosting"
      />
    </>
  );
}

export default About;
