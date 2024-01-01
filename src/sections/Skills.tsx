import React from "react";
import SkillCircle from "../components/SkillCircle";
import { skills as skillsData } from "../data/Skills.json";

interface Skill {
  skill: string;
  level: "Básico" | "Intermedio" | "Avanzado";
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
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
                  <span className="my-auto">{skill.skill}</span>
                  <SkillCircle level={skill.level} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
