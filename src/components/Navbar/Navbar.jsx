import React, { useState, useEffect, useRef } from "react";
import Toggle from "../Toggle/Toggle";

import "./Navbar.css";
import { Link } from "react-scroll";
import { useSelector, useStore } from "react-redux";
import storeLanguage from "../../locales/storeLanguage";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [langIsOpen, setLangIsOpen] = useState(false);
  const langRef = useRef(null);
  const store = useStore();

  // Close modal when clicked outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langRef]);

  const openLangModal = () => {
    setLangIsOpen(true);
  };
  let actualLang = useSelector(
    (state) => state?.entities?.deviceview?.language
  );
  const setLanguage = (lang) => {
    // localStorage.setItem("deviceLanguage", lang);
    changeLanguage(lang);
    storeLanguage(lang);
    console.log("langt", lang);
    try {
      store.dispatch({
        type: "deviceview/setLanguage",
        payload: { language: lang },
      });
    } catch (error) {
      console.log("errror redux");
    }
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const { t } = useTranslation();

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Theme</div>
        <Toggle />
        <div onClick={openLangModal}>
          <span>Lang</span>
        </div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                {t("Home")}
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                {t("Services")}
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                {t("Projects")}
              </Link>
            </li>
            <li>
              <Link to="/blogs">{t("Blogs")}</Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">{t("Contact")}</button>
        </Link>
      </div>
      {/* Modal for language */}
      {langIsOpen && (
        <div ref={langRef} className="modal-lang">
          {/* Your language modal content here */}
          <div className="lang-wrapper">
            <span
              className="one-lang"
              style={actualLang == "en" ? { backgroundColor: "#bf55" } : {}}
              onClick={() => setLanguage("en")}
            >
              English
            </span>
            <span
              className="one-lang"
              style={actualLang == "fr" ? { backgroundColor: "#bf55" } : {}}
              onClick={() => setLanguage("fr")}
            >
              French
            </span>
            <span
              className="one-lang"
              style={actualLang == "al" ? { backgroundColor: "#bf55" } : {}}
              onClick={() => setLanguage("al")}
            >
              Allemand
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
