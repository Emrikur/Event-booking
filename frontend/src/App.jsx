import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { LanguageProvider } from "./context/LanguageContext";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import EventsComponent from "./pages/EventsComponent";
import EventDetailsPage from "./pages/EventDetailsPage";
import About from "./pages/About";
import { EventProvider } from "./context/EventContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/events" element={<EventsComponent />} />
      <Route path="/events/:pageSlug" element={<EventDetailsPage />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    
    <LanguageProvider>
      <EventProvider>
        {" "}
        <RouterProvider router={router} />{" "}
      </EventProvider>
    </LanguageProvider>
  );
}

export default App;
