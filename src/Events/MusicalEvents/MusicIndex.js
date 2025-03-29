import React, { useState } from "react";
import { motion } from "framer-motion";
import AlbumRelease from "./AlbumRelease";
import Concert from "./Concert";
import DJ from "./DJ";
import Band from "./Band";
import BollywoodDance from "./BollywoodDance";
import ClassicalDance from "./ClassicalDance";
import ClassicalMusic from "./ClassicalMusic";
import Kpop from "./Kpop";
import MusicFestival from "./MusicFestival";
import Orchestra from "./Orchestra";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const events = [
  { id: "M1", Component: AlbumRelease, path: "/events/albumrelease", imageSrc: "/Images/Music/M1.jpg", title: "Album Release", description: "Celebrating the launch of a new musical journey." },
  { id: "M2", Component: Band, path: "/events/band", imageSrc: "/Images/Music/M2.jpg", title: "Band Performance", description: "Experience the magic of live music." },
  { id: "M3", Component: BollywoodDance, path: "/events/bollywooddance", imageSrc: "/Images/Music/M4.jpg", title: "Bollywood Dance", description: "Groove to the vibrant beats of Bollywood." },
  { id: "M4", Component: ClassicalDance, path: "/events/classicaldance", imageSrc: "/Images/Music/M5.jpg", title: "Classical Dance", description: "Celebrating the grace and heritage of classical art." },
  { id: "M5", Component: ClassicalMusic, path: "/events/classicalmusic", imageSrc: "/Images/Music/M3.jpg", title: "Classical Music", description: "Immerse yourself in the timeless melodies of classical music." },
  { id: "M6", Component: Concert, path: "/events/concert", imageSrc: "/Images/Music/M6.jpg", title: "Concert", description: "Feel the energy of live performances and mesmerizing music." },
  { id: "M7", Component: DJ, path: "/events/dj", imageSrc: "/Images/Music/M7.jpg", title: "DJ Night", description: "Dance to the beats of an electrifying DJ performance." },
  { id: "M8", Component: Kpop, path: "/events/kpop", imageSrc: "/Images/Music/M11.jpg", title: "Kpop Event", description: "Dive into the vibrant world of Kpop beats and performances." },
  { id: "M9", Component: MusicFestival, path: "/events/musicfestival", imageSrc: "/Images/Music/M12.jpg", title: "Music Festival", description: "Celebrate music with an unforgettable festival experience." },
  { id: "M10", Component: Orchestra, path: "/events/orchestra", imageSrc: "/Images/Music/M10.jpg", title: "Orchestra", description: "Indulge in the symphony of orchestral masterpieces." },
];

const MusicIndex = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      {/* Header Section */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "#333",
          color: "white",
          padding: "10px",
          zIndex: 1000,
        }}
      >
        <h1 style={{ textAlign: "center" }}>Music Event Finder</h1>
      </header>

      {/* Main Content */}
      <div style={{ marginTop: "60px" }}>
        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            position: "relative",
          }}
        >
          <FaSearch
            style={{ position: "absolute", left: "10px", color: "#666" }}
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "500px",
              padding: "10px 40px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
            }}
          />
        </div>

        {/* Captivating Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Explore Music Events to Soothe Your Soul and Pump Up Your Energy
        </h2>

        {/* Events Display */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // Restrict to 3 cards per row
            gap: "20px",
          }}
        >
          {filteredEvents.map(({ id, imageSrc, title, description, path }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                background: "white",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                textAlign: "center",
                padding: "15px",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0px 8px 12px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div style={{ overflow: "hidden", borderRadius: "10px" }}>
                <img
                  src={imageSrc}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  margin: "10px 0",
                  color: "#333",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  marginTop: "5px",
                }}
              >
                {description}
              </p>
              <button
                style={{
                  backgroundColor: "#333",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  marginTop: "10px",
                  cursor: "pointer",
                  transition: "background 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#555";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#333";
                }}
                onClick={() => navigate(path)}
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicIndex;
