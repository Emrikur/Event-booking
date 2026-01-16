import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense} from "react";

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

      <Route index element={<Suspense fallback={<div>Going Home...</div>}><HomePage /></Suspense>} />
      <Route path="/events" element={<Suspense fallback={<div>Browsing the Events...</div>}><EventsPage /></Suspense>} />
      <Route path="/events/:pageSlug" element={<Suspense fallback={<div>Loading Event...</div>}><EventDetailPage /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<div>Loading About Us...</div>}><AboutPage /></Suspense>} />
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
