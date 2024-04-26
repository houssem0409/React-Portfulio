import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const { t } = useTranslation();

  const sendEmail = (e) => {
    return;
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7l0b6wf",
        "template_w6cjq3x",
        form.current,
        "I7MnbiShkojGLpSOr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            {t("GetinTouch")}
          </span>
          <span>{t("Contactme")}</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder={t("Name")}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder={t("Email")}
          />
          <textarea
            name="message"
            className="user"
            placeholder={t("Message")}
          />
          <input
            disabled={true}
            type="submit"
            value="Send"
            className="button"
          />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
