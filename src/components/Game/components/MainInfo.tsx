import React from "react";
import { useTranslation } from "react-i18next";

interface MainInfoProps {
  totalMatches: number;
}

const MainInfo: React.FC<MainInfoProps> = ({ totalMatches }) => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <p className="font-bold text-xl pb-[40px]">{t("goalOfGame")}</p>
      <div className="flex gap-10 p-5 justify-center text-md">
        <p>
          {t("matchesLeft")}: {totalMatches}
        </p>
      </div>
    </div>
  );
};

export default MainInfo;
