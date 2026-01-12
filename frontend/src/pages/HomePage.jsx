import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";
import UpcomingEvents from "../components/UpcomingEvents";

function HomePage() {
  return (
    <>
      <Hero />
      <SearchBar />
      <HowItWorks />
      <CallToAction
        title="Want to Host an Event?"
        subtitle="Join thousands of hosts creating amazing experiences."
        buttonText="Start Hosting"
      />
      <UpcomingEvents />
    </>
  );
}

export default HomePage;
