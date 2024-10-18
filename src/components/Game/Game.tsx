import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
import GameHeader from "./components/GameHeader";
import GameModals from "./components/GameModals";
import MainInfo from "./components/MainInfo";
import MatchAnimation from "./components/MatchAnimation";
import MatchButton from "./components/MatchButton";
import PlayerInfo from "./components/PlayerInfo";
import TurnInfo from "./components/TurnInfo";

const Game = () => {
  const { t } = useTranslation();
  const { mode } = useParams<{ mode: string }>();
  const initialPlayer = mode === "computerFirst" ? "computer" : "player";

  const {
    totalMatches,
    playerMatches,
    computerMatches,
    currentPlayer,
    turnMatches,
    winner,
    isOpenRules,
    isOpenWinner,
    isOpenExit,
    isOpenRestart,
    isAnimating,
    animationKey,
    isCompAnimating,
    animationCompKey,
    handlePlayerTakeMatch,
    handleSkipTurn,
    resetGame,
    setIsOpenRules,
    setIsOpenWinner,
    setIsOpenExit,
    setIsOpenRestart
  } = useGame(initialPlayer);

  return (
    <div className="container mx-auto flex flex-col gap-10 h-[100vh] overflow-clip">
      <GameHeader
        mode={mode || "playerFirst"}
        onRulesClick={() => setIsOpenRules(true)}
        onRestartClick={() => setIsOpenRestart(true)}
        onExitClick={() => setIsOpenExit(true)}
      />
      <MainInfo totalMatches={totalMatches} />
      <TurnInfo currentPlayer={currentPlayer} />

      <div className="relative h-full">
        <PlayerInfo
          playerMatches={playerMatches}
          computerMatches={computerMatches}
        />
        <img src="/table.webp" alt="table" className="absolute" />

        <MatchButton
          handlePlayerTakeMatch={handlePlayerTakeMatch}
          currentPlayer={currentPlayer}
          turnMatches={turnMatches}
          totalMatches={totalMatches}
        />

        <button
          onClick={handleSkipTurn}
          disabled={currentPlayer !== "player" || turnMatches === 0}
          className="ingame-cruel-buttons absolute z-20 bg-red-600 left-[25%] top-[75%] disabled:bg-red-900"
        >
          {t("skip")}
        </button>

        <MatchAnimation
          isAnimating={isAnimating}
          animationKey={animationKey}
          animationType="player"
        />
        <MatchAnimation
          isAnimating={isCompAnimating}
          animationKey={animationCompKey}
          animationType="computer"
        />
      </div>

      <GameModals
        winner={winner}
        isOpenWinner={isOpenWinner}
        setIsOpenWinner={setIsOpenWinner}
        resetGame={resetGame}
        setIsOpenRules={setIsOpenRules}
        isOpenRules={isOpenRules}
        setIsOpenExit={setIsOpenExit}
        isOpenExit={isOpenExit}
        setIsOpenRestart={setIsOpenRestart}
        isOpenRestart={isOpenRestart}
      />
    </div>
  );
};

export default Game;
