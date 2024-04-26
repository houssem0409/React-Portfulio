import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const { t } = useTranslation();

  return (
    <div className="footer">
      <img className="text-black" src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://www.instagram.com/houssem_dalla/" target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.facebook.com/houssem.dalla?locale=fr_FR"
            target="_blank"
          >
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/houssem0409" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/houssem-dalla-4635a2198/"
            target="_blank"
          >
            <Linkdin color="white" size={"3rem"} />
          </a>
        </div>
        <div className="copyright-style">
          <p>
            <small>
              {t("Copyright")} &copy; {year}
            </small>
          </p>
          <p>
            <small>{t("DevelopBy")} Dalla Houssem </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
