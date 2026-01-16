import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { lazy} from "react";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const AboutPage = lazy(() => import("./pages/About.jsx"));
import EventDetailPage from "./pages/EventDetailsPage.jsx";
import EventsPage from "./pages/EventsComponent.jsx";

import { LanguageProvider } from "./context/LanguageContext";

import MainLayout from "./layouts/MainLayout";
import { EventProvider } from "./context/EventContext";

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:pageSlug" element={<EventDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
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
