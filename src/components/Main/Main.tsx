import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

const Main = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <>
      <div
        className="flex flex-col gap-5 min-h-screen justify-center items-center h-full relative w-100%
      h-100%"
      >
        <button
          onClick={() => {
            navigate("game/playerFirst");
          }}
          className="menu-buttons"
        >
          {t("playPlayerFirst")}
        </button>
        <button
          onClick={() => {
            navigate("game/computerFirst");
          }}
          className="menu-buttons"
        >
          {t("playComputerFirst")}
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            setIsOpen(true);
          }}
          className="menu-buttons"
        >
          {t("rules")}
        </button>
        <button
          onClick={() =>
            changeLanguage(localStorage.getItem("lng") === "ua" ? "en" : "ua")
          }
          className="menu-buttons"
        >
          {t("changeLang")}
        </button>
      </div>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          headerText={t("rules")}
          descriptionText={t("rulesDesc")}
        />
      )}
    </>
  );
};

export default Main;
