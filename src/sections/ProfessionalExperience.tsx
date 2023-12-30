import { professionalExperience } from "../data/ProfessionalExperience.json";
import { technologies } from "../data/HighlightTechnologies.json";

function highlightTechnologies(text: string) {
  const regex = new RegExp(`(${technologies.join("|")})`, "gi");

  const parts = text.split(regex);

  return parts.map((part, index) =>
    technologies.includes(part) ? (
      <span key={index} className="font-bold">
        {part}
      </span>
    ) : (
      part
    )
  );
}

function ProfessionalExperience() {
  return (
    <div>
      <div className="text-center my-10 px-8">
        <h2>Experiencia Profesional</h2>
        {professionalExperience.map((experience, index) => {
          const { company, position, period, duration, projects } = experience;

          return (
            <div key={index} className="my-6">
              <h3>{company}</h3>
              <p>{position}</p>
              <p>
                {period} ({duration})
              </p>
              <p>{highlightTechnologies(projects)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfessionalExperience;
