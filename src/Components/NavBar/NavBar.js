/* global google */ // Declare 'google' as a global variable
import "../../index.css"
import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-scroll';
// Hook for adding and removing the Google Translate script
const useGoogleTranslateScript = () => {
  useEffect(() => {
    const googleTranslateScript = document.createElement("script");
    googleTranslateScript.type = "text/javascript";
    googleTranslateScript.async = true;
    googleTranslateScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(googleTranslateScript);

    window.googleTranslateElementInit = function () {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    return () => {
      document.body.removeChild(googleTranslateScript);
    };
  }, []);
};

const NavBar = () => {
  // Use the Google Translate script
  useGoogleTranslateScript();

  

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
  <Link to="HomePortfolio" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Home</Link>
  <Link to="MyProjects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Projects</Link>
  <Link to="SkillsCounter" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Skills</Link>
  <Link to="Contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Contact</Link>
</Nav>
          <div id="google_translate_element"></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
