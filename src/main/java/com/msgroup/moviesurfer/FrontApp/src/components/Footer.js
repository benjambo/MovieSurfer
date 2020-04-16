import React from "react";
import "../App.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <ul className="column">
        <li>
          <strong>MovieSurfer</strong>
        </li>
        <li>Kuusitie 10</li>
        <li>00100</li>
        <li>HELSINKI</li>
        <li>
          <a
            href="https://github.com/benjambo/MovieSurfer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github / MovieSurfer
          </a>
        </li>
      </ul>
      <ul className="column">
        <li>
          <strong>INFO</strong>
        </li>
        <li>msurfer@ms.com</li>
        <li>050 469342</li>
        <li>{t("footer.section.times")}</li>
        <li>24 / 7</li>
      </ul>
      <ul className="column">
        <li>
          <strong>{t("footer.section.hours")}</strong>
        </li>
        <li>{t("footer.section.hours.service")}</li>
        <li>{t("footer.section.hours.open")}</li>
        <li>{t("footer.section.hours.mon")}</li>
        <li>{t("footer.section.hours.fri")}</li>
        <li>{t("footer.section.hours.sat")}</li>
      </ul>
    </footer>
  );
};
