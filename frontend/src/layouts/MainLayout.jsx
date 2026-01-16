import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect,useState } from "react";
import CreateEventModal from "../components/CreateEventModal";
import SuccessModal from "../components/SuccessModal";



function MainLayout() {
    const { pathname } = useLocation();
    useEffect(() => {window.scrollTo(0, 0); }, [pathname]);
    const [showCreateEvent, setShowCreateEvent] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);


  return (
    <div className="layout">
      {/* <Header /> */}
      <Navbar />
      <main className="layout__content">
        <Outlet />
      </main>
      <Footer onHostEventClick={() => setShowCreateEvent(true)} />

       {showCreateEvent && (
  <CreateEventModal
    onClose={() => setShowCreateEvent(false)}
    onSuccess={() => {
      setShowCreateEvent(false);
      setShowSuccess(true);
    }}
  />
)}
{showSuccess && (
  <SuccessModal
    title="Event created!"
    message="Your event has been published."
    buttonText="View events"
    onClose={() => setShowSuccess(false)}
  />
)}
    </div>
  );
}

export default MainLayout;
