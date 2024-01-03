import SkillLevelIndicator from "../components/SkillLevelIndicator";
import { skills as skillsData } from "../data/Data.json";

interface Skill {
  skill: string;
  level: "Elementary" | "Intermediate" | "Advanced" | "Native" | string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

function Skills() {
  return (
    <div className="text-center my-10 px-8">
      <h2 className="gradient-text">Habilidades</h2>
      {skillsData.map((category: SkillCategory, index: number) => (
        <div className="my-4" key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.skills.map((skill: Skill, skillIndex: number) => (
              <li key={skillIndex} className="relative my-4">
                <span className="z-10 relative">{skill.skill}</span>
                <div className="absolute inset-0 flex justify-center">
                  <div className="mt-2">
                    <SkillLevelIndicator level={skill.level} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;
