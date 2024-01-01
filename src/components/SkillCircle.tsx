import React from "react";

interface SkillCircleProps {
  level: "Básico" | "Intermedio" | "Avanzado" | string;
}

const SkillCircle: React.FC<SkillCircleProps> = ({ level }) => {
  const radius = 10; // radius of the circle
  const circumference = 2 * Math.PI * radius; // circumference of the circle

  // Calculate the stroke dash offset based on the skill level
  const getStrokeDashOffset = (level: string): number => {
    switch (level) {
      case "Básico":
        return circumference * (1 - 0.4); // 40% filled
      case "Intermedio":
        return circumference * (1 - 0.6); // 60% filled
      case "Avanzado":
        return circumference * (1 - 0.8); // 80% filled
      default:
        return 0; // 100% filled for any other level
    }
  };

  const getColor = (level: string): string => {
    switch (level) {
      case "Básico":
        return "rgb(244 63 94)";
      case "Intermedio":
        return "rgb(20 184 166)";
      case "Avanzado":
        return "rgb(99 102 241)";
      default:
        return "rgb(234 179 8)";
    }
  };

  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r={radius}
        fill="none"
        stroke="#ddd"
        strokeWidth="5"
      />
      <circle
        cx="25"
        cy="25"
        r={radius}
        fill="none"
        stroke={getColor(level)}
        strokeWidth="5"
        strokeDasharray={circumference}
        strokeDashoffset={getStrokeDashOffset(level)}
        transform="rotate(-90, 25, 25)"
      />
    </svg>
  );
};

export default SkillCircle;
