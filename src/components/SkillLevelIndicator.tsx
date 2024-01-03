import { IoEllipseSharp } from "react-icons/io5";

const getNumOfActiveLines = (level: string): number => {
  switch (level) {
    case "Elementary":
      return 2;
    case "Intermediate":
      return 3;
    case "Advanced":
      return 4;
    case "Native":
      return 5;
    default:
      return 0;
  }
};

interface SkillLevelIndicatorProps {
  level: string;
}

function SkillLevelIndicator(props: SkillLevelIndicatorProps) {
  const numOfActiveLines = getNumOfActiveLines(props.level);

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <IoEllipseSharp
          key={index}
          className={`rotate-45 w-1/5 ${
            index < numOfActiveLines ? "text-sky-800" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
export default SkillLevelIndicator;
