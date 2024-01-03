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
      <h2>Habilidades</h2>
      {skillsData.map((category: SkillCategory, index: number) => (
        <div key={index} className="text-">
          <h3 className="">{category.category}</h3>
          <ul className="">
            {category.skills.map((skill: Skill, skillIndex: number) => (
              <li key={skillIndex} className="flex">
                <span className="mx-auto flex">
                  <span className="my-auto">
                    {skill.skill} - {skill.level}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;
