import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import zzdash from "../../img/Project/zzdash.png";
import realsync from "../../img/Project/realsync.png";
import { themeContext } from "../../Context";
import { useTranslation } from "react-i18next";

/**
 * NOTE: replace zzdash.png / realsync.png with real product screenshots
 * whenever you have them — these two files are placeholder cover cards
 * so the section isn't empty. Everything else here is real, verified work.
 */
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { t } = useTranslation();

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <h1 className="fw-bold" style={{ color: darkMode ? "white" : "" }}>
        {t("RecentProjects")}
      </h1>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={zzdash} alt="ZZ Dash - Pizzaie client app" />
          <div className="text-center mt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.imaxeam01.pizzaappmobileclient"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button i-button">{t("LiveLink")}</button>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={realsync} alt="RealSync Board - real-time Kanban" />
          <div className="text-center mt-2">
            <a
              href="https://github.com/houssem0409/realsync-board"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button i-button">{t("LiveLink")}</button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
