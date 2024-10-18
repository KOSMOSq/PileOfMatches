import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useGame = (initialPlayer: "player" | "computer") => {
  const { t } = useTranslation();

  const [totalMatches, setTotalMatches] = useState<number>(25);
  const [playerMatches, setPlayerMatches] = useState<number>(0);
  const [computerMatches, setComputerMatches] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<"player" | "computer">(
    initialPlayer
  );
  const [turnMatches, setTurnMatches] = useState<number>(0);
  const [winner, setWinner] = useState<string | null>(null);

  const [isOpenRules, setIsOpenRules] = useState<boolean>(false);
  const [isOpenWinner, setIsOpenWinner] = useState<boolean>(false);
  const [isOpenExit, setIsOpenExit] = useState<boolean>(false);
  const [isOpenRestart, setIsOpenRestart] = useState<boolean>(false);

  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [animationKey, setAnimationKey] = useState<number>(0);

  const [isCompAnimating, setIsCompAnimating] = useState<boolean>(false);
  const [animationCompKey, setAnimationCompKey] = useState<number>(0);

  const handlePlayerTakeMatch = () => {
    if (turnMatches < 3 && totalMatches > 0) {
      setTotalMatches(totalMatches - 1);
      setPlayerMatches(playerMatches + 1);
      setTurnMatches(turnMatches + 1);
      setIsAnimating(true);
      setAnimationKey(prevKey => prevKey + 1);
    }
  };

  const handleSkipTurn = () => {
    setTurnMatches(0);
    setCurrentPlayer("computer");
  };

  const computerMove = () => {
    let matchesToTake = 0;

    const remainingMatches = totalMatches;
    if (remainingMatches <= 3) {
      matchesToTake = remainingMatches;
    } else {
      const evenMatches = computerMatches % 2 === 0;
      if (evenMatches) {
        matchesToTake = (remainingMatches - 1) % 4 || 1;
      } else {
        matchesToTake = 3 - ((remainingMatches - 1) % 4);
      }
      matchesToTake = Math.min(matchesToTake, 3);
    }

    matchesToTake = Math.min(matchesToTake, remainingMatches);

    computerTakeMatches(matchesToTake);
  };

  const computerTakeMatches = (matchesLeftToTake: number) => {
    if (matchesLeftToTake > 0 && totalMatches > 0) {
      setTimeout(() => {
        setTotalMatches(prevMatches => prevMatches - 1);
        setComputerMatches(prevMatches => prevMatches + 1);
        setTurnMatches(prevTurnMatches => prevTurnMatches + 1);
        computerTakeMatches(matchesLeftToTake - 1);
        setIsCompAnimating(true);
        setAnimationCompKey(prevKey => prevKey + 1);
      }, 1000);
    } else {
      setTurnMatches(0);
      setCurrentPlayer("player");
    }
  };

  const resetGame = () => {
    setTotalMatches(25);
    setPlayerMatches(0);
    setComputerMatches(0);
    setCurrentPlayer(initialPlayer);
    setTurnMatches(0);
    setWinner(null);
    setIsOpenWinner(false);
  };

  useEffect(() => {
    if (totalMatches === 0) {
      let winnerMessage = "It's a tie!";
      const playerEven = playerMatches % 2 === 0;
      const computerEven = computerMatches % 2 === 0;

      if (playerEven && !computerEven) {
        winnerMessage = t("playerWins");
      } else if (!playerEven && computerEven) {
        winnerMessage = t("computerWins");
      }

      setWinner(winnerMessage);
      setIsOpenWinner(true);
    } else if (currentPlayer === "computer" && turnMatches === 0) {
      computerMove();
    }
  }, [totalMatches, currentPlayer, turnMatches, t]);

  return {
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
  };
};

export default useGame;
