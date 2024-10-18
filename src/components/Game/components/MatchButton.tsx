import React from "react";

interface MatchButtonProps {
  handlePlayerTakeMatch: () => void;
  currentPlayer: "player" | "computer";
  turnMatches: number;
  totalMatches: number;
}

const MatchButton: React.FC<MatchButtonProps> = ({
  handlePlayerTakeMatch,
  currentPlayer,
  turnMatches,
  totalMatches
}) => {
  return (
    <button
      onClick={handlePlayerTakeMatch}
      disabled={
        currentPlayer !== "player" || turnMatches >= 3 || totalMatches === 0
      }
    >
      <p
        style={{
          width: "200px",
          height: "100px",
          borderRadius: "100px/60px",
          opacity: 0.4,
          transform: "rotate(-15deg)",
          boxShadow: "40px 60px 20px rgba(0, 0, 0)"
        }}
        className="absolute left-[40%] top-[25%]"
      ></p>
      <img
        src="/matches.webp"
        alt="matches"
        className="absolute z-10 left-[38%] top-[5%] active:scale-105 duration-200 ease-in-out"
      />
    </button>
  );
};

export default MatchButton;
