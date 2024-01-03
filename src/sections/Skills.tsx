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
    <div className="text-center">
      <h2 className="gradient-text">Habilidades</h2>
      {skillsData.map((category: SkillCategory, index: number) => (
        <div className="my-4" key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.skills.map((skill: Skill, skillIndex: number) => (
              <li key={skillIndex}>
                {skill.skill}
                <div className="px-10 md:px-5 lg:px-24">
                  <SkillLevelIndicator level={skill.level} />
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
