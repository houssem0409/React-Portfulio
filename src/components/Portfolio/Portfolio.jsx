import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import i from "../../img/kmayraSite.png";
import h from "../../img/gymSite.png";
import f from "../../img/ecommerceSite.png";
import e from "../../img/Project/e.png";
import d from "../../img/Project/d.png";
import c from "../../img/Project/c.png";
import b from "../../img/Project/b.png";
import a from "../../img/Project/a.png";
import { themeContext } from "../../Context";
import { useTranslation } from "react-i18next";
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
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={i} alt="" />
          <div className="text-center mt-2">
            <a href="https://bsisa-client.vercel.app/" target="_blank">
              <button className="button i-button">{t("LiveLink")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={h} alt="" />
          <div className="text-center mt-2">
            <a
              href="https://fitness-application-badi.vercel.app/"
              target="_blank"
            >
              <button className="button i-button">{t("LiveLink")}</button>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={f} alt="" />
          <div className="text-center mt-2">
            <a href="https://ecommerce-front-v2.vercel.app/" target="_blank">
              <button className="button i-button">{t("LiveLink")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={e} alt="" />
          <div className="text-center mt-2">
            <a
              href="https://friendly-liskov-3700bc.netlify.app/"
              target="_blank"
            >
              <button className="button i-button">{t("LiveLink")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={d} alt="" />
          <div className="text-center mt-2">
            <a
              href="https://620e74e7f0001400a6ae5e0e--xenodochial-carson-23c011.netlify.app/"
              target="_blank"
            >
              <button className="button i-button">{t("LiveLink")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={c} alt="" />
          <div className="text-center mt-2">
            <a
              href="https://61eed2a6e9c59133c10fcb8e--xenodochial-carson-23c011.netlify.app/"
              target="_blank"
            >
              <button className="button i-button">{t("LiveLink")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} alt="" />
          <div className="text-center mt-2">
            <a
              href="https://dipankar11137.github.io/Assignment-2/index-ass-2.html"
              target="_blank"
            >
              <button className="button i-button">{t("LiveLink")}</button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={a} alt="" />
          <div className="text-center mt-2">
            <a
              href="https://dipankar11137.github.io/Assignment-1/"
              target="_blank"
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
