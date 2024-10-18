import React from "react";
import { useTranslation } from "react-i18next";

interface TurnInfoProps {
  currentPlayer: "player" | "computer";
}

const TurnInfo: React.FC<TurnInfoProps> = ({ currentPlayer }) => {
  const { t } = useTranslation();

  return (
    <p className="text-center pb-[70px] text-md">
      {currentPlayer === "player" ? t("yourTurn") : t("computerTurn")}
    </p>
  );
};

export default TurnInfo;
