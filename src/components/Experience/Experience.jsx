import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { useTranslation } from "react-i18next";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { t } = useTranslation();

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          5
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>{t("years")} </span>
        <span>{t("Experience")}</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          8+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>
          {t("completed")}{" "}
        </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          3
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>
          {t("companies")}{" "}
        </span>
        <span>{t("Work")}</span>
      </div>
    </div>
  );
};

export default Experience;
