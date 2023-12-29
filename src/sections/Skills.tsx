import { skills } from "../data/Skills.json";

function Skills() {
  return (
    <div className="text-center my-6">
      <h2>Habilidades</h2>
      {skills.map((category, index) => (
        <div key={index} className="my-4">
          <h3>{category.category}</h3>
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
