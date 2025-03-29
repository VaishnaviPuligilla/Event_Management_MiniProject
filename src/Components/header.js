import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { HouseFill, CalendarEventFill, PersonFill, BookmarkFill, JournalBookmarkFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import EventOrganizerLogin from "../EventOrganizer/EventOrganizerLogin";


const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="fixed-top w-100 px-3 d-flex justify-content-between" style={{ height: "60px", backgroundColor: "black", color: "white" }}>
        <Navbar.Brand style={{ fontFamily: "Times New Roman", fontSize: "24px", color: "white" }}>
          Event Management
        </Navbar.Brand>
        <Nav className="d-flex justify-content-between w-50">
          <Link to="/home" className="d-flex align-items-center text-decoration-none" style={{ color: "white" }}>
            <HouseFill className="me-1" /> Home
          </Link>
          <Link to="/services" className="d-flex align-items-center text-decoration-none" style={{ color: "white" }}>
            <CalendarEventFill className="me-1" /> Event
          </Link>
          <Link to="/blogs" className="d-flex align-items-center text-decoration-none" style={{ color: "white" }}>
            <JournalBookmarkFill className="me-1" /> Blogs
          </Link>
          <Link to="/about" className="d-flex align-items-center text-decoration-none" style={{ color: "white" }}>
            <PersonFill className="me-1" /> About Us
          </Link>
          <Button variant="dark" className="d-flex align-items-center text-white" style={{ border: "1px solid white" }} onClick={() => setShowLogin(true)}>
            <BookmarkFill className="me-1" /> Event Organizer Login
          </Button>
        </Nav>
      </Navbar>

      {/* Login Modal */}
      <EventOrganizerLogin show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
  );
};

export default Header;
