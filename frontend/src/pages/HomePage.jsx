import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";
import UpcomingEvents from "../components/UpcomingEvents";
import { getHostEventCTA } from "../services/sanity";

function HomePage() {
  return (
    <>
      <Hero />
      <SearchBar />
      <HowItWorks />
      <CallToAction fetchCTA={getHostEventCTA} />
      <UpcomingEvents />
    </>
  );
}

export default HomePage;
