import { professionalExperience } from "../data/ProfessionalExperience.json";

function ProfessionalExperience() {
  return (
    <div>
      <div className="text-center my-4">
        <h2>Experiencia Profesional</h2>
        {professionalExperience.map((experience, index) => {
          const { company, position, period, duration, projects } = experience;

          return (
            <div key={index} className="my-4">
              <h3>{company}</h3>
              <p>{position}</p>
              <p>{period}</p>
              <p>{duration}</p>
              <p>{projects}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfessionalExperience;
