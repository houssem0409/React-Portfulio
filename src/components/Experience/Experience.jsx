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
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          2
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>{t("years")} </span>
        <span>{t("Experience")}</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          10+
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
          1
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
