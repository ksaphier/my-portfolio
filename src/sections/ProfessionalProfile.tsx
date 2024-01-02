import { professionalProfile } from "../data/Data.json";

function ProfessionalProfile() {
  return (
    <div className="text-center my-10 px-8">
      <h2>Perfil Profesional</h2>
      <p>{professionalProfile}</p>
    </div>
  );
}

export default ProfessionalProfile;
