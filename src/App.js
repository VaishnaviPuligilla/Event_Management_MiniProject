import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/header";
import Carosal1 from "./MainContent/Carosal1";
import Carosal2 from "./MainContent/Carosal2";
import Services from "./MainContent/Services/Services";
import Gallery from "./MainContent/Gallery/Gallery";
import Review from "./MainContent/Review";
import FAQ from "./MainContent/FAQ";
import Footer from "./Components/Footer";

// Family Event Imports
import FamilyIndex from "./Events/FamEvents/FamilyIndex";
import Wedding from "./Events/FamEvents/Wedding";
import Anniversary from "./Events/FamEvents/Anniversary";
import BabyShower from "./Events/FamEvents/BabyShower";
import Birthday from "./Events/FamEvents/Birthday";
import HouseWarming from "./Events/FamEvents/HouseWarming";
import FamilyUnion from "./Events/FamEvents/FamilyUnion";
import FestiveGather from "./Events/FamEvents/FestiveGather";
import Retirement from "./Events/FamEvents/Retirement";
import CulturalEvent from "./Events/FamEvents/CulturalEvent";

// Corporate Event Imports
import CorporateIndex from "./Events/CorporateEvents/CorporateIndex";
import AGM from "./Events/CorporateEvents/AGM";
import Award from "./Events/CorporateEvents/Award";
import BoardMeeting from "./Events/CorporateEvents/BoardMeeting";
import CorporateRetreat from "./Events/CorporateEvents/CorporateRetreat";
import NetworkingEvent from "./Events/CorporateEvents/NetworkingEvent";
import Seminar from "./Events/CorporateEvents/Seminar";
import TBA from "./Events/CorporateEvents/TBA";
import Training from "./Events/CorporateEvents/Training";

// Musical Event Imports
import MusicIndex from "./Events/MusicalEvents/MusicIndex";
import AlbumRelease from "./Events/MusicalEvents/AlbumRelease";
import Concert from "./Events/MusicalEvents/Concert";
import DJ from "./Events/MusicalEvents/DJ";
import Band from "./Events/MusicalEvents/Band";
import BollywoodDance from "./Events/MusicalEvents/BollywoodDance";
import ClassicalDance from "./Events/MusicalEvents/ClassicalDance";
import ClassicalMusic from "./Events/MusicalEvents/ClassicalMusic";
import Kpop from "./Events/MusicalEvents/Kpop";
import MusicFestival from "./Events/MusicalEvents/MusicFestival";
import Orchestra from "./Events/MusicalEvents/Orchestra";

const HomePage = () => (
  <>
    <Carosal1 />
    <Carosal2 />
    <Services />
    <Gallery />
    <Review />
    <FAQ />
  </>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carosal1" element={<Carosal1 />} />
        <Route path="/carosal2" element={<Carosal2 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<FAQ />} />
        
        {/* Family Event Routes */}
        <Route path="/events" element={<FamilyIndex />} />
        <Route path="/events/wedding" element={<Wedding />} />
        <Route path="/events/anniversary" element={<Anniversary />} />
        <Route path="/events/baby-shower" element={<BabyShower />} />
        <Route path="/events/birthday" element={<Birthday />} />
        <Route path="/events/house-warming" element={<HouseWarming />} />
        <Route path="/events/family-union" element={<FamilyUnion />} />
        <Route path="/events/festive-gather" element={<FestiveGather />} />
        <Route path="/events/retirement" element={<Retirement />} />
        <Route path="/events/cultural-event" element={<CulturalEvent />} />

        {/* Corporate Event Routes */}
        <Route path="/corporate-events" element={<CorporateIndex />} />
        <Route path="/corporate-events/agm" element={<AGM />} />
        <Route path="/corporate-events/award" element={<Award />} />
        <Route path="/corporate-events/board-meeting" element={<BoardMeeting />} />
        <Route path="/corporate-events/retreat" element={<CorporateRetreat />} />
        <Route path="/corporate-events/networking" element={<NetworkingEvent />} />
        <Route path="/corporate-events/seminar" element={<Seminar />} />
        <Route path="/corporate-events/tba" element={<TBA />} />
        <Route path="/corporate-events/training" element={<Training />} />

        {/* Musical Event Routes */}
        <Route path="/musical-events" element={<MusicIndex />} />
        <Route path="/musical-events/album-release" element={<AlbumRelease />} />
        <Route path="/musical-events/concert" element={<Concert />} />
        <Route path="/musical-events/dj" element={<DJ />} />
        <Route path="/musical-events/band" element={<Band />} />
        <Route path="/musical-events/bollywood-dance" element={<BollywoodDance />} />
        <Route path="/musical-events/classical-dance" element={<ClassicalDance />} />
        <Route path="/musical-events/classical-music" element={<ClassicalMusic />} />
        <Route path="/musical-events/kpop" element={<Kpop />} />
        <Route path="/musical-events/music-festival" element={<MusicFestival />} />
        <Route path="/musical-events/orchestra" element={<Orchestra />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
