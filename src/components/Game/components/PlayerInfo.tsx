import React from "react";

interface PlayerInfoProps {
  playerMatches: number;
  computerMatches: number;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({
  playerMatches,
  computerMatches
}) => {
  return (
    <>
      <p className="absolute z-20 left-[21.2%] top-[10%] font-silkscreen text-[30px]">
        👤 : {playerMatches}
      </p>
      <p className="absolute z-20 right-[21.2%] top-[10%] font-silkscreen text-[30px]">
        🤖 : {computerMatches}
      </p>
    </>
  );
};

export default PlayerInfo;
