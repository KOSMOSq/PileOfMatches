import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Modal from "../../Modal/Modal";

interface GameModalsProps {
  winner: string | null;
  isOpenWinner: boolean;
  setIsOpenWinner: (isOpen: boolean) => void;
  resetGame: () => void;
  setIsOpenRules: (isOpen: boolean) => void;
  isOpenRules: boolean;
  setIsOpenExit: (isOpen: boolean) => void;
  isOpenExit: boolean;
  setIsOpenRestart: (isOpen: boolean) => void;
  isOpenRestart: boolean;
}

const GameModals: React.FC<GameModalsProps> = ({
  winner,
  isOpenWinner,
  setIsOpenWinner,
  resetGame,
  setIsOpenRules,
  isOpenRules,
  setIsOpenExit,
  isOpenExit,
  setIsOpenRestart,
  isOpenRestart
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      {isOpenWinner && winner && (
        <Modal
          setIsOpen={setIsOpenWinner}
          headerText={winner}
          confirmText={t("restartConfirm")}
          cancelText={t("exitConfirm")}
          onConfirm={() => resetGame()}
          onCancel={() => navigate("/")}
          isConfirmation={true}
        />
      )}

      {isOpenRules && (
        <Modal
          setIsOpen={setIsOpenRules}
          headerText={t("rules")}
          descriptionText={t("rulesDesc")}
        />
      )}

      {isOpenExit && (
        <Modal
          setIsOpen={setIsOpenExit}
          headerText={t("exitGame")}
          descriptionText={t("exitGameSure")}
          onConfirm={() => navigate("/")}
          isConfirmation={true}
          confirmText={t("exitConfirm")}
        />
      )}

      {isOpenRestart && (
        <Modal
          setIsOpen={setIsOpenRestart}
          headerText={t("restartGame")}
          descriptionText={t("restartGameSure")}
          onConfirm={() => {
            resetGame();
          }}
          isConfirmation={true}
          confirmText={t("restartConfirm")}
        />
      )}
    </>
  );
};

export default GameModals;
