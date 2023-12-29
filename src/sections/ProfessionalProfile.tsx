import { professionalProfile } from "../data/ProfesionalProfile.json";

function ProfessionalProfile() {
  return (
    <div className="text-center my-4">
      <h2>Perfil Profesional</h2>
      <p>{professionalProfile}</p>
    </div>
  );
}

export default ProfessionalProfile;
