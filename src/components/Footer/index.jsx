import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "./style.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="container">
        <span>
          {t("footer.text0")} {<AiTwotoneHeart style={{ color: "red" }} />}{" "}
          {t("footer.text1")}
        </span>
      </div>
    </div>
  );
};

export default Footer;
