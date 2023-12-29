import { skills } from "../data/Skills.json";

function Skills() {
  return (
    <div className="text-center my-4">
      <h1>Habilidades</h1>
      {skills.map((category, index) => (
        <div key={index} className="my-4">
          <h2>{category.category}</h2>
          <ul>
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>
                {skill.skill} - Level: {skill.level}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;
