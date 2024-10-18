import React from "react";
import { useTranslation } from "react-i18next";

interface GameHeaderProps {
  mode: string;
  onRulesClick: () => void;
  onRestartClick: () => void;
  onExitClick: () => void;
}

const GameHeader: React.FC<GameHeaderProps> = ({
  mode,
  onRulesClick,
  onRestartClick,
  onExitClick
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between p-5 items-center">
      <button onClick={onRulesClick} className="ingame-buttons">
        {t("rules")}
      </button>
      <p className="font-bold text-md">
        {mode === "playerFirst" ? t("modePlayer") : t("modeComputer")}
      </p>
      <div className="flex gap-4">
        <button onClick={onRestartClick} className="ingame-cruel-buttons w-10">
          <span className="block hover:rotate-[360deg] duration-700">⟳</span>
        </button>
        <button onClick={onExitClick} className="ingame-cruel-buttons">
          {t("exit")}
        </button>
      </div>
    </div>
  );
};

export default GameHeader;
