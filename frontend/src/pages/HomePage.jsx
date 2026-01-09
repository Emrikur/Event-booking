import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";

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
    </>
  );
}

export default HomePage;
