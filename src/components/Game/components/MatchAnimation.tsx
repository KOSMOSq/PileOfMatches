import React from "react";

interface MatchAnimationProps {
  isAnimating: boolean;
  animationKey: number;
  animationType: "player" | "computer";
}

const MatchAnimation: React.FC<MatchAnimationProps> = ({
  isAnimating,
  animationKey,
  animationType
}) => {
  if (!isAnimating) {
    return null;
  }

  const animationClass =
    animationType === "player"
      ? "animate-flyAndFallLeft"
      : "animate-flyAndFall";

  return (
    <img
      key={animationKey}
      src="/match.webp"
      alt={`flying ${animationType} match`}
      className={`absolute left-[46%] top-[20%] ${animationClass} z-20 w-24`}
    />
  );
};

export default MatchAnimation;
